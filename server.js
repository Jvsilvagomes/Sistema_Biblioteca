import express from "express";
import dotenv from "dotenv";
import livroRoute from "./src/routes/livroRoute.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Silencio na Biblioteca! 📚🤫");
});

app.use('/livros', livroRoute);

app.listen(serverPort, () => {
    console.log(`Biblioteca aberta em http://localhost:${serverPort} 🚀`);
});