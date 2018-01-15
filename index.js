function theBeatlesPlay(musicians, instruments) {
  var newArray = {}
  for (let i = 0; i < musicians.length; i++) {
    if (i == 0)
      newArray.push(musicians[i]+instruments[i])
    else
      newArray.push(musicians[i]+instruments[i])
  }
  return newArray
}

