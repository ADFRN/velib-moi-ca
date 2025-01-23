'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  DirectionsRenderer,
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import getStations from '@/api';
import DirectionsResult = google.maps.DirectionsResult;
import { Spinner } from '@heroui/spinner';

export interface Station {
  coordonnees_geo: {
    lat: number;
    lon: number;
  };
  name: string;
  distance?: number;
  numbikesavailable: number;
  mechanical: number;
  ebike: number;
}

export default function Map() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [stations, setStations] = useState<Station[]>([]);
  const [directions, setDirections] = useState<DirectionsResult | null>(null);
  const directionsRendererRef = useRef(null);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          await getStations(latitude, longitude)
            .then((data) => {
              setStations(data);
              setIsLoading(false);
            })
            .catch((err) => {
              console.log('Impossible de récupérer les stations.');
              console.error(err);
            });
        },
        (error) => {
          console.error(
            "Erreur lors de l'obtention de la géolocalisation :",
            error,
          );
        },
        { enableHighAccuracy: true },
      );
    } else {
      console.error(
        "La géolocalisation n'est pas supportée par ce navigateur.",
      );
    }
  }, []);

  if (isLoading || !userLocation) {
    return (
      <div>
        <Spinner size="lg" label="Je cherche un vélib proche de toi..." />
      </div>
    );
  }

  const handleDirections = (station: Station) => {
    const directionsService = new google.maps.DirectionsService();

    const request = {
      origin: new google.maps.LatLng(userLocation.lat, userLocation.lng),
      destination: new google.maps.LatLng(
        station.coordonnees_geo.lat,
        station.coordonnees_geo.lon,
      ),
      travelMode: google.maps.TravelMode.WALKING,
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {
        console.error("Erreur lors du calcul de l'itinéraire", status);
      }
    });
  };

  const generateGoogleMapsLink = (station: Station) => {
    const origin = `${userLocation.lat},${userLocation.lng}`;
    const destination = `${station.coordonnees_geo.lat},${station.coordonnees_geo.lon}`;
    const travelMode = 'driving';
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=${travelMode}`;
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100vh' }}
        center={userLocation}
        options={{
          fullscreenControl: false,
          mapTypeControl: false,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
        }}
        zoom={15}
      >
        <Marker position={userLocation} />
        {stations.map((station, index) => (
          <Marker
            key={index}
            position={{
              lat: station.coordonnees_geo.lat,
              lng: station.coordonnees_geo.lon,
            }}
            icon="https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            onClick={() => {
              setSelectedStation(station);
              setIsInfoWindowOpen(true);
            }}
          />
        ))}

        {selectedStation && isInfoWindowOpen && (
          <InfoWindow
            position={{
              lat: selectedStation.coordonnees_geo.lat,
              lng: selectedStation.coordonnees_geo.lon,
            }}
            onCloseClick={() => setSelectedStation(null)}
            options={{ headerDisabled: true }}
          >
            <div className="text-black gap-1 flex flex-col items-center justify-center">
              <h3>{selectedStation.name}</h3>
              <p>Vélos disponibles : {selectedStation.numbikesavailable}</p>
              <p>Vélos mécaniques : {selectedStation.mechanical}</p>
              <p>Vélos électriques : {selectedStation.ebike}</p>
              <p>Distance : {selectedStation.distance} mètres</p>
              <div className="flex justify-center flex-col">
                <button
                  onClick={() => {
                    handleDirections(selectedStation);
                    setIsInfoWindowOpen(false);
                  }}
                  style={{
                    background: 'blue',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Itinéraire
                </button>
                <a
                  href={generateGoogleMapsLink(selectedStation)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'blue',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </InfoWindow>
        )}

        {directions && (
          <DirectionsRenderer
            directions={directions}
            ref={directionsRendererRef}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}
