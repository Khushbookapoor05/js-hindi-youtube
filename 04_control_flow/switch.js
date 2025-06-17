// switch (key) {      {key is the value which we want to check.}
//     case value:
        
//         break;

//     default:
//         break;
// }

const month =3

switch(month){
     case 1:
        console.log("January");
        break;
     case 2:
        console.log("Febreary");
        break;
     case 3:
        console.log("March");   //* once wherever key matches, the code after gets executed, expect the default case*
        break;                   // That's why , we are braek which will break the control flow 
     case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}
        