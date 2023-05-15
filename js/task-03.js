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

const containerGallery = document.querySelector('.gallery');

const elGallery = images.map(element => {
  const elLi = document.createElement('li');
  const elImg = document.createElement('img');
  elLi.classList.add('gallery_item');
  elImg.alt = element.alt;
  elImg.src = element.url;
  elLi.appendChild(elImg);

  return elLi;
});

containerGallery.append(...elGallery);