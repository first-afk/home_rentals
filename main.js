let addbtn = document.getElementById('button')

addbtn.addEventListener('click', (e) => {
  e.preventDefault()
   alert('Property has been added')
//   let address = document.getElementById('address')
//   let price = document.getElementById('price')
//   let room = document.getElementById('room')

let submit = document.forms.form
let {address, room, price} = submit
let property = {
  address: address.value,
  room: room.value,
  price: price.value,
}
createProperty(property);

}
)

let createProperty = (property) =>{
  let cardContainer = document.querySelector('.card-wrapper');
  let cardTemplate = document.querySelector('.card');
  let card = cardTemplate.cloneNode(true);

  let cardAddress = card.querySelector('.name');
  let cardRoom = card.querySelector('.title');
  let cardPrice = card.querySelector('.roomfee')

  cardAddress.textContent =  `${property['address']}`;
  cardRoom.textContent = `${property['room']} Room`
  cardPrice.textContent = `${property['$price']}/Month`

  cardContainer.insertAdjacentElement("beforeend", card);
  
}


// to upload images
let uploadphoto = document.querySelector('.upload-button');
let chosenimage = document.getElementById('chosenimage');
let filename = document.getElementById('file-name')
let container = document.getElementById('photo')
let imagedisplay = document.getElementById('image-display')
let error = document.getElementById('error')

const fileHandler = (file, name, type) =>{
  if(type.split('/') !== 'image'){
    error.innerText = 'Please upload a file';
    return false;
  }
  error.innerText = ""
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    let imageContainer = document.createElement('figure');
    let img = document.createElement('img');
    img.src = reader.result;
    imageContainer.appendChild(img);
    imageContainer.innerHTML += `<figcaption>${name}></figcaption>`

    imagedisplay.appendChild(imageContainer);

  }
}

uploadphoto.addEventListener('change', () =>{
  imagedisplay.innerHTML = "";
  Array.from (uploadphoto.files).forEach((file) =>{
    fileHandler(file, file.name, file.type); 
  })
})