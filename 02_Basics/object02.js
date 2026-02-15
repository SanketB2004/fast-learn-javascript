// const tinderUser = new Object() 

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "samyy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regulerUser ={
    email:"same@gmail.com",
    fullname:{
        userfullname:{
            firsetname:"sanket",
            lastname:"bhosale"
        }
    }
}

//console.log(regulerUser.fullname?.userfullname); // nesting acssess . use and open 
// ? this is protect hai to kare nahi to nahi 


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

// const obj3 = Object.assign({},obj1 ,obj2);// concate or join this object // and use empty object dedo kyuki target {} and sourse 



// console.log(obj3);

const obj3 = {...obj1 , ...obj2} // simple syntax join object same as arry use

// console.log(obj3); 

 
const user = [
    {
        ID:4,
        Email:"same@gmail.com"

    },
    {
        
        ID:4,
        Email:"same@gmail.com"

    },{
        
        ID:4,
        Email:"same@gmail.com"

    }
    
    

]

// console.log(user[1].Email);// print method kevha pn lagatil lakshat thev repeated karat chal

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// check output value and check data type 

// values
// length
//keys
// console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // object madhe ahe ka te checck karayala aste 



// check all interview prepare time check all propertyes is object in 
// inspect console 
//type one basic object
//log 
// touch prototype
 



 


