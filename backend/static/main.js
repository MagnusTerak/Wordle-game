const wordList = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt"

async function getWordList() {
  try {
    const response = await fetch(wordList)

    if (response.ok) {
      const data = await response.text()
      const words = data.split("\n").map((word) => word.trim())

      return words
    } else {
      console.error("Couldn't fetch words from wordlist")
    }
  } catch (error) {
    console.error("Couldn't fetch words from wordlist")
    return []
  }
}

async function getWordFromSettings(data) {
  const words = await getWordList();

  let filteredWords = words.filter(word => word.length === data.length);

  if (data.uniqueLetters) {
    filteredWords = filteredWords.filter(currentWord => new Set(currentWord).size === currentWord.length);
  }

  let randomIndex = Math.floor(Math.random() * filteredWords.length);
  let word = filteredWords[randomIndex]

  return word
}



export default getWordFromSettings