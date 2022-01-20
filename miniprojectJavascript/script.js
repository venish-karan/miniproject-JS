const image = document.querySelector("#bulb");

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (image.src.match("pic_bulboff.gif")) {
    image.src = "pic_bulbon.gif";
    btn.innerText = "Turn Off";
  } else {
    image.src = "./pic_bulboff.gif";
    btn.innerText = "Turn On";
  }
});
