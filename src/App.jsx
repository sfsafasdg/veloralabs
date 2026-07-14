const services = [
  {
    title: "Website Development",
    items: ["лендинги", "сайти-візитки", "каталоги", "корпоративні сайти"],
    description: "Сучасні сайти, які допомагають бізнесу виглядати професійно та залучати клієнтів.",
    outcome: "Більше довіри до бренду та зрозумілий шлях до заявки.",
  },
  {
    title: "Telegram & AI Bots",
    items: ["Telegram боти", "автовідповіді", "прийом заявок", "AI помічники"],
    description: "Автоматизуємо спілкування з клієнтами та рутинні процеси.",
    outcome: "Менше ручної роботи для команди та швидша відповідь клієнту.",
  },
  {
    title: "Marketing Automation",
    items: ["реклама", "контент", "аналітика", "соцмережі"],
    description: "Допомагаємо бізнесу економити час та ефективніше працювати з маркетингом.",
    outcome: "Системніша комунікація без щоденної операційної рутини.",
  },
  {
    title: "Business Automation",
    items: ["CRM", "таблиці", "звіти", "обробка даних"],
    description: "Створюємо інструменти, які спрощують роботу компанії.",
    outcome: "Заявки, клієнти та задачі зібрані в одному зрозумілому процесі.",
  },
  {
    title: "AI Solutions",
    items: ["AI асистенти", "аналіз даних", "автоматизація задач", "впровадження"],
    description: "Впроваджуємо AI там, де він дає бізнесу реальну користь.",
    outcome: "Практичні AI-сценарії замість модних, але непотрібних функцій.",
  },
];

const proof = [
  ["7-21 днів", "типовий запуск першої версії"],
  ["Mobile-first", "інтерфейси одразу готові для телефону"],
  ["No templates", "рішення під конкретний бізнес"],
];

const portfolio = [
  {
    title: "Mobile Store",
    subtitle: "Каталог техніки з фокусом на швидкий вибір товару та заявку.",
    type: "Commerce",
    metrics: ["Каталог", "Mobile UX", "Заявки"],
    layout: "devices",
  },
  {
    title: "Construction Company",
    subtitle: "Презентація будівельної компанії з портфоліо об'єктів і формою консультації.",
    type: "Corporate",
    metrics: ["Довіра", "Об'єкти", "Ліди"],
    layout: "gallery",
  },
  {
    title: "Telegram Automation",
    subtitle: "Бот, який приймає заявки, уточнює деталі та передає клієнта менеджеру.",
    type: "Automation",
    metrics: ["Bot", "CRM", "Команда"],
    layout: "telegram",
  },
  {
    title: "AI Assistant",
    subtitle: "Асистент для первинних відповідей, кваліфікації клієнтів та підготовки резюме заявки.",
    type: "AI Product",
    metrics: ["Chat", "Data", "Reply"],
    layout: "chat",
  },
];

const principles = [
  "Чітка бізнес-логіка перед дизайном",
  "Акуратний інтерфейс без зайвого шуму",
  "Рішення, яке можна підтримувати після запуску",
  "Фокус на заявках, довірі та економії часу",
];

const process = [
  ["01", "Аналізуємо бізнес", "Вивчаємо послуги, клієнтів, процеси та точки, де технологія дасть найбільший ефект."],
  ["02", "Створюємо рішення", "Формуємо структуру сайту або автоматизації, сценарії користувача та ключові екрани."],
  ["03", "Розробляємо", "Збираємо інтерфейс, логіку, адаптив, інтеграції та тестуємо основні сценарії."],
  ["04", "Запускаємо", "Публікуємо проект, перевіряємо аналітику, заявки та залишаємо зрозумілі інструкції."],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MiniIcon({ index }) {
  const paths = [
    "M5 7h14M7 12h10M9 17h6",
    "M7 8h10v8H7z M10 5v3M14 5v3M10 16v3M14 16v3",
    "M4 16c3-7 6-7 9-3s5 1 7-5",
    "M5 6h14v12H5z M8 10h8M8 14h5",
    "M12 4v16M5 12h14M7 7l10 10M17 7 7 17",
  ];

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d={paths[index]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Button({ href = "#contact", children, variant = "primary" }) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 ${
        variant === "primary"
          ? "bg-white text-neutral-950 shadow-[0_18px_55px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:bg-neutral-100"
          : "border border-white/10 bg-white/[0.03] text-white hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
      }`}
    >
      {children}
      <span className="transition duration-300 group-hover:translate-x-0.5">
        <ArrowIcon />
      </span>
    </a>
  );
}

function Kicker({ children }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#8fb4ff]">{children}</p>;
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#050505]/72 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-3" aria-label="VeloraLabs головна">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-semibold text-white">
            VL
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.18em] text-white">VeloraLabs</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-neutral-400 md:flex" aria-label="Основна навігація">
          <a className="transition hover:text-white" href="#services">
            Послуги
          </a>
          <a className="transition hover:text-white" href="#portfolio">
            Роботи
          </a>
          <a className="transition hover:text-white" href="#demo">
            Автоматизація
          </a>
          <a className="transition hover:text-white" href="#process">
            Процес
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-[#8fb4ff]/40 hover:bg-white/[0.04] sm:inline-flex"
        >
          Обговорити
        </a>
      </div>
    </header>
  );
}

function BrowserChrome({ children, label = "velora.system" }) {
  return (
    <div className="rounded-[1.45rem] border border-white/[0.09] bg-[#080808] p-3 shadow-[0_45px_140px_rgba(0,0,0,0.55)]">
      <div className="overflow-hidden rounded-[1.1rem] border border-white/[0.08] bg-[#0b0c10]">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/14" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
          </div>
          <span className="text-[11px] text-neutral-500">{label}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function EcosystemMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[680px] perspective">
      <div className="absolute -inset-8 rounded-[4rem] bg-[#3567ff]/10 blur-3xl" />

      <div className="floating-card left-0 top-8 hidden w-[230px] lg:block">
        <p className="text-xs text-neutral-500">Telegram</p>
        <p className="mt-2 text-sm font-medium text-white">Нова заявка від клієнта</p>
      </div>

      <div className="floating-card right-0 top-0 hidden w-[210px] lg:block [animation-delay:600ms]">
        <p className="text-xs text-neutral-500">Аналітика</p>
        <p className="mt-2 text-3xl font-semibold text-white">+42%</p>
        <p className="text-xs text-neutral-400">більше цільових запитів</p>
      </div>

      <div className="floating-card bottom-12 right-4 hidden w-[250px] lg:block [animation-delay:1100ms]">
        <p className="text-xs text-neutral-500">Асистент</p>
        <p className="mt-2 text-sm font-medium text-white">Відповідь клієнту підготовлена</p>
      </div>

      <div className="relative mx-auto max-w-[560px] pt-16">
        <div className="laptop-shell">
          <BrowserChrome label="client-platform.velora">
            <div className="grid gap-4 p-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5">
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.22em] text-[#8fb4ff]">Сайт компанії</span>
                  <span className="rounded-full bg-[#3567ff]/12 px-3 py-1 text-xs text-[#b6ccff]">опубліковано</span>
                </div>
                <div className="space-y-3">
                  <div className="h-9 w-4/5 rounded-xl bg-white/14" />
                  <div className="h-3 rounded-full bg-white/[0.08]" />
                  <div className="h-3 w-2/3 rounded-full bg-white/[0.08]" />
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-[#3567ff]/16 p-3">
                    <div className="h-2 w-8 rounded-full bg-white/30" />
                    <div className="mt-8 h-2 rounded-full bg-white/12" />
                  </div>
                  <div className="rounded-2xl bg-white/[0.055] p-3">
                    <div className="h-2 w-10 rounded-full bg-white/20" />
                    <div className="mt-8 h-2 rounded-full bg-white/10" />
                  </div>
                  <div className="rounded-2xl bg-white/[0.04] p-3">
                    <div className="h-2 w-7 rounded-full bg-white/16" />
                    <div className="mt-8 h-2 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Потік заявок</p>
                  <div className="mt-4 space-y-2">
                    {["Заявку отримано", "Клієнта додано в CRM", "Власника сповіщено"].map((item) => (
                      <div key={item} className="flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-2 text-xs text-neutral-300">
                        {item}
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8fb4ff]" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                  <p className="text-3xl font-semibold text-white">18h</p>
                  <p className="mt-1 text-xs text-neutral-400">економії на рутині щомісяця</p>
                  <div className="mt-4 h-2 rounded-full bg-white/[0.08]">
                    <div className="h-2 w-4/5 rounded-full bg-[#6f93ff]" />
                  </div>
                </div>
              </div>
            </div>
          </BrowserChrome>
        </div>
        <div className="mx-auto h-3 w-[72%] rounded-b-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      </div>
    </div>
  );
}

function ServiceCard({ service, index }) {
  return (
    <article className={`service-card ${index === 0 ? "lg:col-span-2" : ""}`}>
      <div className="mb-10 flex items-start justify-between gap-6">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/[0.08] bg-white/[0.035] text-[#9db9ff]">
          <MiniIcon index={index} />
        </div>
        <span className="text-sm text-neutral-600">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{service.title}</h3>
      <p className="mt-4 max-w-xl leading-7 text-neutral-400">{service.description}</p>
      <p className="mt-5 border-l border-[#8fb4ff]/35 pl-4 text-sm leading-6 text-neutral-300">{service.outcome}</p>
      <div className="mt-7 flex flex-wrap gap-2">
        {service.items.map((item) => (
          <span key={item} className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-neutral-400">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function PortfolioVisual({ layout }) {
  if (layout === "devices") {
    return (
      <div className="relative h-[380px]">
        <div className="absolute left-4 top-12 h-60 w-[78%] rounded-[1.6rem] border border-white/12 bg-[#08090d] p-4 shadow-2xl">
          <div className="mb-5 flex items-center justify-between">
            <div className="h-7 w-28 rounded-xl bg-white/14" />
            <div className="h-7 w-20 rounded-full bg-[#3567ff]/22" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["iPhone 15", "Galaxy S", "AirPods"].map((item, index) => (
              <div key={item} className={`rounded-2xl p-3 ${index === 1 ? "bg-[#3567ff]/16" : "bg-white/[0.055]"}`}>
                <div className="h-20 rounded-xl bg-white/[0.07]" />
                <p className="mt-3 text-[11px] text-neutral-300">{item}</p>
                <div className="mt-2 h-2 w-12 rounded-full bg-white/14" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 right-7 h-60 w-28 rounded-[1.6rem] border border-white/14 bg-[#0b0c10] p-3 shadow-2xl">
          <div className="mx-auto mb-4 h-1 w-8 rounded-full bg-white/16" />
          <div className="h-5 rounded-lg bg-white/12" />
          <div className="mt-4 space-y-2">
            <div className="h-12 rounded-xl bg-[#3567ff]/16" />
            <div className="h-12 rounded-xl bg-white/[0.06]" />
            <div className="h-12 rounded-xl bg-white/[0.045]" />
          </div>
        </div>
      </div>
    );
  }

  if (layout === "gallery") {
    return (
      <div className="grid h-[380px] grid-cols-2 gap-4 p-7">
        <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.035))] p-4">
          <div className="h-full rounded-[1.1rem] border border-white/10 bg-[linear-gradient(160deg,rgba(143,180,255,0.18),rgba(255,255,255,0.025))]" />
        </div>
        <div className="space-y-4 pt-10">
          <div className="h-28 rounded-[1.5rem] bg-[#3567ff]/14 p-4">
            <div className="h-3 w-20 rounded-full bg-white/18" />
            <div className="mt-10 h-2 rounded-full bg-white/12" />
          </div>
          <div className="h-28 rounded-[1.5rem] bg-white/[0.05] p-4">
            <div className="h-3 w-24 rounded-full bg-white/16" />
            <div className="mt-10 h-2 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  if (layout === "telegram") {
    return (
      <div className="grid h-[380px] place-items-center p-7">
        <div className="w-full max-w-sm rounded-[1.7rem] border border-white/12 bg-[#08090d] p-5 shadow-2xl">
          {["Доброго дня. Хочу консультацію", "Оберіть послугу та бюджет", "Заявку передано менеджеру"].map((msg, index) => (
            <div
              key={msg}
              className={`mb-3 max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                index === 1 ? "ml-auto bg-[#3567ff]/18 text-white" : "bg-white/[0.06] text-neutral-300"
              }`}
            >
              {msg}
            </div>
          ))}
          <div className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-xs text-neutral-400">
            CRM: клієнт створений, задача призначена
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-[380px] place-items-center p-7">
      <div className="w-full max-w-md rounded-[1.7rem] border border-white/12 bg-[#08090d] p-5 shadow-2xl">
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8fb4ff]">AI Assistant</p>
        <div className="space-y-3">
          <div className="rounded-2xl bg-white/[0.06] p-4 text-sm text-neutral-300">Проаналізуй заявки за тиждень</div>
          <div className="rounded-2xl bg-[#3567ff]/16 p-4 text-sm text-white">
            Найбільше заявок прийшло з Instagram. Рекомендація: посилити офер для консультації.
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2">
            {["24", "8", "3"].map((num, index) => (
              <div key={num} className="rounded-2xl bg-white/[0.04] p-3">
                <p className="text-lg font-semibold text-white">{num}</p>
                <p className="text-[10px] text-neutral-500">{["заявки", "теплі", "термінові"][index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] transition duration-500 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.04]">
      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(53,103,255,0.16),transparent_55%)]">
        <PortfolioVisual layout={item.layout} />
      </div>
      <div className="border-t border-white/[0.07] p-7">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8fb4ff]">{item.type}</p>
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
        <p className="mt-3 max-w-xl leading-7 text-neutral-400">{item.subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.metrics.map((metric) => (
            <span key={metric} className="rounded-full bg-white/[0.045] px-3 py-1 text-xs text-neutral-400">
              {metric}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function AIDemo() {
  return (
    <section id="demo" className="px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <Kicker>Автоматизація</Kicker>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.055em] text-white sm:text-6xl">
            Як AI допомагає бізнесу
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7">
            <div className="mb-6 flex items-center justify-between border-b border-white/[0.07] pb-5">
              <div>
                <p className="text-sm font-medium text-white">Діалог з клієнтом</p>
                <p className="text-xs text-neutral-500">сайт / Telegram / CRM</p>
              </div>
              <span className="rounded-full bg-[#3567ff]/12 px-3 py-1 text-xs text-[#b6ccff]">активно</span>
            </div>

            <div className="space-y-4">
              <div className="max-w-[78%] rounded-3xl rounded-bl-md bg-white/[0.06] p-4 text-neutral-200">
                Скільки коштує послуга?
              </div>
              <div className="ml-auto max-w-[86%] rounded-3xl rounded-br-md bg-[#3567ff]/18 p-4 text-white">
                Добрий день. Вартість залежить від деталей. Надішліть інформацію і ми зробимо розрахунок.
              </div>
              <div className="max-w-[70%] rounded-3xl rounded-bl-md bg-white/[0.06] p-4 text-neutral-200">
                Потрібен сайт і бот для заявок.
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/[0.08] bg-[#08090d] p-5 sm:p-7">
            <p className="mb-6 text-sm font-medium text-white">Що відбувається автоматично</p>
            <div className="space-y-3">
              {[
                ["01", "Заявку оброблено"],
                ["02", "Клієнта додано в систему"],
                ["03", "Власнику надіслано повідомлення"],
                ["04", "Створено задачу для менеджера"],
              ].map(([num, text]) => (
                <div key={text} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.045] text-xs text-[#9db9ff]">{num}</span>
                  <span className="text-sm text-neutral-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Header />

      <section className="relative px-5 pb-24 pt-32 sm:pt-40 lg:pb-32">
        <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_50%_0%,rgba(53,103,255,0.14),transparent_58%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="hero-enter">
            <p className="mb-6 inline-flex rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-sm text-neutral-300">
              Цифрові рішення та автоматизація для розвитку бізнесу
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.065em] text-white sm:text-7xl lg:text-[5.75rem]">
              Створюємо цифрові рішення, які допомагають бізнесу рости
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
              Сайти, AI-інструменти та автоматизація процесів під потреби вашої компанії.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact">Обговорити проект</Button>
              <Button href="#portfolio" variant="secondary">
                Переглянути роботи
              </Button>
            </div>
          </div>

          <div className="hero-enter [animation-delay:160ms]">
            <EcosystemMockup />
          </div>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
          {proof.map(([value, label]) => (
            <div key={value} className="bg-[#080808] p-6">
              <p className="text-2xl font-semibold tracking-[-0.03em] text-white">{value}</p>
              <p className="mt-2 text-sm text-neutral-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 border-y border-white/[0.08] py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker>Про студію</Kicker>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.055em] text-white sm:text-6xl">
              Технології, які працюють на ваш бізнес
            </h2>
          </div>
          <div className="self-end">
            <p className="text-xl leading-9 text-neutral-300">
              Ми створюємо сайти та автоматизацію, які допомагають компаніям працювати швидше та ефективніше.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {principles.map((item) => (
                <div key={item} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-sm text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <Kicker>Напрями</Kicker>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.055em] text-white sm:text-6xl">
              Закриваємо ключові цифрові задачі бізнесу
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Kicker>Кейси</Kicker>
              <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.055em] text-white sm:text-6xl">
                Візуальні концепти для реальних бізнес-задач
              </h2>
            </div>
            <p className="max-w-md leading-7 text-neutral-400">
              Кожен проект будується навколо довіри, зрозумілої презентації та дії, яку має зробити клієнт.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {portfolio.map((item) => (
              <PortfolioCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <AIDemo />

      <section id="process" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <Kicker>Процес</Kicker>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.055em] text-white sm:text-6xl">
              Прозорий шлях від ідеї до запуску
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.08] md:grid-cols-4">
            {process.map(([num, title, text]) => (
              <div key={title} className="bg-[#080808] p-7 transition duration-300 hover:bg-[#0d0f16]">
                <span className="text-sm text-[#8fb4ff]">{num}</span>
                <h3 className="mt-12 text-2xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
                <p className="mt-4 leading-7 text-neutral-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-8 sm:p-14">
          <div className="max-w-3xl">
            <Kicker>Контакт</Kicker>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.055em] text-white sm:text-6xl">
              Є ідея для вашого бізнесу?
            </h2>
            <p className="mt-6 text-xl text-neutral-300">Давайте створимо рішення</p>
            <div className="mt-9">
              <Button>Обговорити проект</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold tracking-[0.16em] text-white">VeloraLabs</p>
            <p className="mt-2">Цифрові рішення та автоматизація для розвитку бізнесу.</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <a className="transition hover:text-white" href="https://instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="transition hover:text-white" href="https://t.me/" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a className="transition hover:text-white" href="mailto:hello@veloralabs.com">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
