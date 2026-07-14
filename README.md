# VeloraLabs

Преміальний сайт digital-студії VeloraLabs на React + Tailwind CSS, готовий для публікації на Vercel.

## Локальний запуск

Потрібно встановити Node.js LTS: https://nodejs.org

```bash
npm install
npm run dev
```

Після запуску відкрий адресу, яку покаже Vite, зазвичай:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
```

Готові файли будуть у папці `dist`.

## Деплой на Vercel

1. Завантаж проект у GitHub-репозиторій.
2. Відкрий https://vercel.com/new
3. Обери репозиторій `veloralabs`.
4. Framework Preset: `Vite`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Натисни `Deploy`.

## Підключення домену

У Vercel відкрий:

```text
Project -> Settings -> Domains
```

Додай свій домен і виконай DNS-інструкції, які покаже Vercel.
