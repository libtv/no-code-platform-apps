import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dao from "../daos/listDao.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/list', dao.list);

router.post('/upload', dao.add);

export default router;