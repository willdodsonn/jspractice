function isPersonOldEnoughToDrinkAndDrive(person) {
  // the person object contains an "age" property inside
  // Add your code after this line
  if(person.age >= 21){
    return true
  }

  return false
}

//drinking and driving is always illegal so it should result to always false