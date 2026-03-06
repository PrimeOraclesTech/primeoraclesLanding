import logo1 from '@/assets/logo-1.png';
import logo2 from '@/assets/logo-2.png';
import logo3 from '@/assets/logo-3.png';
import logo4 from '@/assets/logo-4.png';


const FEATURED_REWARD = {
  name: 'Unblox Game',
  avatar: logo1,
  description: 'Получайте деньги за просмотры вирусного конт...',
  rate: '$3.50/1K',
  paidAmount: '43,795.5$',
  totalAmount: '50,000$',
  progress: 88,
  category: 'Личный бренд',
  type: 'UGS',
  networks: ['instagram', 'youtube', 'tiktok'] as const,
};

const REWARDS_DATA = [
  {
    name: 'Eleps',
    avatar: logo2,
    description: 'Получайте выплаты за нерезки стримов и в...',
    rate: '$2.50/1K',
    paidAmount: '32,795.5$',
    totalAmount: '50,000$',
    progress: 65,
    category: 'Категория',
    type: 'Тип',
    networks: ['instagram', 'youtube', 'tiktok'] as const,
  },
  {
    name: 'Александр Соколов',
    avatar: logo3,
    description: 'Создавайте мотивационные ролики с участ...',
    rate: '$2.00/1K',
    paidAmount: '6,795.5$',
    totalAmount: '10,000$',
    progress: 78,
    category: 'Категория',
    type: 'Тип',
    networks: ['instagram', 'youtube'] as const,
  },
  {
    name: 'Quaks Nod',
    avatar: logo4,
    description: 'Делайте обзоры на наше приложение и полу...',
    rate: '$2.50/1K',
    paidAmount: '29,795.5$',
    totalAmount: '30,000$',
    progress: 78,
    category: 'Категория',
    type: 'Тип',
    networks: ['instagram', 'youtube'] as const,
  },
];

export function MarketplaceInfoSection() {
  return (
    <section className="relative z-0 w-full px-4 md:px-8 pb-12 md:pb-20">
      <div className="absolute -top-32 -left-24 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute -bottom-24 -right-16 w-[400px] h-[400px] bg-[#7B3FD4]/3.5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
          Больше чем маркетплейс
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto text-sm md:text-base mb-8">
          Размещайте цифровые продукты и запускайте армию креаторов для их
          продвижения в TikTok, Reels и Shorts и др за пару кликов.
        </p>

        <div className="border border-[#2E2E2E] rounded-xl bg-[#121212]/50 backdrop-blur-sm p-5 md:p-6 space-y-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]">
          {/* Top: description left + featured card right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5 items-start">
            <div className="flex flex-col justify-center py-2">
              <h3 className="text-xl md:text-2xl font-bold text-light-accent mb-3">
                Награды за контент
              </h3>
              <p className="text-foreground/80 text-sm md:text-[15px] leading-relaxed mb-4 max-w-lg">
                Это маркетинговый инструмент, который связывает ваш бренд с
                создателями контента — Они создают контент, публикуют его в своих социальных сетях, а
                вы платите им за просмотры
              </p>
              <p className="text-muted-foreground/50 text-xs italic">
                Но только после того, как одобрите их публикацию.
              </p>
            </div>
            <RewardCard reward={FEATURED_REWARD} />
          </div>
          {/* Bottom: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REWARDS_DATA.map((reward) => (
              <RewardCard key={reward.name} reward={reward} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Reward = typeof FEATURED_REWARD;

function RewardCard({ reward }: { reward: Reward }) {
  return (
    <div className="bg-[#121212] border border-[#2E2E2E] rounded-xl p-4 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-colors hover:border-primary/20">
      {/* Header: avatar + name + rate */}
      <div className="flex items-center justify-between mb-2 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={reward.avatar}
            alt={reward.name}
            className="w-8 h-8 rounded-full object-cover shrink-0"
          />
          <span className="font-semibold text-foreground text-sm truncate">{reward.name}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-primary text-primary-foreground px-2.5 py-0.5 rounded-full shrink-0">
          <span className="text-xs font-bold">{reward.rate}</span>
          <span className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground mb-2 truncate">{reward.description}</p>

      {/* Progress */}
      <div className="mb-3">
        <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
          <span>Выплачено {reward.paidAmount} из {reward.totalAmount}</span>
          <span>{reward.progress}%</span>
        </div>
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${reward.progress}%` }}
          />
        </div>
      </div>

      {/* Meta row */}
      <div className="flex items-end gap-4 text-[10px]">
        <div className="min-w-0">
          <span className="text-muted-foreground block">Категория</span>
          <p className="text-foreground font-medium mt-0.5 truncate">{reward.category}</p>
        </div>
        <div className="min-w-0">
          <span className="text-muted-foreground block">Тип</span>
          <p className="text-foreground font-medium mt-0.5 truncate">{reward.type}</p>
        </div>
        <div className="min-w-0">
          <span className="text-muted-foreground block">Социальные сети</span>
          <div className="flex items-center gap-1 mt-0.5">
            {reward.networks.map((net) => (
              <SocialIcon key={net} network={net} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ network }: { network: string }) {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg className="w-3.5 h-3.5 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    youtube: (
      <svg className="w-3.5 h-3.5 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    tiktok: (
      <svg className="w-3.5 h-3.5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  };

  return <>{icons[network] ?? null}</>;
}
