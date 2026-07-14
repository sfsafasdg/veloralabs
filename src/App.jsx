const services = [
  {
    title: "Website Development",
    description: "Створення сучасних сайтів, лендингів та каталогів.",
  },
  {
    title: "Telegram & AI Bots",
    description: "Боти для автоматизації заявок, підтримки клієнтів та бізнес-процесів.",
  },
  {
    title: "Marketing Automation",
    description: "Автоматизація створення контенту, реклами та аналітики.",
  },
  {
    title: "Business Automation",
    description: "CRM, таблиці, системи обліку та автоматизація рутинних задач.",
  },
  {
    title: "AI Solutions",
    description: "AI-помічники та інструменти для оптимізації роботи.",
  },
];

const cases = [
  {
    title: "Сайт магазину техніки",
    description: "Каталог, сторінки товарів, швидкі заявки та мобільна версія для продажів.",
    type: "Commerce",
    tone: "from-blue-500/22 to-white/[0.03]",
  },
  {
    title: "Сайт будівельної компанії",
    description: "Корпоративна презентація, портфоліо об'єктів та структура для заявок.",
    type: "Corporate",
    tone: "from-violet-500/20 to-white/[0.03]",
  },
  {
    title: "Telegram бот для бізнесу",
    description: "Автоматична обробка запитів, маршрутизація клієнтів та повідомлення команді.",
    type: "Automation",
    tone: "from-sky-500/18 to-white/[0.03]",
  },
  {
    title: "Система автоматизації заявок",
    description: "Єдиний потік заявок з сайту, реклами та месенджерів у зрозумілу систему.",
    type: "Operations",
    tone: "from-indigo-500/20 to-white/[0.03]",
  },
];

const trustPoints = [
  "Швидка розробка",
  "Індивідуальні рішення",
  "Використання сучасних технологій",
  "Орієнтація на результат",
];

const process = ["Аналіз", "Концепція", "Розробка", "Запуск"];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Button({ children, href = "#contact", variant = "primary" }) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300";
  const variants = {
    primary: "bg-white text-[#070913] shadow-[0_18px_60px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:bg-slate-100",
    secondary:
      "border border-white/12 bg-white/[0.03] text-white hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/[0.06]",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
      <ArrowIcon />
    </a>
  );
}

function SectionKicker({ children }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue-300/90">
      {children}
    </p>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#070913]/78 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-3" aria-label="VeloraLabs головна">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-xs font-bold text-white">
            VL
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.18em] text-white">VeloraLabs</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex" aria-label="Основна навігація">
          <a className="transition hover:text-white" href="#services">
            Послуги
          </a>
          <a className="transition hover:text-white" href="#portfolio">
            Роботи
          </a>
          <a className="transition hover:text-white" href="#why">
            Переваги
          </a>
          <a className="transition hover:text-white" href="#process">
            Процес
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-white transition hover:border-blue-300/35 hover:bg-white/[0.04] sm:inline-flex"
        >
          Зв'язатися
        </a>
      </div>
    </header>
  );
}

function LaptopMockup() {
  return (
    <div className="relative mx-auto mt-14 w-full max-w-[620px] lg:mt-0">
      <div className="absolute -inset-8 rounded-[3rem] bg-blue-500/10 blur-3xl" />

      <div className="relative rounded-[2rem] border border-white/10 bg-[#0d1220] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
        <div className="overflow-hidden rounded-[1.45rem] border border-white/[0.08] bg-[#080b14]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            <span className="text-xs text-slate-500">client-dashboard.velora</span>
          </div>

          <div className="grid gap-5 p-5 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5">
              <div className="mb-7 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Website</span>
                <span className="rounded-full bg-blue-400/10 px-3 py-1 text-xs text-blue-200">Live</span>
              </div>
              <div className="space-y-3">
                <div className="h-8 w-4/5 rounded-lg bg-white/12" />
                <div className="h-3 w-full rounded-full bg-white/[0.08]" />
                <div className="h-3 w-2/3 rounded-full bg-white/[0.08]" />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="h-20 rounded-2xl bg-blue-400/14" />
                <div className="h-20 rounded-2xl bg-white/[0.06]" />
                <div className="h-20 rounded-2xl bg-white/[0.04]" />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Automation</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
                    New lead
                    <span className="text-blue-300">CRM</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
                    Telegram
                    <span className="text-blue-300">Bot</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
                    Report
                    <span className="text-blue-300">AI</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-semibold text-white">+37%</p>
                    <p className="text-xs text-slate-500">qualified requests</p>
                  </div>
                  <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-slate-300">monthly</span>
                </div>
                <div className="h-2 rounded-full bg-white/[0.08]">
                  <div className="h-2 w-3/4 rounded-full bg-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto h-3 w-[74%] rounded-b-[2rem] bg-gradient-to-r from-transparent via-white/16 to-transparent" />
    </div>
  );
}

function CaseMockup({ project, index }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] transition duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
      <div className={`relative min-h-[330px] overflow-hidden bg-gradient-to-br ${project.tone} p-5`}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
        <div className="relative ml-auto mt-6 max-w-[420px] rounded-[1.6rem] border border-white/12 bg-[#080b14]/92 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/14" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
            </div>
            <span className="text-xs text-slate-500">0{index + 1}</span>
          </div>
          <div className="space-y-3">
            <div className="h-8 w-3/5 rounded-xl bg-white/12" />
            <div className="h-3 w-full rounded-full bg-white/[0.08]" />
            <div className="h-3 w-4/5 rounded-full bg-white/[0.08]" />
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="h-24 rounded-2xl bg-white/[0.06]" />
              <div className="h-24 rounded-2xl bg-blue-400/12" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-7">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300/90">{project.type}</p>
        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">{project.title}</h3>
        <p className="mt-3 max-w-xl leading-7 text-slate-400">{project.description}</p>
      </div>
    </article>
  );
}

function App() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-[#070913] text-white">
      <Header />

      <section className="relative px-5 pb-24 pt-32 sm:pt-40 lg:pb-32">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(64,109,255,0.16),transparent_58%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-sm text-slate-300">
              Digital studio for websites and business automation
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.065em] text-white sm:text-7xl lg:text-[5.7rem]">
              Цифрові рішення для розвитку бізнесу
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Створюємо сайти, AI-інструменти та автоматизацію, які допомагають компаніям працювати ефективніше.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact">Обговорити проект</Button>
              <Button href="#portfolio" variant="secondary">
                Наші роботи
              </Button>
            </div>
          </div>

          <LaptopMockup />
        </div>
      </section>

      <section id="services" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionKicker>Services</SectionKicker>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
              Все, що потрібно бізнесу для сильнішої цифрової присутності.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`rounded-[1.7rem] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300/20 hover:bg-white/[0.04] ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="mb-12 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.035] text-sm font-semibold text-blue-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.025em]">{service.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-slate-400">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionKicker>Portfolio</SectionKicker>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">Кейси, які продають послуги.</h2>
            </div>
            <p className="max-w-md leading-7 text-slate-400">
              Презентація, заявка, автоматизація та аналітика мають працювати як одна система.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {cases.map((project, index) => (
              <CaseMockup key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionKicker>Why VeloraLabs</SectionKicker>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
              Рішення, яким можна довірити бізнес-процеси.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div key={point} className="rounded-3xl border border-white/[0.07] bg-[#0b0f1b] p-6">
                <div className="mb-6 h-2 w-2 rounded-full bg-blue-300" />
                <h3 className="text-lg font-semibold">{point}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Працюємо не за шаблоном, а від задач бізнесу, бюджету та цілі проекту.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionKicker>Process</SectionKicker>
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
            Зрозумілий процес без хаосу та зайвих зустрічей.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.7rem] border border-white/[0.08] bg-white/[0.08] md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step} className="bg-[#090d18] p-7">
                <span className="text-sm text-blue-300">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-10 text-2xl font-semibold">{step}</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  Фіксуємо цілі, погоджуємо рішення та рухаємось до запуску короткими зрозумілими етапами.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-8 sm:p-14">
          <div className="max-w-3xl">
            <SectionKicker>Start</SectionKicker>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
              Є ідея для вашого бізнесу?
            </h2>
            <p className="mt-6 text-xl text-slate-300">Обговоримо, як її реалізувати</p>
            <div className="mt-9">
              <Button>Обговорити проект</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold tracking-[0.16em] text-white">VeloraLabs</p>
            <p className="mt-2">Premium digital solutions for growing companies.</p>
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
