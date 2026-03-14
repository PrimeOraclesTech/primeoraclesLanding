export function JoinSection() {
  return (
    <section id="join" className="relative z-0 w-full px-4 md:px-8 pb-12 md:pb-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/6 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Присоединиться</h2>
        <a
          href="https://t.me/primeoracles"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground px-8 py-3 rounded-md font-bold text-sm hover:bg-primary/90 transition-colors"
        >
          Присоединиться
        </a>
      </div>
    </section>
  );
}
