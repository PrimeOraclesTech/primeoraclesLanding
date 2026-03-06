import productCrypto from '@/assets/product-crypto.jpg';
import productSoftware from '@/assets/product-software.jpg';
import productTradingBot from '@/assets/product-trading-bot.jpg';
import productWealth from '@/assets/product-wealth.jpg';

const PRODUCTS = [
  {
    id: '1',
    title: 'Криптовалютная торговая стратегия, которая работае...',
    cover: productCrypto,
    creator: 'Crypto Auto Pump Signals Pro',
    price: 230.0,
    rating: 5.0,
    reviews: 145,
  },
  {
    id: '2',
    title: 'Продажа торгового бота на форексе',
    cover: productTradingBot,
    creator: 'The Haven Free',
    price: 40.0,
    rating: 4.1,
    reviews: 521,
  },
  {
    id: '3',
    title: 'Софт по авто-созданию контента в Adobe',
    cover: productSoftware,
    creator: 'Quavo Speaks',
    price: 100.0,
    rating: 5.0,
    reviews: 19,
  },
  {
    id: '4',
    title: '№1 комьюнити по заработку с AI',
    cover: productWealth,
    creator: 'Wealth Group Credit Card Pay',
    price: 10.0,
    rating: 4.95,
    reviews: 421,
  },
];

export function ProductsSection() {
  return (
    <section className="w-full px-4 md:px-8 pb-12 md:pb-20 relative z-0">
      <div className="absolute -top-24 right-0 w-[500px] h-[400px] bg-[#7B3FD4]/4 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 -left-16 w-[400px] h-[400px] bg-primary/3.5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Запускайте и монетизируйте{' '}
            <span className="text-accent italic underline decoration-accent/40 underline-offset-4">
              любой
              <br />
              цифровой продукт
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm md:text-base max-w-2xl mx-auto">
            От веб-приложений и автоматизаций до обучающих программ и закрытых
            комьюнити — всё в одном месте
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[number] }) {
  return (
    <div className="group cursor-pointer bg-card rounded-xl overflow-hidden border border-border hover:border-primary/20 transition-colors">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={product.cover}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute bottom-3 right-3">
          <span className="bg-[#22C55E] text-white px-2.5 py-1 rounded text-xs font-bold">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="p-3.5">
        <h3 className="font-medium text-foreground line-clamp-2 leading-snug mb-1 text-sm">
          {product.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-2 truncate">{product.creator}</p>
        <div className="flex items-center gap-1.5">
          <Stars rating={product.rating} />
          <span className="text-xs text-primary font-medium">{product.rating.toFixed(product.rating % 1 === 0 ? 1 : 2)}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
}

let halfStarCounter = 0;

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  const gradientId = `halfStar-${++halfStarCounter}`;
  const starPath = 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z';

  return (
    <div className="flex items-center gap-px">
      {Array.from({ length: full }).map((_, i) => (
        <svg key={`f${i}`} className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d={starPath} />
        </svg>
      ))}
      {hasHalf && (
        <svg className="w-3 h-3 text-primary" viewBox="0 0 20 20">
          <defs>
            <linearGradient id={gradientId}>
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#3a3a3a" />
            </linearGradient>
          </defs>
          <path fill={`url(#${gradientId})`} d={starPath} />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg key={`e${i}`} className="w-3 h-3 text-[#3a3a3a]" fill="currentColor" viewBox="0 0 20 20">
          <path d={starPath} />
        </svg>
      ))}
    </div>
  );
}
