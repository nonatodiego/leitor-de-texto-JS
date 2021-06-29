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
    image: './img/GermánCano.png',
    text: 'Germán Cano'
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
    text: 'Hakan Çalhanoglu'
  },
  {
    image: './img/DenisCheryshev.png',
    text: 'Denis Cheryshev'
  },
  {
    image: './img/EmilForsberg.png',
    text: 'Emil Forsberg'
  },
  {
    image: './img/SergioRamos.png',
    text: 'Sergio Ramos'
  },
  {
    image: './img/KevinDeBruyne.png',
    text: 'Kevin De Bruyne'
  },
  {
    image: './img/GeorginioWijnaldum.png',
    text: 'Georginio Wijnaldum'
  },
  {
    image: './img/RobertLewandowski.png',
    text: 'Robert Lewandowski'
  },
  {
    image: './img/ThierryHenry.png',
    text: 'Thierry Henry'
  },
  {
    image: './img/PatrikSchick.png',
    text: 'Patrik Schicki'
  },
  {
    image: './img/LucasRadebe.png',
    text: 'Lucas Radebe'
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

  box.addEventListener('click', () => {
    setTextMessage(text)
    speakText()

    // Add active effect
    box.classList.add('active')
    setTimeout(() => box.classList.remove('active'), 800)
  })

  main.appendChild(box)
}

// Init speech 
const message = new SpeechSynthesisUtterance();

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

//  Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message)
}

// Set voice
function setVoice(e) {
  message.voice = voices.find(voice => voice.name === e.target.value)
}

// voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices)

// Toggle text box
toggleBtn.addEventListener('click', 
() => document.getElementById('text-box').classList.toggle('show'))

// close button
closeBtn.addEventListener('click', 
() => document.getElementById('text-box').classList.remove('show'))


// Change voice
voicesSelect.addEventListener('change', setVoice)

// Red text button
readBtn.addEventListener('click', () => {
  setTextMessage(textarea.value);
  speakText()
})

getvoices()