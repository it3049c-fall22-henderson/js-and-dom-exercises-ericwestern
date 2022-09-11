// 🤖: create 2 constants with references to textarea input and the stats section from the DOM


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
const textInput = document.querySelector("#text");
const stat = document.querySelector('#stat');

textInput.addEventListener('input', () => {
  let wordCount = (textInput.value.split(' ')).length;
  let charCount = textInput.value.split('').length;
  stat.innerHTML = "You've written " + wordCount + " words and " + charCount + " characters.";
})