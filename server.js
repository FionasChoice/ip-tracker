const express = require('express');
const app = express();

app.get('/shorts/:id', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const ua = req.headers['user-agent'];
  const time = new Date().toISOString();
  const id = req.params.id;

  console.log(`🔔 НОВИЙ ВІЗИТ 🔔\nIP: ${ip}\nUA: ${ua}\nTime: ${time}\nID: ${id}\n`);

  const target = `https://www.youtube.com/shorts/${id}`;
  res.redirect(target);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('✅ Сервер запущено');
});
