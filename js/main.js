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

let answerBot = "";

sendButton.addEventListener('click', () => {

  if (messageInput.value === "") {
    alert("Please write a message before sending.");
    return;
  }

  /*Build a chat glove for human*/
  const humanGloveCnt = document.createElement('div');
  const humanGlove = document.createElement('div');
  const textGlove = document.createTextNode(messageInput.value);
  /*add classes for each div*/
  humanGlove.classList.add('humanMessage');
  humanGloveCnt.classList.add('humanTalksCont');
  /*assign the child for each parent box*/
  humanGlove.appendChild(textGlove);
  humanGloveCnt.appendChild(humanGlove);
  messageContainer.appendChild(humanGloveCnt);

  /*Doing the same process with Virtual Assitent*/
  
  chatBox(messageInput.value);//call the function to get the answer
  
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

})

const chatBox = (sentence) => {
  let finalAnsw = "";

    if (sentence.includes("hello") || sentence.includes("Hello") || sentence.includes("hi")) {
     finalAnsw = "Hello! How can I assist you today?";
    }
    else if( sentence.includes("location") || sentence.includes("Location")) {
       finalAnsw = "We are located at Lima-Perú.";
    }
    else if( sentence.includes("contact") || sentence.includes("Contact")) {
        finalAnsw = "You can contact us at supportintex@gmail.com our by our phone number: 123-456-7890.";
    }
    else if (sentence.includes("company") || sentence.includes("Company")) {
      finalAnsw = "We are a company that specializes in providing innovative solutions for textile machinery";
    }
    else if (sentence.includes("offering") || sentence.includes("offer")) {
        finalAnsw = "We offer a range of services including textile machinery monitoring, maintenance, and support.";
    }
    else if (sentence.includes("kind of reports")) {
        finalAnsw = "The system automatically generates reports on efficiency, output per hour, fault history"
    }  
    else if (sentence.includes("plants") || sentence.includes("plant") || sentence.includes("production lines")) { 
        finalAnsw = "We can monitor up to 5 plants or production lines at the same time, depending on the size of the plant and the number of machines.";    
    }
    else if (sentence.includes("monitoring") || sentence.includes("monitor")) {     
        finalAnsw = "We can monitor the machines in real-time, providing you with up-to-date information on their performance and status.";
    }
    else if(sentence.includes("benefits") || sentence.includes("benefit")) {
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
