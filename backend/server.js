import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectCloudinary from "./src/config/cloudinary.js";
import connectDB from "./src/config/mongodb.js";
import songRouter from "./src/routes/songRoute.js";
import albumRouter from "./src/routes/albumRoute.js";
import usersRoutes from "./src/routes/users.js";
import tokenRoutes from "./src/routes/token.js"; // Ruta corregida

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

connectCloudinary();
connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  "http://192.168.0.10:5173",
];

app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use("/api/songs", songRouter);
app.use("/api/albums", albumRouter);
app.use("/api/users", usersRoutes);
app.use("/api/spotify", tokenRoutes); // Aquí se conecta la API de token

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
