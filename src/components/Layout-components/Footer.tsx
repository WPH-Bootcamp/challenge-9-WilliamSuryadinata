export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">Movie Explorer</h3>
            <p className="text-sm text-muted-foreground">
              Discover and explore movies from around the world.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Data Source</h3>
            <p className="text-sm text-muted-foreground">
              Powered by{' '}
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                The Movie Database (TMDB)
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Project</h3>
            <p className="text-sm text-muted-foreground">
              Challenge 9 - React + TypeScript
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Movie Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
