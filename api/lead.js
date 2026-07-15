export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return response.status(500).json({ error: "Telegram is not configured" });
  }

  const { name, contact, niche, message } = request.body || {};

  if (!name || !contact || !niche || !message) {
    return response.status(400).json({ error: "Missing required fields" });
  }

  const text = [
    "Нова заявка з CodeFlame",
    "",
    `Ім'я: ${name}`,
    `Контакт: ${contact}`,
    `Ніша: ${niche}`,
    "",
    `Задача: ${message}`,
  ].join("\n");

  const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });

  if (!telegramResponse.ok) {
    return response.status(502).json({ error: "Telegram request failed" });
  }

  return response.status(200).json({ ok: true });
}

