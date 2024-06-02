import linkController from'../controllers/linkController.js';
import express from 'express';
const linkRouter = express.Router();

// Define routes for links
linkRouter.get("/", linkController.getLinks);
linkRouter.post('/', linkController.createLink);
linkRouter.get('/:id', linkController.getLinkById);
linkRouter.put('/:id', linkController.updateLink);
linkRouter.delete('/:id', linkController.deleteLink);

export default linkRouter;
