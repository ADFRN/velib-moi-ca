import Link from 'next/link';
import Map from '@/components/map';

export default function MapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="text-2xl font-bold">Mon vélib</span>
        </Link>
      </header>
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <h1 className="text-2xl font-bold mb-4">
          Trouvez une station vélib près de vous
        </h1>
        <div className="w-full h-[calc(100vh-12rem)] rounded-lg shadow-lg overflow-hidden">
          <Map />
        </div>
      </main>
      <footer className="flex flex-col justify-center gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
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
