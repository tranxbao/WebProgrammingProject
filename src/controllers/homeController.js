import db from '../models';
let getHomePage = async (req, res) => {
    try{
        let data = await db.User.findAll()
        
        return res.render('homepage.ejs',{data:JSON.stringify(data)});

    }catch(e){
        console.log(e);
    }
};

let getSpecialistPage = (req, res) => {
    return res.render('specialist/spec.ejs');
};
    




module.exports = {
    getHomePage: getHomePage,
    getSpecialistPage: getSpecialistPage
};