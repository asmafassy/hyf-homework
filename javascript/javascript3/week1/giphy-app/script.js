console.log(8);
const giphyKey = "Ict53p0C0pIGxRUdr7Pt6uo2nfTSreNn";

// 1. in the html crteate[input type number, input type text, button to search]
// 1.2 create a div to store the img tags
// 2. store elements in variables
// 3. addEventListener on the button
// 5. in the addEventListener, get the value of the input value
// 6.  create an account on giphy api to get a key
// 7. now store the url in fetch and using promises turn the response to .json()
// 8. now in the next .then we are going to work with the content
// 8.1 create a for loop > set the i to 0; i < content.data.length; i++
// 8.2 inside the for loop create img using Javascript
// 8.3 set the img.src
// 8.4 append the img to the div

const giphSearch = document.querySelector("#input-text");
const numberInput = document.querySelector("#input-number");
const button = document.querySelector("#submit");
const images = document.querySelector(".images");

numberInput.addEventListener("keyup", function (event) {
  event.preventDefault();
  console.log(event.key);
  if (event.key === "Enter") {
    button.click();
  }
});

function getImages() {
  const inputValue = giphSearch.value;
  const inputNumbValue = numberInput.value;
  console.log(inputValue);
  console.log(inputNumbValue);

  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${inputValue}&limit=${inputNumbValue}
`)
    .then((response) => response.json())
    .then((content) => {
      console.log(content);
      console.log(content.data);

      renderImages(content.data);
    });
}

function renderImages(imageList) {
  let selectedImages = "";
  for (let i = 0; i < imageList.length; i++) {
    let img = imageList[i];
    console.log(img);
    let selectedImage = img.images.downsized_medium;
    console.log(selectedImage);
    selectedImages += `<img src="${selectedImage.url}" height="${selectedImage.height}" width="${selectedImage.width}"/>`;
  }
  images.innerHTML = selectedImages;
}
