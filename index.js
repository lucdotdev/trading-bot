const  DerivAPI = require("@deriv/deriv-api");
const DerivAPIBasic = require('@deriv/deriv-api/dist/DerivAPIBasic');


const  WebSocket =require('ws');
const connection = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=25763');
const api_basic = new DerivAPIBasic({connection});

let token = "08KQUAp7NK1jzDy"




function getAllFuncs(toCheck) {
    var props = [];
    var obj = toCheck;
    do {
        props = props.concat(Object.getOwnPropertyNames(obj));
    } while (obj = Object.getPrototypeOf(obj));

    return props.sort().filter(function(e, i, arr) { 
       if (e!=arr[i+1] && typeof toCheck[e] == 'function') return true;
    });

}

async function k(){
    console.log(getAllFuncs(api_basic))

    try{
  
        await api_basic.authorize(token);
        const balance = await api_basic.balance();
       
        console.log(balance);
    }catch(_){
      console.log(_)
    }
 }

 k()