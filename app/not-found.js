import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-bold text-accent-pink/20 select-none">404</h1>
      
      <div className="absolute">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          It works on my machine... 
          <span className="inline-block hover:animate-spin ml-2">¯\_(ツ)_/¯</span>
        </h2>
        
        <p className="text-muted max-w-md mx-auto mb-8 text-lg">
          The page you are looking for might have been moved, deleted, or is currently hiding in a parallel universe.
        </p>

        <div className="space-y-4">
            <Link 
              href="/" 
              className="inline-block px-8 py-3 bg-foreground text-background font-bold rounded-full hover:bg-accent-pink hover:text-white transition-all transform hover:scale-105"
            >
              Return Home
            </Link>
            
            <p className="text-xs text-muted/50 mt-8 font-mono">
                Error Code: ID-10-T / LAYER-8-ISSUE
            </p>
        </div>
      </div>
    </div>
  );
}
