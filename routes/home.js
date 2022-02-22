import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.post('/upload', function(req, res, next) {
    console.log(res)
})

export default router;