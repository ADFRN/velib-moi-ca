import Link from 'next/link';
import { MapPin, Navigation, Bike, Search, ThumbsUp } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Bike className="h-6 w-6 mr-2" />
          <span className="text-lg font-bold">Mon vélib</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Trouvez une station vélib près de vous
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Ne perdez plus de temps à chercher une station vélib. Utilisez
                  notre application pour trouver et naviguer rapidement vers des
                  vélos disponibles.
                </p>
              </div>
              <div className="space-x-4">
                <a
                  href="/map"
                  className="inline-flex uppercase font-bold items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 dark:text-white dark:bg-black h-11 px-8"
                >
                  Trouver un velib
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 dark:text-white">
              Fonctionnalités
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <MapPin className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold dark:text-white">
                  Localisation en temps réel
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Détectez automatiquement votre position et trouvez les
                  stations Velib les plus proches.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Bike className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold dark:text-white">
                  Disponibilité des vélos
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Consultez le nombre de vélos disponibles dans chaque station
                  en temps réel.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Navigation className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold dark:text-white">
                  Navigation
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Obtenez des itinéraires pour vous rendre à la station Velib de
                  votre choix.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Comment ça marche
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Search className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold">1. Recherche</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Activez la localisation pour trouver les stations Velib à
                  proximité.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <MapPin className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold">2. Localisation</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Visualisez les stations Velib à proximité sur une carte
                  interactive.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <ThumbsUp className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold">3. Départ</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Choissisez une station Velib et suivez les indications pour
                  vous y rendre.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-white">
                  Démarrez votre voyage
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Ne perdez plus de temps à chercher une station vélib. Utilisez
                  notre application pour trouver et naviguer rapidement vers des
                  vélos disponibles.
                </p>
              </div>
              <div className="space-x-4">
                <a
                  href="/map"
                  className="inline-flex uppercase font-bold items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 dark:text-white dark:bg-black h-11 px-8"
                >
                  C&apos;est parti !
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Made with ❤️ by{' '}
          <a
            href="https://github.com/adfrn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adrien
          </a>
        </p>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          Votre géolocalisation n&apos;est pas stockée par nos services et ne
          sera donc pas utilisée a d&apos;autres fins.
        </p>
      </footer>
    </div>
  );
}
