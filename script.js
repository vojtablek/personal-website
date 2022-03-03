var i = 0;
const consoleText = document.getElementById("codeP");
const fakeCode = consoleText.innerHTML;
var codeNow = '';
var speed = 5; /* The speed / duration of the effect in milliseconds */
var statusBarUsed = false;

const typeWriter = () => {
  if (i < fakeCode.length) {
    codeNow = codeNow.concat(fakeCode.charAt(i));
    consoleText.innerHTML = codeNow;
    i++;
    setTimeout(typeWriter, speed);
  }
}

const animateBar = (lang) => {
  let id = "skillbar" + lang.toUpperCase();
  let htmlClass = "skillbar__" + lang;
  let bar = document.getElementById(id);
  bar.classList.add(htmlClass);
}

const animationOnScroll = (e) => {
  offsetY = document.body.scrollTop;
  if (offsetY >= 450 && statusBarUsed == false) {
    animateBar("html");
    animateBar("css");
    animateBar("js");
    animateBar("sql");
    statusBarUsed = true;
  }
}

document.body.addEventListener("scroll", animationOnScroll);

window.onload = (e) => {
  typeWriter();
};
