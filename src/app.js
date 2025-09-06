import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }
));
app.use(express.json(
    { limit: '10kb' }
));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(express.static("public"));
app.use(cookieParser());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

export default app;