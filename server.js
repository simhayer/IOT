const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Received Data:", req.query);
  res.send("ESP8266 Data Received\n");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
