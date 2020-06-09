function PromiseAll(promises){
    return new Promise(function(resolve,reject){
        if(!Array.isArray(promises)){
            throw new TypeError("argument must be a array");
        }
        let resolvedCounter  = 0;
        let promiseNum = promises.length;
        let resolvedResult = [];
        for(let i = 0;i<promiseNum;i++){
            Promise.resolve(promises[i]).then(value=>{
                resolvedCounter++;
                resolvedResult[i] = value;
                if(resolvedCounter === promiseNum){
                    return resolve(resolvedResult);
                }
            },err=>{
                return reject(err);
            })
        }
    })
}
let p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(1)
    },1000);
})
let p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(2)
    },2000);
})
let p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(3)
    },3000);
})

PromiseAll([p1,p2,p3]).then(res=>{
    console.log(res);
})