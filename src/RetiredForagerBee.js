class RetiredForagerBee extends ForagerBee {
  constructor() { // Doing what prototype.constructor did in es5
    super()  // must call before keyword 'this' 
    // - brings in variables from parent constructor class in reference to this
    // Same as what ForagerBee.call(this); is doing
    // Since you're EXTENDING - must call SUPER

    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  
  // TODO..


forage () {
  return "I am too old, let me play cards instead";
}

gamble (treasure) {
  super.forage(this, treasure);
  // this.treasureChest.push(treasure); 
  // - bad if ForagerBee's forage function is 20 lines ;ong
  }
}