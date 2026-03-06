import { EmailForm } from '@/components/ui/email-form';

export function MissionBanner() {
  return (
    <section className="w-full px-4 md:px-8 pb-12 md:pb-16">
      <div className="flex flex-col items-center rounded-2xl overflow-hidden bg-linear-to-br from-[#7B3FD4] via-[#9B5FE8] to-[#7B3FD4] max-w-7xl mx-auto pt-6 pb-10 md:pb-14 px-6">
        <img
          className="w-[120px] sm:w-[160px] md:w-[200px] object-contain pointer-events-none mb-4"
          src="/img/illustrations/hand_cash.avif"
          alt="Доход для каждого"
          loading="lazy"
        />
        <div className="flex flex-col items-center text-center">
          <h2 className="font-oswald text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Наша миссия — обеспечить каждому доход
          </h2>
          <EmailForm
            className="w-full max-w-md"
            inputClassName="bg-white/15 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:ring-white/40"
          />
        </div>
      </div>
    </section>
  );
}
