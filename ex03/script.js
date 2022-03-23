const texts = ['Him rendered may attended concerns jennings reserved now. Sympathize did now preference unpleasing mrs few. Mrs for hour game room want are fond dare. For detract charmed add talking age. Shy resolution instrument unreserved man few. She did open find pain some out. If we landlord stanhill mr whatever pleasure supplied concerns so. Exquisite by it admitting cordially september newspaper an. Acceptance middletons am it favourable. It it oh happen lovers afraid.',
    'Parish so enable innate in formed missed. Hand two was eat busy fail. Stand smart grave would in so. Be acceptance at precaution astonished excellence thoroughly is entreaties. Who decisively attachment has dispatched. Fruit defer in party me built under first. Forbade him but savings sending ham general. So play do in near park that pain.',
    'Am increasing at contrasted in favourable he considered astonished. As if made held in an shot. By it enough to valley desire do. Mrs chief great maids these which are ham match she. Abode to tried do thing maids. Doubtful disposed returned rejoiced to dashwood is so up.',
    'Also when you use plain Lorem ipsum text, your design will look like a million other designs out there. With Random Text Generator your designs will look more unique while still containing text which truly means nothing.',
    "It's better than Lorem ipsum because it can produce text in many languages and in particular: Chinese, Dutch, English, Finnish, French, German, Greek, Hebrew, Italian, Japanese, Latin, Polish, Portuguese, Russian, Serbian and Spanish."
]
const paragraph = document.querySelector("#text")
const refrech = document.querySelector("#refrech")
const textplace = document.querySelector('#textplace')
const timer = document.querySelector('#clock')
let txt = paragraph.textContent
let tt = txt[0]
let min = 0
let sec = 0
let milsec = 0
const time = ``
let timecheck = false



let x = 1
refrech.addEventListener('click', e => {
    let i = Math.floor(Math.random() * 5)
    paragraph.innerHTML = texts[i]
    textplace.value = 'clear'
    txt = paragraph.textContent
    tt = txt[0]
    x = 1
})
window.addEventListener('load', e => {
    let i = Math.floor(Math.random() * 5)
    paragraph.innerHTML = texts[i]
    txt = paragraph.textContent
    tt = txt[0]
})
textplace.addEventListener('input', e => {
    if (textplace.value != tt) {
        textplace.style.borderColor = 'red'

    } else if (textplace.value == tt) {
        textplace.style.borderColor = 'green'
        tt = tt + txt[x]
        x += 1
    }
    timecheck = true
})
if (timecheck == true) {
    const intermil = setInterval(() => {
        milsec += 1
        timer.innerHTML = ` 0${min} : 0${sec} : 0${milsec}`
        if (milsec > 99) {
            milsec = 0
        }
        if (sec > 60) {
            sec = 0
        }
        if (min > 60) {
            min = 0
        }
    }, 10);
    const intersec = setInterval(() => {
        sec += 1
    }, 1000);
    const intermin = setInterval(() => {
        min += 1
    }, 60000);
}