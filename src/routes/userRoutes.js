import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequied';

const router = new Router();

// Não deveria Existir
// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

// Usado em sistema Real
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
  Index -> Lista todos os usuarios -- GET
  store/Create -> Cria um novo usuario -- POST
  delete -> apaga um usuario -- DELETE
  show -> mostra um usuario -- GET
  update -> atualiza um usuario  -- PATCH OU PUT
*/
