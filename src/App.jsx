const services = [
  {
    title: "Website Development",
    description: "Лендінги, сайти-візитки та каталоги товарів із сучасним дизайном.",
    metric: "01",
  },
  {
    title: "AI Automation",
    description: "Telegram-боти, AI-помічники та автоматизація рутинних процесів.",
    metric: "02",
  },
  {
    title: "Business Solutions",
    description: "Інструменти для покращення роботи компанії та залучення клієнтів.",
    metric: "03",
  },
];

const portfolio = [
  {
    title: "Coffee Shop Website",
    description: "Концепт сучасного сайту для кав'ярні",
    gradient: "from-amber-300/70 via-orange-500/40 to-violet-600/40",
    tags: ["Brand", "Landing", "Mobile"],
  },
  {
    title: "Mobile Store Website",
    description: "Концепт сайту магазину смартфонів та аксесуарів",
    gradient: "from-sky-300/70 via-blue-500/40 to-violet-600/40",
    tags: ["Catalog", "UX", "Sales"],
  },
  {
    title: "Construction Company Website",
    description: "Концепт сайту будівельної компанії",
    gradient: "from-slate-200/70 via-cyan-500/35 to-indigo-600/40",
    tags: ["Corporate", "Trust", "Leads"],
  },
];

const process = ["Аналіз бізнесу", "Створення концепції", "Розробка", "Запуск та підтримка"];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlowButton({ children, variant = "primary", href = "#contact" }) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300";
  const styles =
    variant === "primary"
      ? "bg-white text-ink shadow-[0_0_45px_rgba(139,92,246,0.35)] hover:-translate-y-1 hover:bg-slate-100"
      : "border border-white/12 bg-white/[0.04] text-white hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <span className="transition duration-300 group-hover:translate-x-1">
        <ArrowIcon />
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/70 px-4 py-3 shadow-card backdrop-blur-2xl">
        <a href="#home" className="flex items-center gap-3" aria-label="VeloraLabs головна">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-black text-white shadow-glow">
            VL
          </span>
          <span className="font-display text-sm font-bold tracking-[0.22em] text-white">VeloraLabs</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex" aria-label="Основна навігація">
          <a className="hover:text-white" href="#services">
            Послуги
          </a>
          <a className="hover:text-white" href="#portfolio">
            Роботи
          </a>
          <a className="hover:text-white" href="#process">
            Процес
          </a>
          <a className="hover:text-white" href="#contact">
            Контакти
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-slate-100 sm:inline-flex"
        >
          Обговорити проект
        </a>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-14 aspect-[0.95] w-full max-w-[560px] lg:mt-0">
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-violet-600/30 via-blue-500/10 to-cyan-400/20 blur-3xl" />
      <div className="absolute left-4 top-8 h-24 w-24 animate-float rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-[1px]" />
      <div className="absolute bottom-10 right-8 h-32 w-32 animate-float-delayed rounded-full border border-violet-300/20 bg-violet-400/10 blur-[1px]" />

      <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.045] p-5 shadow-card backdrop-blur-xl">
        <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <span className="text-xs text-slate-400">AI workflow / live</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-ink/70 p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.28em] text-cyan-200">Automation</span>
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            </div>
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <p>
                <span className="text-violet-300">const</span> growth = await build(product)
              </p>
              <p>
                <span className="text-cyan-300">AI</span>.optimize(leads, sales)
              </p>
              <p className="text-emerald-300">deploy business.solution()</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[68, 84, 52].map((height) => (
                <span
                  key={height}
                  className="rounded-full bg-gradient-to-t from-violet-500 to-cyan-300"
                  style={{ height }}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/12 to-white/[0.03] p-5">
              <p className="text-4xl font-black text-white">4x</p>
              <p className="mt-2 text-sm text-slate-300">швидший запуск MVP та лендингів</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
              <div className="mb-4 h-2 rounded-full bg-white/10">
                <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
              </div>
              <p className="text-sm text-slate-300">UX, код, AI та аналітика в одному процесі.</p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-3xl border border-white/10 bg-black/25 p-4">
          <div className="grid grid-cols-12 gap-2">
            {Array.from({ length: 48 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 rounded-full bg-white/10"
                style={{
                  opacity: index % 5 === 0 ? 0.9 : 0.28,
                  background:
                    index % 7 === 0
                      ? "linear-gradient(90deg, rgba(139,92,246,.9), rgba(56,189,248,.9))"
                      : undefined,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">
      <span className="h-px w-9 bg-cyan-300/60" />
      {children}
    </p>
  );
}

function App() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-ink bg-radial-grid text-white">
      <Header />

      <section className="relative px-4 pb-24 pt-36 sm:pt-44 lg:min-h-screen lg:pb-28">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_50%_20%,black,transparent_72%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
              Digital studio for websites, AI and business growth
            </div>
            <h1 className="max-w-5xl font-display text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              Сучасні сайти та AI-рішення для бізнесу
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Створюємо цифрові продукти, автоматизуємо процеси та допомагаємо компаніям розвиватися онлайн.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <GlowButton href="#contact">Обговорити проект</GlowButton>
              <GlowButton href="#portfolio" variant="secondary">
                Переглянути роботи
              </GlowButton>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-card backdrop-blur-xl sm:p-10 lg:grid-cols-[1fr_0.82fr]">
          <div>
            <SectionLabel>Про VeloraLabs</SectionLabel>
            <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
              Ми створюємо рішення, які допомагають бізнесу працювати ефективніше
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg leading-8 text-slate-300">
              VeloraLabs розробляє сучасні сайти та автоматизацію для малого і середнього бізнесу. Ми поєднуємо
              дизайн, швидкий frontend, AI-інструменти та бізнес-логіку, щоб сайт не просто виглядав дорого, а
              приводив клієнтів і економив час команди.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Послуги</SectionLabel>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
              Технології, які одразу працюють на результат.
            </h2>
            <p className="max-w-sm text-slate-400">
              Фокус на швидкому запуску, зрозумілому UX та рішеннях, які можна масштабувати.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-card transition duration-500 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/20 blur-3xl transition duration-500 group-hover:scale-125" />
                <span className="text-sm font-bold text-cyan-200">{service.metric}</span>
                <h3 className="mt-12 text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Портфоліо</SectionLabel>
          <h2 className="font-display text-4xl font-black tracking-[-0.04em] sm:text-6xl">Наші роботи</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {portfolio.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-card transition duration-500 hover:-translate-y-2 hover:border-white/20"
              >
                <div className={`relative h-72 bg-gradient-to-br ${project.gradient} p-5`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.24),transparent_48%)]" />
                  <div className="relative mx-auto mt-5 h-48 max-w-[280px] rounded-[1.6rem] border border-white/25 bg-ink/80 p-3 shadow-2xl backdrop-blur">
                    <div className="mb-3 flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white/40" />
                      <span className="h-2 w-2 rounded-full bg-white/25" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-8 rounded-xl bg-white/15" />
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 rounded-xl bg-white/10" />
                        <div className="h-20 rounded-xl bg-gradient-to-br from-white/20 to-white/5" />
                      </div>
                      <div className="h-3 w-2/3 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-slate-400">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Процес</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
              Чіткий шлях від ідеї до запуску.
            </h2>
            <div className="grid gap-4">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-violet-300/30 hover:bg-white/[0.06]"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{step}</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Прозорі етапи, швидкий фідбек і фокус на бізнес-результаті.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-white/10 bg-gradient-to-br from-violet-600/25 via-white/[0.04] to-cyan-500/20 p-8 shadow-glow sm:p-14">
          <div className="max-w-3xl">
            <SectionLabel>Запуск проекту</SectionLabel>
            <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
              Готові покращити свій бізнес онлайн?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Напишіть нам, і ми запропонуємо формат сайту або автоматизації, який найкраще підходить саме вашому
              бізнесу.
            </p>
            <div className="mt-9">
              <GlowButton>Зв'язатися з нами</GlowButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-bold tracking-[0.18em] text-white">VeloraLabs</p>
            <p className="mt-2">Digital studio for modern business growth.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-white" href="https://instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="hover:text-white" href="https://t.me/" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a className="hover:text-white" href="mailto:hello@veloralabs.com">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
