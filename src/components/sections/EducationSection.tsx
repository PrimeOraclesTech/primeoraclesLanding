import { SpotLightShoeShape } from '@/assets/graphics/SpotLightShoeShape';
import primeLogo from '@/assets/PrimeLearningLogo.png';

export function EducationSection() {
  return (
    <section className="relative z-0 w-full px-4 md:px-8 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
          Наш сайт подходит каждому, ведь у нас есть
          <br className="hidden md:block" />
          система обучения
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-6">
          <LearningCard />
          <LearningCard />
        </div>
        <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
          Практические материалы о том, как работать с платформой, создавать продающий контент и увеличивать просмотры.
        </p>
      </div>
      <SpotLightShoeShape className="text-white absolute right-0 max-w-[25vw] top-1/2 -translate-y-1/2 pointer-events-none blur-[128px] opacity-20 -z-10" />
    </section>
  );
}

function LearningCard() {
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-4">
      <img
        src={primeLogo}
        alt="Prime Oracles Learning"
        className="w-28 h-20 md:w-36 md:h-24 rounded-lg object-cover shrink-0"
        loading="lazy"
      />
      <div className="min-w-0">
        <h3 className="text-sm font-bold text-foreground mb-1">Тема</h3>
        <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
          Блогер с суммарной аудит 12млн
          <br />
          набрать просмотры
        </p>
        <p className="text-xs text-muted-foreground mb-2.5">Категория:</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 text-xs border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors cursor-pointer">
            Статья
          </button>
          <button className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors cursor-pointer">
            Видео
          </button>
        </div>
      </div>
    </div>
  );
}
