const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// Serve static files from "public"
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/skills", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "skills.html"));
});

// Start the server
app.listen(port, () => {
    console.log("Server started on http://localhost:" + port);
});
