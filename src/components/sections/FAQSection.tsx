import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ_DATA = [
  {
    question: 'Нужны ли вложения для старта?',
    answer:
      'Нет, регистрация и доступ к платформе абсолютно бесплатны. Мы зарабатываем тогда, когда и вы зарабатываете на своем продукте',
  },
  {
    question: 'Как я получу свои деньги?',
    answer:
      'Выплаты производятся в USDT (криптовалюте) сразу после проверки выполнения задания или продаже товара',
  },
  {
    question: 'Как гарантируется качество контента?',
    answer:
      'Вы сами выбираете тип кампании (UGC или Нарезки) и прописываете ТЗ. Вы оплачиваете только те работы, которые соответствуют вашим критериям.',
  },
  {
    question: 'Какая минимальная сумма для запуска кампании?',
    answer:
      'Платформа Prime Oracles гибкая: вы можете начать с небольшого тестового бюджета и масштабироваться, когда увидите результат.',
  },
  {
    question: 'Могу ли я продавать свои курсы через ваш маркетплейс?',
    answer:
      'Да, наш маркетплейс создан для цифровых продуктов любого типа: от софта и ботов до чек-листов и наставничества.',
  },
  {
    question: 'Как работает система арбитража?',
    answer:
      'Если между заказчиком и исполнителем возникает спор, наша команда проверяет выполнение ТЗ и выносит справедливое решение.',
  },
  {
    question: 'Безопасны ли сделки на маркетплейсе?',
    answer:
      'Все платежи защищены. Продавец получает средства только после того, как покупатель получил доступ к проверенному продукту.',
  },
];

export function FAQSection() {
  return (
    <section className="w-full px-4 md:px-8 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
          Вопросы которые могут возникнуть:
        </h2>
        <Accordion
          type="single"
          collapsible
          className="max-w-2xl w-full mx-auto border border-border px-4 sm:px-8 py-1 rounded-xl bg-card/50"
        >
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem
              key={index}
              value={String(index)}
              className={`border-border ${index === FAQ_DATA.length - 1 ? 'border-none' : ''}`}
            >
              <AccordionTrigger className="text-foreground hover:text-primary text-start text-sm md:text-base py-3">
                <span>{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs md:text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
