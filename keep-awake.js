import fetch from "node-fetch"; 
const URL = "https://e-classroom.onrender.com/"; 

const pingServer = () => {
  fetch(URL)
    .then((res) =>
      console.log(`Ping successful at ${new Date().toLocaleTimeString()}`)
    )
    .catch((err) => console.error("Error pinging server:", err));
};

setInterval(pingServer, 14 * 60 * 1000); 
