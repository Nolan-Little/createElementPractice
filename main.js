let container = document.querySelector("#messages")
function messenger(message) {
  let section = document.createElement("section")
  section.className = "message"
  section.textContent = message
  container.appendChild(section);
}

console.log("call function messenger('Your message here') and watch it ouput to the page!")