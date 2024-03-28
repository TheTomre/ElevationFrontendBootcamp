function Pokemon(pokemonName, pokemonType,
    pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }

Pokemon.prototype.callPokemon = function() {
    console.log(`“I choose you, ${this.name}`)
}

Pokemon.prototype.attack = function(attackNumber) {
    console.log(`${this.name} used ${this.attackList[attackNumber-1]}`)

}

const pikachu = new Pokemon("Pikachu", "Electric", ["Simple Attack", "Ultimate Attack", "ElectricStrom"])
const charmander = new Pokemon("Charmander", "Fire", ["Punch", "Ultimate Attack", "Flamethrow"]);
const squirtle = new Pokemon("Squirtle", "Water", ["Tackle", "Ultimate Attack", "Bubble Attack"]);



pikachu.callPokemon();
pikachu.attack(1);
console.log(" ");

charmander.callPokemon();
charmander.attack(2);
console.log(" ");

squirtle.callPokemon();
squirtle.attack(3);
