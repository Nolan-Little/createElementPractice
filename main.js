let container = document.querySelector("#messages")
let fragment = document.createDocumentFragment();

function messenger(message) {
  let section = document.createElement("section")
  section.className = "message"
  section.textContent = message
  fragment.appendChild(section);
  container.appendChild(fragment);
}
console.log("call function  with format: 'messenger('Your message here')' and watch it ouput to the page!")