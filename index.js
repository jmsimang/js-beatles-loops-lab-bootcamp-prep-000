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

