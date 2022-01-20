const root = document.querySelector("#root");

const btn = document.querySelector("#btn");

function createItem(photo) {
  //card
  const card = document.createElement("div");
  card.classList.add("card");

  //photo
  const image = document.createElement("img");
  image.src = photo.thumbnailUrl;

  //title
  const title = document.createElement("h4");
  title.innerText = photo.title;

  card.appendChild(image);
  card.appendChild(title);
  root.appendChild(card);
}

function displayImage(photos) {
  photos.forEach(function (photo) {
    createItem(photo);
  });
  console.log(photos);
}

btn.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((res) => res.json())
    .then((photos) => {
      displayImage(photos);
    });
});
