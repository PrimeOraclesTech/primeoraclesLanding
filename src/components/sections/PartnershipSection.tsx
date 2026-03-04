import { SpotLightShoeShape } from '@/assets/graphics/SpotLightShoeShape';

export function PartnershipSection() {
  return (
    <section className="relative z-0 w-full px-4 md:px-8 pb-12 md:pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-5/12 shrink-0 flex justify-center">
            <div className="rounded-2xl overflow-hidden max-w-[320px] md:max-w-full">
              <img
                src="/img/illustrations/partnership.jpg"
                alt="Партнёрство с Prime Oracles"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Стать партнером Prime Oracles
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              Мы открыты к долгосрочному партнерству с владельцами
              крупных медиа-ресурсов, инфлюенсеров, разработчиками
              софта и рекламными агентствами. Давайте строить
              экосистему будущего вместе.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Стать партнером
            </a>
          </div>
        </div>
      </div>
      <SpotLightShoeShape className="text-white absolute left-0 max-w-[25vw] top-1/2 -translate-y-1/2 pointer-events-none blur-[128px] opacity-20 -z-10" />
    </section>
  );
}
