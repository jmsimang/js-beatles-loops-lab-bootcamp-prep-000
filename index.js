function theBeatlesPlay(musicians, instruments) {
  var newArray = new Array()
  for (let i = 0; i < musicians.length; i++) {
    if (i == 0)
      newArray[i] = musicians[i]+" plays "+instruments[i]
    else
      newArray[i] = musicians[i]+" plays "+instruments[i]
  }
  return newArray
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i++] += "!!!"
  }
  return facts
}

function iLoveTheBeatles(number) {
  var newArray = new Array()
  do {
    newArray.push("I love the Beatles!")
  } while (number < 15)
  return newArray
}