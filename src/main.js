import './style.css'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css'

const animalsObj = [
	{ name: 'Медведь', url: new URL('../images/Bear.png', import.meta.url).href },
	{ name: 'Кот', url: new URL('../images/cat.png', import.meta.url).href },
	{
		name: 'Курица',
		url: new URL('../images/chicken.png', import.meta.url).href,
	},
	{ name: 'Корова', url: new URL('../images/cow.png', import.meta.url).href },
	{ name: 'Собака', url: new URL('../images/dog.png', import.meta.url).href },
	{ name: 'Утка', url: new URL('../images/duck.png', import.meta.url).href },
	{ name: 'Лиса', url: new URL('../images/fox.png', import.meta.url).href },
	{
		name: 'Жираф',
		url: new URL('../images/giraffe.png', import.meta.url).href,
	},
	{ name: 'Козел', url: new URL('../images/goat.png', import.meta.url).href },
	{ name: 'Гусь', url: new URL('../images/goose.png', import.meta.url).href },
	{ name: 'Лошадь', url: new URL('../images/horse.png', import.meta.url).href },
	{ name: 'Свинья', url: new URL('../images/pig.png', import.meta.url).href },
	{
		name: 'Кролик',
		url: new URL('../images/rabbit.png', import.meta.url).href,
	},
	{ name: 'Овца', url: new URL('../images/sheep.png', import.meta.url).href },
	{ name: 'Волк', url: new URL('../images/wolf.png', import.meta.url).href },
]

document.querySelector('#app').innerHTML = `


<section class="splide" aria-label="Splide Basic HTML Example">
  <div  class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
      <img class="animalPhoto" src="${animalsObj[0].url}" alt="${animalsObj[0].name}" />
        <h1 class="animal">${animalsObj[0].name}</h1>
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

	const { name, url } = animalsObj[random]

	animalName.textContent = name
	animalImg.src = url
}

new Splide('.splide').mount()
