const express = require("express");
const app = express();

// Đọc PORT từ Render
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Instagram Redirect Handler is running");
});

app.get("/auth", (req, res) => {
    const code = req.query.code;
    if (!code) return res.send("Missing code");

    const deepLink = `myapp://instagram_callback?code=${code}`;
    console.log("Redirecting to:", deepLink);
    res.redirect(deepLink);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
