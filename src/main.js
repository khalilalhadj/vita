import './style.css'

const animalsObj = [
	{ name: 'Медведь', url: '../images/Bear.png' },
	{ name: 'Кот', url: '../images/cat.png' },
	{ name: 'Курица', url: '../images/chicken.png' },
	{ name: 'Корова', url: '../images/cow.png' },
	{ name: 'Собака', url: '../images/dog.png' },
	{ name: 'Утка', url: '../images/duck.png' },
	{ name: 'Лиса', url: '../images/fox.png' },
	{ name: 'Жираф', url: '../images/giraffe.png' },
	{ name: 'Козел', url: '../images/goat.png' },
	{ name: 'Гусь', url: '../images/goose.png' },
	{ name: 'Лошадь', url: '../images/horse.png' },
	{ name: 'Свинья', url: '../images/pig.png' },
	{ name: 'Кролик', url: '../images/rabbit.png' },
	{ name: 'Овца', url: '../images/sheep.png' },
	{ name: 'Волк', url: '../images/wolf.png' },
]

document.querySelector('#app').innerHTML = `


<section class="splide" aria-label="Splide Basic HTML Example">
  <div  class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
      <img class="animalPhoto" src="../images/Bear.png" alt="Медведь" />
        <h1 class="animal">Медведь</h1>
      </li>
    </ul>
 <button id="counter" type="button" class="button" > Тык! </button>
</div>
</section>
`

const counter = document.querySelector('#counter')
counter.onclick = function () {
	const random = Math.floor(Math.random() * animalsObj.length)
	const animalName = document.querySelector('.animal')
	const animalImg = document.querySelector('.animalPhoto')

	const animal = animalsObj[random]

	animalName.textContent = animal.name
	animalImg.src = animal.url
}

// const picture = document.querySelector('#counter')
// picture.onclick = function () {
// 	const random = Math.floor(Math.random() * animalImgs.length)
// 	const animalPhotos = document.querySelector('.animalPhoto')
// 	animalPhotos.textContent = animalImgs[random]
// }

// const counter = document.querySelector('#counter')
// counter.onclick = function () {
// 	const random = Math.floor(Math.random() * animals.length)
// 	const animalName = document.querySelector('.animal')
// 	animalName.textContent = animals[random]
// }

// const animals = [
// 	'Кот',
// 	'Собака',
// 	'Жираф',
// 	'Лошадь',
// 	'Корова',
// 	'Коза',
// 	'Овца',
// 	'Свинья',
// 	'Курица',
// 	'Утка',
// 	'Гусь',
// 	'Кролик',
// 	'Медведь',
// 	'Лиса',
// 	'Волк',
// ]

// const animalImgs = [
// 	'../images/Bear.png',
// 	'../images/cat.png',
// 	'../images/chicken.png',
// 	'../images/cow.png',
// 	'../images/dog.png',
// 	'../images/duck.png',
// 	'../images/fox.png',
// 	'../images/giraffe.png',
// 	'../images/goat.png',
// 	'../images/goose.png',
// 	'../images/horse.png',
// 	'../images/pig.png',
// 	'../images/rabbit.png',
// 	'../images/sheep.png',
// 	'../images/wolf.png',
// ]
