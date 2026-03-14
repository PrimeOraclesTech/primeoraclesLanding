const USDT_BENEFITS = [
  {
    title: 'Стабильность курса',
    description:
      'USDT привязан 1:1 к доллару США. Ваш доход не обесценивается из-за волатильности — вы всегда знаете точную сумму.',
  },
  {
    title: 'Мгновенные выплаты',
    description:
      'Средства поступают на ваш кошелёк за секунды, а не за 3–5 банковских дней. Никаких задержек и заморозок.',
  },
  {
    title: 'Без границ',
    description:
      'Работает в любой стране мира. Не зависит от банковской системы, санкций и валютных ограничений.',
  },
  {
    title: 'Минимальные комиссии',
    description:
      'Комиссия перевода в десятки раз ниже, чем у банковских переводов и платёжных систем. Больше денег остаётся у вас.',
  },
];

export function UsdtSection() {
  return (
    <section className="relative z-0 w-full px-4 md:px-8 pb-12 md:pb-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#26A17B]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <UsdtLogo className="w-16 h-16 md:w-20 md:h-20 mb-5" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Работаем с USDT
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-4 leading-relaxed">
            Все расчёты на платформе проходят в USDT — самом популярном
            стейблкоине в мире. Это значит предсказуемый доход, быстрые
            переводы и полная свобода от банковских ограничений.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {USDT_BENEFITS.map((b) => (
            <div
              key={b.title}
              className="border border-border rounded-2xl p-6 hover:border-[#26A17B]/40 transition-colors"
            >
              <h3 className="text-base font-bold text-[#26A17B] mb-2">
                {b.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UsdtLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill="#26A17B" />
      <text
        x="50"
        y="54"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#fff"
        fontSize="52"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        ₮
      </text>
    </svg>
  );
}
