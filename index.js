import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import estilistaRoutes from "./routes/estilistaRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

app.use("/api/estilista", estilistaRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`servidor funncionando en el puerto ${PORT}`);
});