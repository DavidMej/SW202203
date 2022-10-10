import express from 'express';

import UsuarioRouter  from './UserRoutes';

const router  = express.Router();

router.use('/usuarios', UsuarioRouter);


export default router;
