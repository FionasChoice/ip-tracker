const express = require('express');
const app = express();

// ЛОГ всіх запитів (ДОДАНО СЮДИ)
app.use((req, res, next) => {
  console.log(`Запит: ${req.method} ${req.url}`);
  next();
});

// ОБРОБКА КОНКРЕТНОГО ШЛЯХУ
app.get('/shorts/:id', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const ua = req.headers['user-agent'];
  const time = new Date().toISOString();
  const id = req.params.id;

  console.log(`🔔 НОВИЙ ВІЗИТ 🔔\nIP: ${ip}\nUA: ${ua}\nTime: ${time}\nID: ${id}\n`);

  const target = `https://www.youtube.com/shorts/${id}`;
  res.redirect(target);
});

// СТАРТ СЕРВЕРА
app.listen(process.env.PORT || 3000, () => {
  console.log('✅ Сервер запущено');
});
