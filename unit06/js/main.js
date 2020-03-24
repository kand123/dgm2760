function tellStory() {
  let nounString = document.querySelector("#nouns");
  nounString = nounString.value.toLowerCase();
  nounArray = nounString.split(/\s+/);

  let adjString = document.querySelector("#adjectives");
  adjString = adjString.value.toLowerCase();
  adjArray = adjString.split(/\s+/);

  let verbString = document.querySelector("#verbs");
  verbString = verbString.value.toLowerCase();
  verbArray = verbString.split(/\s+/);

  const myStory = `Once upon a time there were three little ${nounArray[0]}s who lived deep in the woods. One day a ${nounArray[1]} fell from the sky and the ${nounArray[0]}s did not know how to ${verbArray[0]}, so they ran away to a ${adjArray[0]} ${nounArray[2]}. Along the way, they crossed paths with a ${nounArray[3]} who was very good at ${verbArray[1]}ing like a ${adjArray[1]} ${nounArray[4]}. They narrowly avoided an accident with a ${adjArray[2]} ${nounArray[5]}, and so the ${nounArray[0]}s ran all the way home, past a scary ${nounArray[6]}, to their cozy, warm home.`  
  
  document.querySelector("#story").textContent = myStory;
}
