let elem = document.querySelector("div");
let rect = elem.getBoundingClientRect();
for (const key in rect) {
  if (typeof rect[key] !== "function") {
    let para = document.createElement("p");
    para.textContent = `${key} : ${rect[key]}`;
    document.body.appendChild(para);
  }
}


window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  //console.log(window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  document.body.style.setProperty('--box', document.getElementById("box").getBoundingClientRect().top);
  console.log("box", document.getElementById("box").getBoundingClientRect().top);
}, false);