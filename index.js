class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    string = string.replace(/[^a-z0-9áéíóúñü' \.,_-]/gim,"")
    return string.trim()
  }
  static titleize(string) {
    const words = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let strArr = string.split(" ")
    let finalString = []

    strArr.map(function(word) {
      if(words.includes(word) === false) {
        finalString.push(Formatter.capitalize(word))
      } else {
        finalString.push(word)
      }
    })
    return Formatter.capitalize(finalString.join(" "))
  }
}