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
    return res.send('New user is registered!!!!');
};

let getData = async (req, res) => {
    let data = await registerService.getAllUser();
    return res.render('displayData.ejs',{
        dataTable : data,
})
};

let getEditUser = async(req, res) => {
    let userId = req.query.id;
    if(userId){
        let userData = await registerService.getUserInfoById(userId);
        //check userData not found.
        return res.render('editUser.ejs',{
            user: userData
        });
    }
    else{
        return res.send('User not found...');
       
    }
}

let putRegisterPage = async(req, res) => {
    let data = req.body;
    let allUsers = await registerService.updateUserData(data);
    return res.render('displayData.ejs',{
        dataTable : allUsers,
})
}

let deleteUser = async(req, res) => {
    let id = req.query.id;
    if(id){
    await registerService.deleteUserById(id);
    return res.send('Delete user success');
    }
    else{
        return res.send('User not found...');

    }
 }

    
      

module.exports = {
    getHomePage: getHomePage,
    getSpecialistPage: getSpecialistPage,
    getRegisterPage: getRegisterPage,
    postRegisterPage: postRegisterPage,
    getData: getData,
    getEditUser: getEditUser,
    putRegisterPage: putRegisterPage,
    deleteUser: deleteUser,
};
    




    


