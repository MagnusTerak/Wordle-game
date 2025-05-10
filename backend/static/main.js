console.log("test")

async function getRandomNumber() {
  const response = await fetch("./public/words_alpha.txt");
  const payLoad = response.json();

  console.log("payload:", payLoad);
}