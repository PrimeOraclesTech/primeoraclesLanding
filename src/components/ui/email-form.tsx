import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/utils';

interface EmailFormProps {
  buttonText?: string;
  placeholder?: string;
  inputClassName?: string;
  buttonClassName?: string;
  className?: string;
  successMessage?: string;
  errorMessage?: string;
}

export function EmailForm({
  buttonText = 'Забрать Бонус',
  placeholder = 'name@email.com',
  inputClassName,
  buttonClassName,
  className,
  successMessage = 'Email сохранён!',
  errorMessage = 'Что-то пошло не так.',
}: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex items-stretch gap-0">
        <input
          type="email"
          required
          placeholder={placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== 'idle' && status !== 'loading') setStatus('idle');
          }}
          disabled={status === 'loading'}
          className={cn(
            'flex-1 min-w-0 bg-transparent border border-[#2E2E2E] border-r-0 rounded-l-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 disabled:opacity-60',
            inputClassName,
          )}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={cn(
            'shrink-0 bg-primary text-primary-foreground px-5 py-3 rounded-r-md font-bold text-sm hover:bg-primary/90 transition-colors cursor-pointer whitespace-nowrap border border-primary disabled:opacity-60 disabled:cursor-not-allowed',
            buttonClassName,
          )}
        >
          {status === 'loading' ? '...' : buttonText}
        </button>
      </form>
      {status === 'success' && (
        <p className="text-green-400 text-xs mt-2">{successMessage}</p>
      )}
      {status === 'error' && (
        <p className="text-destructive text-xs mt-2">{errorMessage}</p>
      )}
      <p className="text-muted-foreground/50 text-[11px] mt-2.5 leading-snug">
        Нажимая кнопку, вы соглашаетесь получать обновления о платформе на указанный email.
      </p>
    </div>
  );
}
