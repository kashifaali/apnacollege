
function promises (number){
    return new Promise(function(resolve, reject){
        console.log("the server is loading... please wait");
        setInterval(() => {
            number?resolve("this is true"):reject("this is false");
        }, 3000);
    }
    );
}

promises(true).then((reuslt)=>{
    console.log(reuslt);
}).catch((error)=>{
    console.log(error);
});