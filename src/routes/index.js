import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let indexRoute = (app) => {
    
    router.get('/', homeController.getHomePage);
    router.get('/specialist', homeController.getSpecialistPage);
    router.get('/register', homeController.getRegisterPage);
    router.post('/post-register', homeController.postRegisterPage);
    router.get('/get-data', homeController.getData);
    router.get('/edit-user', homeController.getEditUser);
    router.post('/put-register', homeController.putRegisterPage);
    router.get('/delete-user', homeController.deleteUser);
    
    return app.use('/', router);
}
    
   
module.exports = indexRoute;
   
    
    


