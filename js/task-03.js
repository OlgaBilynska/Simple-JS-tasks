const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const makeGallery = ({ url, alt }) => {
  return `<li class="image-item">
  <img class="image"
  src = ${url}
  alt = ${alt}
 height = 300
 >
  </li >`
};

const galleryEl = document.querySelector('.gallery');

const galleryList = images.map(makeGallery).join(' ');

galleryEl.insertAdjacentHTML("afterbegin", galleryList);

// const makeGallery = ({url, alt}) => {
//   const imgItemEl = document.createElement('li');

// const imgEl = document.createElement('img');
//   imgEl.alt = alt;
//   imgEl.src = url;  

//   imgItemEl.insertAdjacentElement("beforeend", imgEl);
//   return imgItemEl;
// };

// const galleryList = images.map(makeGallery);

// console.log(galleryList);

// galleryEl.append(...galleryList);




