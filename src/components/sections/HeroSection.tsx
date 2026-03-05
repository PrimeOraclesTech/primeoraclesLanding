import { SpotLightShape } from '../../assets/graphics/SpotLightShape.tsx';
import { SpotLightShoeShape } from '../../assets/graphics/SpotLightShoeShape.tsx';

export function HeroSection() {
  return (
    <div className="relative p-4 md:p-6 lg:p-8 flex flex-col items-center">
      <div className="flex items-center relative mb-36 gap-6 min-[900px]:mt-20 z-1 w-full max-w-screen-2xl mx-auto min-[900px]:flex-row flex-col">
        <div className="w-full min-[900px]:w-[40%] min-[900px]:shrink-0 z-10 items-center flex flex-col min-[900px]:items-start min-[900px]:block">
          <h1 className="flex min-[900px]:flex-col gap-x-4 flex-wrap items-start text-6xl min-[280px]:text-7xl xl:text-8xl min-[1660px]:text-[120px] font-bebas text-light-accent tracking-wider mb-4">
            <span>PRIME</span>
            <span className="min-[1660px]:text-[130px]">ORACLES</span>
          </h1>
          <p className="text-foreground font-russo text-sm min-[440px]:text-md sm:text-lg xl:text-xl min-[1660px]:text-2xl opacity-75 text-center min-[900px]:text-left">
            Зарабатывай на контенте и цифровых
            <br />
            продуктах без команды, без рисков и без
            <br />
            ручной возни
          </p>
          <div className="flex items-stretch gap-0 max-w-sm mt-5">
            <input
              type="email"
              placeholder="name@email.com"
              className="flex-1 min-w-0 bg-transparent border border-[#2E2E2E] border-r-0 rounded-l-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
            <button className="shrink-0 bg-primary text-primary-foreground px-5 py-3 rounded-r-md font-bold text-sm hover:bg-primary/90 transition-colors cursor-pointer whitespace-nowrap border border-primary">
              Забрать Бонус
            </button>
          </div>
        </div>
        <img
          className="min-w-0 max-w-[min(900px,100%)] -z-10 flex-1 w-[480px] min-[900px]:w-[55%] lg:w-[60%] min-[1300px]:w-full"
          src="/img/illustrations/home_hero_cover.avif"
          alt="Hero cover"
        />

          {/* Graphics */}
          <img
            className="absolute bottom-0 translate-y-8 left-0 -z-20"
            src="/img/illustrations/hero_graphics.avif"
            alt="Hero graphics"
          />

          <SpotLightShape className="text-accent absolute right-[25vw] max-w-[28vw] w-[400px] h-[400px] top-1/2 -translate-y-1/2 pointer-events-none blur-[128px] opacity-60 -z-20" />
          <SpotLightShoeShape className="text-white absolute right-0 max-w-[25vw] top-1/2 -translate-y-[calc(50%-8em)] pointer-events-none blur-[128px] opacity-20 -z-20" />
      </div>
    </div>
  );
}
