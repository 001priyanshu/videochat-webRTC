const express = require("express");

const PORT = process.env.PORT || 5000;
const app = express();

// Example route
app.get("/", (req, res) => {
  res.send("Hello, this is your Express server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
