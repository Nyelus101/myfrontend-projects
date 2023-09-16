/*function greeting(message) {
    return alert(`${message} everyone!`);
}
*/
/*
greeting = (message) => {alert(`${message} everyone!`);}


greeting('Good morning');
*/

var name = 'Everest';
var height = 8848;
var output = function() {
    console.log(`Mt. ${this.name} is ${this.height} meter tall`);
};

var adventureClimbing = { name, height };
console.log(adventureClimbing);
adventureClimbing.output();