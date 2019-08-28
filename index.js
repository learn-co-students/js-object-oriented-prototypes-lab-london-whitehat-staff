function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
}

function returnFromFunction(thing) {
  return function() {
    return thing
  }
}

BoardMember.prototype.veto = returnFromFunction('No, I must disagree')
BoardMember.prototype.approve = returnFromFunction('You can do that!')
BoardMember.prototype.doCharity = returnFromFunction('I like to help people.')
BoardMember.prototype.releasePressStatement = returnFromFunction('You will see great things from Scuber.')
BoardMember.prototype.sayHi = function () {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}

