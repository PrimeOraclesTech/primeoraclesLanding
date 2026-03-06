
export function BenefitsSection() {
  return (
    <section className="relative z-0 w-full px-4 md:px-8 pb-12 md:pb-20">
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Преимущества
            <br />
            ранней регистрации!
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mt-4">
            Мы проведем конкурс в котором будет 8 призовых мест
            <br />
            Присоединяйтесь и оставайтесь в курсе событий.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <BenefitCard
            title="Global Marketing"
            description="«2 победителя получат полное продвижение продукта от нашей команды: от создания креативов до виральных охватов по всей сети»."
          />
          <BenefitCard
            title={
              <>
                Медийный буст от Блогера
                <br />
                (YouTube на 7 млн)
                <br />
                <span className="text-foreground">Lesha Maisak</span>
              </>
            }
            description="«Главный победитель попадет в обзор на YouTube-канале с аудиторией 7,000,000+ подписчиков. Мгновенная узнаваемость вашего бренда»."
          />
          <BenefitCard
            title="Prime Status"
            description="«5 победителей получат сниженную комиссию на 365 дней и статус &quot;Проверенного автора&quot; для приоритетного вывода ваших продуктов в топ»."
          />
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  title,
  description,
}: {
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
      <h3 className="text-base md:text-lg font-bold text-primary mb-3 text-center leading-snug">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
}
