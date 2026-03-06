import learning1 from '@/assets/learning1.jpg';
import learning2 from '@/assets/learning2.png';

interface LearningCardProps {
  src: string;
  title: string;
  description: string;
}

const LEARNING_CARDS: LearningCardProps[] = [
  {
    src: learning1,
    title: 'Как создавать контент который будет набирать просмотры',
    description: 'В этом уроке наш SEO набравший 4 000 000 000+ просмотров, раcскажет вам какие инструменты нужно использовать чтобы увеличить ваши охваты в десятки раз',
  },
  {
    src: learning2,
    title: 'От идеи до первых $1000 на цифровых продуктах',   
    description: 'Полное руководство по запуску и монетизации ваших знаний или софта внутри экосистемы Prime Oracles. Мы учим не просто «выкладывать файл», а строить системный бизнес.',
  },
];

export function EducationSection() {
  return (
    <section className="relative z-0 w-full px-4 md:px-8 pb-12 md:pb-20">
      <div className="absolute top-0 -left-16 w-[400px] h-[500px] bg-white/2 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-0 w-[350px] h-[350px] bg-[#7B3FD4]/3 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
          Наш сайт подходит каждому, ведь у нас есть
          <br className="hidden md:block" />
          система обучения
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-6">
          {LEARNING_CARDS.map((card, i) => (
            <LearningCard key={i} {...card} />
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
          Практические материалы о том, как работать с платформой, создавать продающий контент и увеличивать просмотры.
        </p>
      </div>
    </section>
  );
}

function LearningCard({ src, title, description }: LearningCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl flex overflow-hidden">
      <div className="w-[35%] shrink-0 self-stretch">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 min-w-0 p-4 flex flex-col">
        <h3 className="text-sm font-bold text-foreground mb-1.5">{title}</h3>
        <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
          {description}
        </p>
        <p className="text-xs text-muted-foreground mb-2.5">Категория:</p>
        <div className="flex items-center gap-2 mt-auto">
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
