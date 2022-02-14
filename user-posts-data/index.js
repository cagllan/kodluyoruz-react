import getData from "./app.js";

try {

    const userData = await getData(1);
    console.log(userData);

}catch(e){

    console.log(e.message);
    
}
