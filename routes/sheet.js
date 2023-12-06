
import DisplayfromSheets from '../controllers/DisplayfromSheets.js';
import express from 'express';
import insertIntoSheet from '../controllers/insertIntoSheet.js';
import verifyWebhook from '../whatsapp/verifyWebhook.js';
import insertMessage from '../whatsapp/insertMessage.js';


const router  = express.Router()

router.post('/sheet',insertIntoSheet)
router.get('/sheet',DisplayfromSheets)
router.post('/webhook',insertMessage)
router.get('/webhook',verifyWebhook)
export default  router
