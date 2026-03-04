const REWARDS_DATA = [
  {
    name: 'CryptoMaster',
    description: 'Создайте видео обзор нашей платформы и получите вознаграждение за каждый просмотр',
    logo: '🪙',
    rate: '$0.02',
    paidAmount: '$450',
    totalAmount: '$1,000',
    progress: 45,
    category: 'Крипто',
    type: 'Видео',
    networks: ['YouTube', 'TikTok'],
  },
  {
    name: 'TradingPro',
    description: 'Расскажите о вашем опыте трейдинга с использованием наших инструментов',
    logo: '📈',
    rate: '$0.03',
    paidAmount: '$780',
    totalAmount: '$2,000',
    progress: 39,
    category: 'Трейдинг',
    type: 'Обзор',
    networks: ['Instagram', 'YouTube'],
  },
  {
    name: 'EduChannel',
    description: 'Поделитесь образовательным контентом о цифровых продуктах и заработке',
    logo: '📚',
    rate: '$0.01',
    paidAmount: '$200',
    totalAmount: '$500',
    progress: 40,
    category: 'Обучение',
    type: 'Статья',
    networks: ['Telegram', 'YouTube'],
  },
];

export function RewardsSection() {
  return (
    <section className="w-full px-4 md:px-8 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card border border-border rounded-xl p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-4 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-xl md:text-2xl font-bold text-light-accent mb-2">
                Награды за контент
              </h2>
              <p className="text-muted-foreground text-xs md:text-sm font-roboto leading-relaxed mb-2">
                Это маркетинговый инструмент, который связывает ваш бренд с создателями контента —
                Они создают контент, публикуют его в своих социальных сетях, а вы платите им за просмотры
              </p>
              <p className="text-muted-foreground/50 text-xs font-roboto">
                Но только после того, как одобрите их публикацию.
              </p>
            </div>
            {REWARDS_DATA.slice(0, 2).map((reward) => (
              <RewardCard key={reward.name} reward={reward} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RewardCard({ reward }: { reward: (typeof REWARDS_DATA)[number] }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-4 transition-colors hover:border-primary/20 cursor-pointer">
      <div className="flex items-center justify-between mb-3 gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center shrink-0">
            <span className="text-base">{reward.logo}</span>
          </div>
          <span className="font-semibold text-foreground text-sm truncate">{reward.name}</span>
        </div>
        <div className="flex items-center gap-1 bg-muted px-2.5 py-0.5 rounded-full shrink-0">
          <span className="text-xs font-medium text-foreground">{reward.rate}</span>
          <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{reward.description}</p>

      <div className="mb-3">
        <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
          <span>Выплачено {reward.paidAmount} из {reward.totalAmount}</span>
          <span>{reward.progress}%</span>
        </div>
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${reward.progress}%` }}
          />
        </div>
      </div>

      <div className="flex gap-5 text-[10px]">
        <div>
          <span className="text-muted-foreground">Категория</span>
          <p className="text-foreground font-medium mt-0.5">{reward.category}</p>
        </div>
        <div>
          <span className="text-muted-foreground">Тип</span>
          <p className="text-foreground font-medium mt-0.5">{reward.type}</p>
        </div>
        <div>
          <span className="text-muted-foreground">Соц. сети</span>
          <p className="text-foreground font-medium mt-0.5">{reward.networks.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
