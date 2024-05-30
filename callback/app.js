sum(display , 3  ,1);

function sum(callback,x,y){
    let result= x+y;
    callback(result);
}

function display(result){
    console.log(result);
}