const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
  {
    image: './img/pele.png',
    text: 'Pelé'
  },
  {
    image: './img/FrankLampard.png',
    text: 'Frank Lampard'
  },
  {
    image: './img/ClarenceSeedorf.png',
    text: 'Clarence Seedorf'
  },
  {
    image: './img/CristianoRonaldo.png',
    text: 'Cristiano Ronaldo'
  },
  {
    image: './img/DidierDrogba.png',
    text: 'Didier Drogba'
  },
  {
    image: './img/DiegoMaradona.png',
    text: 'Diego Maradona'
  },
  {
    image: './img/LionelMessi.png',
    text: 'Lionel Messi'
  },
  {
    image: './img/LucasRadebe.png',
    text: 'Lucas Radebe'
  },
  {
    image: './img/MarkViduka.png',
    text: 'Mark Viduka'
  },
  {
    image: './img/Neymar.png',
    text: 'Neymar'
  },
  {
    image: './img/PaulPogba.png',
    text: 'Paul Pogba'
  },
  {
    image: './img/SergioBusquets.png',
    text: 'Sergio Busquets'
  },
  {
    image: './img/VirgilvanDijk.png',
    text: 'Virgil van Dijk'
  },
  {
    image: './img/BastianSchweinsteiger.png',
    text: 'Bastian Schweinsteiger'
  },
  {
    image: './img/HakanCalhanoglu.png',
    text: 'Hakan Calhanoglu'
  },
  {
    image: './img/DenisCheryshev.png',
    text: 'Denis Cheryshev'
  },
]

data.forEach(createBox)

function createBox(item){
  const box = document.createElement('div')

  const { image, text } = item

  box.classList.add('box')
  box.innerHTML = `
    <img src="${image}" alt=${text} />
    <p class="info">${text}</p>
  ` 

  // todo - speak event

  main.appendChild(box)
}

// Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach(voices => {
    const option = document.createElement('option')

    option.value = voices.name
    option.innerText = `${voices.name} ${voices.lang}`
    
    voicesSelect.appendChild(option)
  })
}

// voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices)

// Toggle text box
toggleBtn.addEventListener('click', 
() => document.getElementById('text-box').classList.toggle('show'))

// close button
closeBtn.addEventListener('click', 
() => document.getElementById('text-box').classList.remove('show'))

getvoices()