import redirectController from'../controllers/redirectController.js';
import express from 'express';
const redirectRouter = express.Router();

// Define routes for links
redirectRouter.get("/:linkId", redirectController.getRedirectLink);
redirectRouter.get("/chart/:linkId",redirectController.getDataSegmentation);
export default redirectRouter;
