import db from '../models';
import registerService from "../services/registerService";

let getHomePage = async (req, res) => {
    try{
        let data = await db.User.findAll()
        
        return res.render('homepage.ejs',{
            data:JSON.stringify(data)
        });

    }catch(e){
        console.log(e);
    }
};

let getSpecialistPage = (req, res) => {
    return res.render('specialist/spec.ejs');
};

let getRegisterPage = (req, res) => {
    return res.render('register.ejs');
};

let postRegisterPage = async (req, res) => {
    let message = await registerService.createUser(req.body);
    console.log(message);
    return res.send('post register page from server');
}
    




module.exports = {
    getHomePage: getHomePage,
    getSpecialistPage: getSpecialistPage,
    getRegisterPage: getRegisterPage,
    postRegisterPage: postRegisterPage,
};