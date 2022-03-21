import bcrypt from 'bcryptjs';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);


let createUser = async(data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                gender: data.gender ==='1'? true : false,
                phone: data.phone,
                address: data.address,
                roleId: data.roleId
            })

            resolve('New user is registered!!!!')

        }catch(error) {
            reject(error);
        }
    })
     
}

let hashUserPassword = (password) => {
   return new Promise(async(resolve, reject) => {
       try {
           let hashPassword = await bcrypt.hashSync(password, salt); 
           resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
     })
  }

let getAllUser = async() => {
    return new Promise(async(resolve, reject) => {
        try {
            let users = await db.User.findAll({
                raw: true,
            });
            resolve(users);
        } catch (error) {
            reject(error);
        }
    })
}

let getUserInfoById = async(userId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId},
                raw: true,
            });
            if(user){
                resolve(user);
            }else{
                resolve({});
            }
        } catch (error) {
            reject(error);
        }
    })
}

let updateUserData = async(data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
               where: { id: data.id},
            })
            if(user){
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
            
                await user.save();
                let allUsers = await db.User.findAll();
                resolve(allUsers);
            }else{
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    })
}

let deleteUserById = async(userId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId},
            })
            if(user){
                await user.destroy();
                let allUsers = await db.User.findAll();
                resolve(allUsers);
            }else{
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    })
}


            

    
           
           
  module.exports = {
      createUser: createUser,
      getAllUser: getAllUser,
      getUserInfoById: getUserInfoById,
      updateUserData: updateUserData,
      deleteUserById: deleteUserById,
  };
       


