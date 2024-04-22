import { Router } from 'express'
import { bulkMsg } from './controller.js'

const router = Router();

router.route("/bulk-messages").post(bulkMsg);

export default router;
