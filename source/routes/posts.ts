import express from 'express';
import controllerCodificar from '../controllers/codificar';
import controllerDecodificar from '../controllers/decodificar';
const router = express.Router();

router.get('/codificador/:texto',controllerCodificar.getCodigo);
router.get('/codificador/:texto',controllerDecodificar.getTexto);

export = router;
