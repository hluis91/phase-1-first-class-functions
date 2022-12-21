function receivesAFunction(callBackFunction){
    callBackFunction();
}

function returnsANamedFunction(){
    return receivesAFunction;
}

const returnsAnAnonymousFunction = () => {
    return () => console.log('yay');
};





























































// function receivesAFunction(callback) {
//     callback();
// }

// function returnsANamedFunction(){
//     return receivesAFunction;
// }


// const returnsAnAnonymousFunction = () => {
//     return () => console.log('yay');
// };




















