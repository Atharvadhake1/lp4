const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// When someone visits /download, the file starts downloading
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "files", "practical.zip");
  res.download(filePath, "myfile.zip", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Error downloading file");
    }
  });
});

// Optional: auto-download when opening homepage
app.get("/", (req, res) => {
  res.redirect("/");
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
