import express from "express";
const router = express.Router();

import { 
    registrar, 
    perfil, 
    confirmar,
    autenticar,
} from "../controllers/estilistaController.js";

router.post("/", registrar);
router.get("/perfil", perfil);
router.get("/confirmar/:token", confirmar)
router.post("/Login", autenticar)



export default router;