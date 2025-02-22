const image1 = document.getElementById("image1")
const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const text = document.getElementById("paragraph")
const header = document.getElementById("head")
const warn = document.getElementById("warning")
let player = ""

for (let i = 1; i > -1;  i++) {
    player = prompt("Please enter you player name")
   if (player != "") {
    i = -2
   }else {
    console.log(`You tried ${i} times`)
   }
}
 
function b3n1() {
    header.textContent = "Ending 1"
    warn.style.display = "none"
    text.textContent = "You just don't care and go on with your life."
    image1.src = "don't_care.jpg"
    b1.style.display = "none"
    b2.style.display = "none"
    b3.style.display = "none"
    b1.removeEventListener('click', b1n1)
    b2.removeEventListener('click', b2n1)
    b3.removeEventListener('click', b3n1)
}
 
function b1n2() {
    header.textContent = "Investigation Arc"
    text.textContent = "Before you get to the actual investigation you ask Christopher for help because he is the most trustworthy person on the server is has a very astute eye for detail."
    image1.style.display ="none"
    b1.textContent = "Continue"
    b2.style.display = "none"
    b3.style.display = "none"
    b1.addEventListener('click', askchristopher)
}
 
function b1n1() {
    console.log("B1N1")
    header.textContent = "Investigation Arc"
    text.textContent = "Instead of telling everyone and leading to chaotic accusations you swear to find the culpreet without anyone finding out what your doing. You go outside the crime scene to see if you can quickly find the culpret and you find Evan, Nayan, Troy, and Rudra in the area at the gun powder farm. "
    image1.src = "line2part1.webp"
    b1.textContent = "Continue"
    b2.style.display = "none"
    b3.style.display = "none"
    b1.removeEventListener('click', b1n1)
    b2.removeEventListener('click', b2n1)
    b3.removeEventListener('click', b3n1)
    b1.addEventListener('click', b1n2)
}
 
function askchristopher() {
    header.textContent = "Investigation Arc"
    text.textContent = "You go talk to Christopher and he seggests either going back to the crime scene or question the people at the gun powder farm"
    image1.style.display = "none"
    b1.textContent = "Go to the Crime Scene"
    b1.style.display = "flex"
    b2.textContent = "Question gunpowder farm people"
    b2.style.display = "flex"
    b3.style.display = "none"
    b1.removeEventListener('click', askchristopher)
    b2.removeEventListener('click', askchristopher)
    b1.addEventListener('click', crimescene)
    b2.addEventListener('click', gunpowder)
}
 
function crimescene() {
    header.textContent = "Investigation Arc"
    text.textContent = "You decide to go back to the crime scene and you find the culpret's armor lying there. He seems to have pilfered Karim's armor from his dead body"
    image1.src = "chrisbasearmor.png"
    image1.style.display = "flex"
    b1.textContent = "Question gunpowder farm people"
    b1.style.display = "flex"
    b2.textContent = "Call Among Us style meeting"
    b2.style.display = "flex"
    b3.style.display = "none"
    b1.removeEventListener('click', crimescene)
    b2.removeEventListener('click', crimescene)
    b1.addEventListener('click', gunpowder)
    b2.addEventListener('click', amongus)
}
 
function gunpowder() {
    header.textContent = "Investigation Arc"
    text.textContent = "You decide to go to the gunpowder farm and question everyone. Evan and Nayan said that they were together getting materials for a 'special' project, both are wearing full netherite. Rudra said that he was there for a while to get rockets to use when he gets an elytra, he is wearing full diamond. Finally Troy said he just got there to get more rockets for his elytra, he is wearing full nertherite."
    image1.src = "amongusmeeting.webp"
    image1.style.display = "flex"
    b1.textContent = "Go to crime scene"
    b1.style.display = "flex"
    b2.textContent = "Call Among Us style meeting"
    b2.style.display = "flex"
    b3.style.display = "none"
    b1.removeEventListener('click', gunpowder)
    b2.removeEventListener('click', gunpowder)
    b1.addEventListener('click', crimescene)
    b2.addEventListener('click', amongus)
}
 
function amongus() {
    b1.removeEventListener('click', amongus)
    b2.removeEventListener('click', amongus)
    header.textContent = "Investigation Arc"
    text.textContent = "You call an Amoung Us style meeting and the first thing you say is 'There is an imposter among us'. You explained to everyone that Karim was murdered in front of you and you have been following clues to track down his killer. Now who do you think the killer is?"
    image1.src = "amongusmeeting.webp"
    b1.style.display = "none"
    b2.style.display = "none"
    b3.style.display = "none"
    setTimeout(function () {
        let culpret = ""
        do {
            culpret = prompt("Who do you think the culpret is")
        } while (!culpret)
        if(culpret.toLowerCase() == "troy"){
            culpretfound()
        }else{
            wrong()
        }
 
    }, 3500);
}
 
function culpretfound(){
    header.textContent = "Ending 5"
    warn.style.display = "none"
    text.textContent = "You Accuse troy of being the killer and out of nowhere he starts yelling and confessing to everything about how he was just getting revenge after Karim kept taking all his stuff and burning down every house that he tries to build. He shouts that it wasn't his fault as the entire rest of the server pushes him into an obsidian box where he will be trapped forever as punishment."
    image1.src = "victory.png"
    b1.style.display = "none"
    b2.style.display = "none"
    b3.style.display = "none"
}
function wrong(){
    header.textContent = "Ending 6"
    warn.style.display = "none"
    text.textContent = "The culpret knowing that your on his trail lunges and you and kills you before you could even think. It was TROY all along!!"
    image1.src = "youlose.png"
    b1.style.display = "none"
    b2.style.display = "none"
    b3.style.display = "none"
}
 
 
function b2b1n2() {
    header.textContent = "Ending 2"
    warn.style.display = "none"
    text.textContent = "You side with neutrality and refuse to fight in the war. You fly away and live in peace without fighting whatsoever."
    image1.src = "ending_2.jpg"
    b1.style.display = "none"
    b2.style.display = "none"
    b3.style.display = "none"
}
 
function b2b1n3() {
    header.textContent = "Ending 3"
    warn.style.display = "none"
    text.textContent = "You have Marcus's luck and die from lava like all his nether deaths."
    image1.src = "ending3.webp"
    b1.style.display = "none"
    b2.style.display = "none"
    b3.style.display = "none"
    b2.removeEventListener("click", b2b2n3)
}
 
function b2n4() {
    header.textContent = "War Arc"
    warn.style.display = "none"
    text.textContent = `You decide to fight with your team even if it means dying in the process like the good comrad you are.`
    image1.src = "fightscene.webp"
    b1.textContent = "Continue"
    b2.style.display = "none"
    b3.style.display = "none"
    b1.addEventListener('click', function ending4() {
        header.textContent = "Ending 4"
        warn.style.display = "none"
        text.textContent = "After all the fighting and chaos you won the war. But you didn't do enough to properly be considered a winner and you just stand there as Evan and Lucas stand victorious on the podium."
        image1.src = "ending4.webp"
        b1.style.display = "none"
        b2.style.display = "none"
        b3.style.display = "none"
    })
}
 
function b2b2n3() {
    header.textContent = "War Arc"
    warn.style.display = "none"
    text.textContent = `You, Evan, and Lucas go to gather resources. As you split up Christopher, Troy, Gabe, and Nayan ambush you in the forest. You light a rocket to get your teammates attention and as they rush to your aid what do you descide to do?`
    image1.src = "ambushscene.webp"
    b1.textContent = "Run away"
    b2.textContent = "Fight with your team"
    b3.style.display = "none"
    b1.removeEventListener("click", b2b1n3)
 
    b1.addEventListener('click', function running() {
        header.textContent = "War Arc"
        warn.style.display = "none"
        text.textContent = "You decide to run for your life and hide away underground for 3 days and night just to make sure you survive."
        image1.src = "hiding.webp"
        b1.textContent = "Continue"
        b1.style.display = "flex"
        b2.style.display = "none"
        b3.style.display = "none"
 
        b1.removeEventListener('click', running)
 
        b1.addEventListener('click', function ending4() {
            header.textContent = "Ending 4"
            warn.style.display = "none"
            text.textContent = "After all the fighting and chaos you won the war. But you didn't do enough to properly be considered a winner and you just stand there as Evan and Lucas stand victorious on the podium."
            image1.src = "ending4.webp"
            b1.style.display = "none"
            b2.style.display = "none"
            b3.style.display = "none"
        })
    })
 
    b2.addEventListener('click', b2n4)
 
}
 
function b2b2n2() {
    header.textContent = "War Arc"
    warn.style.display = "none"
    text.textContent = `You side with Evan who just wanted a motive to have a war for the fun of it. What do you want to do first: try to get full netherite or grind other materials with the team (Evan, lucas, and you ${player}).`
    image1.src = "line2part2.jpg"
    b1.textContent = "Mine Netherite"
    b2.textContent = "Grind other materials"
    b3.style.display = "none"
    b2.removeEventListener('click', b2b2n2)
    b1.addEventListener('click', b2b1n3)
    b2.addEventListener('click', b2b2n3)
}
 
function b2n1() {
    header.textContent = "War Arc"
    text.textContent = "You tell everyone and accusations start being thrown left and right about who killed the server's 'favorite person'. But supprisingly no one is accussing Marcus, Rudra, or Troy. Everyone starts chhosing sides and you need to choose one too. Which do you choose."
    image1.src = "line2part1.webp"
    b1.textContent = "Neutrality"
    b2.textContent = "Side with Evan"
    b3.textContent = "Side with chris"
 
    b1.removeEventListener('click', b1n1)
    b2.removeEventListener('click', b2n1)
    b3.removeEventListener('click', b3n1)
    b1.addEventListener('click', b2b1n2)
    b2.addEventListener('click', b2b2n2)
    b3.addEventListener('click', askchristopher)
}
 
b1.addEventListener('click', b1n1)
b2.addEventListener('click', b2n1)
b3.addEventListener('click', b3n1)
 