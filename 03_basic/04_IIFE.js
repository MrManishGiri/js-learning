// immediately invoked function expression (IIFE)
// IIFE is a function that is executed right after it is created

(function coffee(){
    // named IIFE
    console.log('DB connected');

})();

( () => {
    console.log(`2nd DB connected`);
})();

( (server) => {
    console.log(`2nd DB connected ${server}`);
})('google');
