export default function Hero() {
  return (
    <section className="w-full pt-32 pb-16 bg-transparent">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight leading-tight">
          Welcome to <span className="border-b-4 border-accent-pink/60 pb-1">My Blog</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl font-light leading-relaxed">
          A space for minimal thoughts, code snippets, and ideas. 
          Explored with <span className="text-accent-pink">curiosity</span>.
        </p>
      </div>
    </section>
  );
}
