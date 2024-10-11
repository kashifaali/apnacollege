function prom(data){
    return new Promise((resolve, reject) => {
        let random = Math.floor(Math.random()*10)+1;
        if(random > 5){
            resolve("success");
        }
        else{
            reject("fail");
        }
    })
}

prom("good");