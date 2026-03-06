export function JoinSection() {
  return (
    <section id="join" className="relative z-0 w-full px-4 md:px-8 pb-12 md:pb-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/6 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Присоединиться</h2>
        <div className="flex items-stretch gap-0 mb-4">
          <input
            type="email"
            placeholder="name@email.com"
            className="flex-1 min-w-0 bg-transparent border border-border border-r-0 rounded-l-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
          <button className="shrink-0 bg-primary text-primary-foreground px-5 py-3 rounded-r-md font-bold text-sm hover:bg-primary/90 transition-colors cursor-pointer whitespace-nowrap">
            Ранний доступ
          </button>
        </div>
        <a
          href="#"
          className="block w-full border border-border rounded-md px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors text-center"
        >
          Наш Телеграм Канал
        </a>
      </div>
    </section>
  );
}
