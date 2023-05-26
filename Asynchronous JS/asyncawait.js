function mypromise () {
 return new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("resolved..hello google");
        // reject("error")
    },2000)
});
}


async function asyncawaitfunc() {
    try {
        const myAsyncPr = await mypromise();
        if(myAsyncPr) {
            console.log("my pr", myAsyncPr , new Date())
        } 
    }catch(err) {
            console.log(err)
    }
}

asyncawaitfunc()