// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;

    }

    attack (){
        return this.strength;
    }

    receiveDamage(damage) {
        this.health-=damage;

    }




}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name= name;
    }

    receiveDamage(damage){
        this.health-=damage; 
        if(this.health>0){ 
            return`${this.name} has received ${damage} points of damage`;

        }
        else {
            return `${this.name} has died in act of combat`;
        } 

    }

    battleCry(){
        return `Odin Owns You All!`;
    }

}

// Saxon
class Saxon extends Soldier {  

    receiveDamage(damage){
        this.health-=damage;
        if(this.health>0){ 
            return `A Saxon has received ${damage} points of damage`;

        }
        else {
            return `A Saxon has died in combat`;
        }

    }


}


// War
class War {
    constructor (){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let ramdomVikingIndex= 1+ Math.floor(Math.random()*this.vikingArmy.length-1); 
        let randomSaxonIndex=1+ Math.floor(Math.random()*this.saxonArmy.length-1); 
        let attack=this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[ramdomVikingIndex].strength)
        if(attack==="A Saxon has died in combat"){
            this.saxonArmy.pop(this.saxonArmy[randomSaxonIndex])
        }
        return attack
    }
    saxonAttack(){
        let ramdomVikingIndex= 1+ Math.floor(Math.random()*this.vikingArmy.length-1); 
        let randomSaxonIndex=1+ Math.floor(Math.random()*this.saxonArmy.length-1); 
        let attack=this.vikingArmy[ramdomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength)
        if(attack===`${this.vikingArmy[ramdomVikingIndex].name} has died in act of combat`){
            this.vikingArmy.pop(this.vikingArmy[ramdomVikingIndex])
        }
        return attack
    }
    showStatus(){
        if(this.saxonArmy.length<1){
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length<1){
            return "Saxons have fought for their lives and survived another day..."

        }
        else if(this.saxonArmy.length>=1 && this.vikingArmy.length>=1){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
