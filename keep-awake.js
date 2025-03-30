import fetch from "node-fetch"; // For Node.js 18+
const URL = "https://your-app.onrender.com"; // Replace with your actual Render URL

const pingServer = () => {
  fetch(URL)
    .then((res) =>
      console.log(`Ping successful at ${new Date().toLocaleTimeString()}`)
    )
    .catch((err) => console.error("Error pinging server:", err));
};

setInterval(pingServer, 14 * 60 * 1000); // Ping every 14 minutes
    