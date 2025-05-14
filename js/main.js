window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0)
})

//scrool infinity horizontal animation
const track = document.querySelector(".carousel-cards");
track.innerHTML += track.innerHTML;



/////////////////////////////


/*the box of message with VA comes*/
const messageBoxMask = document.querySelector('.maskAi');
const messageAIBox = document.querySelector('.messageBoxCont');
const callAIBox = document.querySelector('.VAIconBox');
const closeAIBox = document.querySelector('.closeChat');

callAIBox.addEventListener('click', () => {
  messageAIBox.classList.toggle('translateBox');
  messageBoxMask.classList.toggle('visible');
});

closeAIBox.addEventListener('click', () => {
  messageAIBox.classList.toggle('translateBox');
  messageBoxMask.classList.toggle('visible');
})



/*@TODO: add the logic of VA here*/
const messageInput = document.querySelector('.txtWriter');
const sendButton = document.querySelector('.sendButton');
const messageContainer = document.querySelector('.claraTalksBox');

const messageValue = document.querySelectorAll('.fm-bx-value')
const frequencyMsgBox = document.querySelector('.frecuency-message-box')

let answerBot = "";

let messageClick = "";

let interMsgFrc = 0;



/* scroll chat behaviour */
let scrollBtm = () => {
  messageContainer.scrollTop = messageContainer.scrollHeight
}

messageContainer.addEventListener("scroll", function(){
  const isAtBottom = messageContainer.scrollTop + messageContainer.clientHeight >= messageContainer.scrollHeight - 1;
  frequencyMsgBox.classList.toggle("invisible", !isAtBottom);
})

/*Frequency message query*/
for (let i = 0; i < messageValue.length; i++) {
  messageValue[i].addEventListener("click", () =>{
    interMsgFrc++;
    messageClick = messageValue[i].innerHTML
    createChat(messageClick)
    scrollBtm()

    if (interMsgFrc) {
      frequencyMsgBox.classList.remove('frecuency-message-box')
      frequencyMsgBox.classList.add('frecuency-message-box-hidden')
    }
  })

}

sendButton.addEventListener('click', () => {

  if (messageInput.value === "") {
    alert("Please write a message before sending.");
    return;
  }

  createChat(messageInput.value)

  scrollBtm()

  frequencyMsgBox.classList.remove('frecuency-message-box')
  frequencyMsgBox.classList.add('frecuency-message-box-hidden')

})




let createChat = (mssg) => {
  /*Build a chat glove for human*/
  const humanGloveCnt = document.createElement('div');
  const humanGlove = document.createElement('div');
  const textGlove = document.createTextNode(mssg);
  /*add classes for each div*/
  humanGlove.classList.add('humanMessage');
  humanGloveCnt.classList.add('humanTalksCont');
  /*assign the child for each parent box*/
  humanGlove.appendChild(textGlove);
  humanGloveCnt.appendChild(humanGlove);
  messageContainer.appendChild(humanGloveCnt);

  /*Doing the same process with Virtual Assitent*/
  
  chatBox(mssg);//call the function to get the answer

  const messageAIBox = document.createElement('div');
  const messageAI = document.createElement('div');
  const textAI = document.createTextNode(answerBot);
  const imgAIContainer = document.createElement('div');
  const imgAI = document.createElement('img');
  

  imgAI.src = "Img/Clara.png";
  imgAI.alt = "Virtual Assistant Picture";
  imgAI.classList.add('imgVA');
  imgAIContainer.classList.add('vaImgProfile');
  messageAI.classList.add('vaMessage');
  messageAIBox.classList.add('claraTalksCont');


  imgAIContainer.appendChild(imgAI);
  messageAI.appendChild(textAI);
  messageAIBox.appendChild(imgAIContainer);
  messageAIBox.appendChild(messageAI);
  messageContainer.appendChild(messageAIBox);
  messageContainer.scrollTop = messageContainer.scrollHeight; //scroll to the bottom of the container
  messageContainer.scrollIntoView({ behavior: 'smooth' });
  messageContainer.style.overflowY = "scroll"; //enable scroll bar
  messageContainer.style.overflowX = "hidden"; //disable scroll bar
  
  messageInput.value = ""; //clear the input box

}




const chatBox = (sentence) => {
  let finalAnsw = "";

    sentence = sentence.trim();

    if (sentence.includes("hello") || sentence.includes("Hello") || sentence.includes("hi")) {
     finalAnsw = "Hello! How can I assist you today?";
    }
    else if(sentence == "Where is the company location?") {
       finalAnsw = "We are located at Lima-Perú.";
    }
    else if(sentence == "How i can contact the company?") {
        finalAnsw = "You can contact us at supportintex@gmail.com our by our phone number: 123-456-7890.";
    }
    else if (sentence.includes("company") || sentence.includes("Company")) {
      finalAnsw = "We are a company that specializes in providing innovative solutions for textile machinery";
    }
    else if (sentence == "Whats is the company is offering?") {
        finalAnsw = "We offer a range of services including textile machinery monitoring, maintenance, and support.";
    }
    else if (sentence == "What kind of reports have the app?") {
        finalAnsw = "The system automatically generates reports on efficiency, output per hour, fault history"
    }  
    else if (sentence.includes("plants") || sentence.includes("plant") || sentence.includes("production lines")) { 
        finalAnsw = "We can monitor up to 5 plants or production lines at the same time, depending on the size of the plant and the number of machines.";    
    }
    else if (sentence == "Is the app able to monitor the machines?") {     
        finalAnsw = "We can monitor the machines in real-time, providing you with up-to-date information on their performance and status.";
    }
    else if(sentence == "What the benefits of the app?") {
        finalAnsw = "The benefits of our system include increased efficiency, reduced downtime, and improved production quality. Our solution can be integrated into your current machines using sensors and adaptive modules—no need to replace your existing equipment.";  
    }
    else {
      finalAnsw = "I'm sorry, I didn't understand that. I can answer you just about company things. like services, location, contact, etc.";
    }

  answerBot = finalAnsw;
}




///////////////////////////////// nav toggle
const navMenu = document.querySelector(".nav-links-tg")
const navToggle = document.querySelector(".bar-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("blockft")
})


//////////////////////////////////////// language switcher
const btnLanguageBox = document.querySelector(".arrow-language")
const boxLanguageSelect = document.querySelector(".languageBox")
const langButtons = document.querySelectorAll("[data-language]")
const textsToChange = document.querySelectorAll("[data-section]")
const lngText = document.querySelector(".changeLang")

btnLanguageBox.addEventListener("click", () =>{
  btnLanguageBox.classList.toggle("fa-angle-down")
  btnLanguageBox.classList.toggle("fa-angle-up")

  boxLanguageSelect.classList.toggle("languageBoxBack")

})

langButtons.forEach((e) =>{
  e.addEventListener("click",() => {
    fetch(`i18n/${e.dataset.language}.json`)
    .then(res => res.json())
    .then(data => {
      textsToChange.forEach((elem) =>{
        const section = elem.dataset.section;
        const value = elem.dataset.value;

        elem.innerHTML = data[section][value]
      })
    })

    lngText.textContent = e.dataset.language
  })
})
  

window.addEventListener("scroll",() => {
  boxLanguageSelect.classList.remove("languageBoxBack")
  btnLanguageBox.classList.add("fa-angle-down")
  btnLanguageBox.classList.remove("fa-angle-up")
})









/////////////////////////////////////////////////////
///// Fotos movibles
let progress = 50
let startX = 0
let active = 0
let isDown = false

/*--------------------
Contants
--------------------*/
const speedWheel = 0.02
const speedDrag = -0.1

/*--------------------
Get Z
--------------------*/
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

/*--------------------
Items
--------------------*/
const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index-active)/$items.length)
}

/*--------------------
Animate
--------------------*/
const animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress/100*($items.length-1))
  
  $items.forEach((item, index) => displayItems(item, index, active))
}
animate()

/*--------------------
Click on Items
--------------------*/
$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i/$items.length) * 100 + 10
    animate()
  })
})

/*--------------------
Handlers
--------------------*/
const handleWheel = e => {
  const wheelProgress = e.deltaY * speedWheel
  progress = progress + wheelProgress
  animate()
}

const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }
  if (!isDown) return
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
  const mouseProgress = (x - startX) * speedDrag
  progress = progress + mouseProgress
  startX = x
  animate()
}

const handleMouseDown = e => {
  isDown = true
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
  isDown = false
}

/*--------------------
Listeners
--------------------*/
document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)