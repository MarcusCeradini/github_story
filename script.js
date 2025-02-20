const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const text = document.getElementById("paragraph")
const header = document.getElementById("head")
const warn = document.getElementById("warning")
let player = prompt("Please enter you player name")

//change image => image1.sec = "new image"


while(player === ""){
    player = prompt("Please enter you player name")
}

b1.addEventListener('click', () => {
    console.log("hi")
})

b2.addEventListener('click', () => {
    header.textContent = "War Arc"
    text.textContent = "You tell everyone and accusations start being thrown left and right about who killed the server's 'favorite person'. But supprisingly no one is accussing Marcus, Rudra, or Troy. Everyone starts chhosing sides and you need to choose one too. Which do you choose"
    image1.src = "line2part1.webp"
    image2.style.display = "none"
    image3.style.display = "none"
    b1.textContent = "Neutrality"
    b2.textContent = "Side with Evan"
    b3.textContent = "Side with chris"

    b1.addEventListener('click', () => {
        header.textContent = "Ending 2"
        warn.style.display = "none"
        text.textContent = "You side with neutrality and refuse to fight in the war. You fly away and live in peace without fighting whatsoever"
        image1.src = "ending_2.jpg"
        image2.style.display = "none"
        image3.style.display = "none"
        b1.style.display = "none"
        b2.style.display = "none"
        b3.style.display = "none"
    })
    b2.addEventListener('click', () => {
        header.textContent = "War Arc"
        warn.style.display = "none"
        text.textContent = `You side with Evan who just wanted a motive to have a war for the fun of it. What do you want to do first: try to get full netherite or grind other materials with the team (Evan, lucas, and you ${player})`
        image1.src = "line2part2.jpg"
        image2.style.display = "none"
        image3.style.display = "none"
        b1.textContent = "Mine Netherite"
        b2.textContent = "Grind other materials"
        b3.style.display = "none"

            b1.addEventListener('click', () => {
                header.textContent = "Ending 3"
                warn.style.display = "none"
                text.textContent = "You have Marcus's luck and die from lava like all his nether deaths"
                image1.src = "ending3.webp"
                image2.style.display = "none"
                image3.style.display = "none"
                b1.style.display = "none"
                b2.style.display = "none"
                b3.style.display = "none"
            })
            b2.addEventListener('click', () => {
                header.textContent = "War Arc"
                warn.style.display = "none"
                text.textContent = `You, Evan, and Lucas go to gather resources. As you split up Christopher, Troy, Gabe, and Nayan ambush you in the forest. You light a rocket to get your teammates attention and as they rush to your aid what do you descide to do?`
                image1.src = "ambushscene.webp"
                image2.style.display = "none"
                image3.style.display = "none"
                b1.textContent = "Run away"
                b2.textContent = "Fight with your team"
                b3.style.display = "none"

                b1.addEventListener('click', function running(){
                    header.textContent = "War Arc"
                    warn.style.display = "none"
                    text.textContent = "You decide to run for your life and hide away underground for 3 days and night just to make sure you survive."
                    image1.src = "hiding.webp"
                    image2.style.display = "none"
                    image3.style.display = "none"
                    b1.textContent = "Continue"
                    b1.style.display = "flex"
                    b2.style.display = "none"
                    b3.style.display = "none"

                    b1.removeEventListener('click', running)

                    b1.addEventListener('click', function ending4(){
                        header.textContent = "Ending 4"
                        warn.style.display = "none"
                        text.textContent = "After all the fighting and chaos you won the war. But you didn't do enough to properly be considered a winner and you just stand there as Evan and Lucas stand victorious on the podium"
                        image1.src = "ending4.webp"
                        image2.style.display = "none"
                        image3.style.display = "none"
                        b1.style.display = "none"
                        b2.style.display = "none"
                        b3.style.display = "none"
                    })
                })

                b2.addEventListener('click', () => {
                    header.textContent = "War Arc"
                    warn.style.display = "none"
                    text.textContent = `You decide to fight with your team even if it means dying in the process like the good comrad you are.`
                    image1.src = "fightscene.webp"
                    image2.style.display = "none"
                    image3.style.display = "none"
                    b1.textContent = "Continue"
                    b2.style.display = "none"
                    b3.style.display = "none"
                    b1.addEventListener('click', function ending4(){
                        header.textContent = "Ending 4"
                        warn.style.display = "none"
                        text.textContent = "After all the fighting and chaos you won the war. But you didn't do enough to properly be considered a winner and you just stand there as Evan and Lucas stand victorious on the podium"
                        image1.src = "ending4.webp"
                        image2.style.display = "none"
                        image3.style.display = "none"
                        b1.style.display = "none"
                        b2.style.display = "none"
                        b3.style.display = "none"
                    })
                })
            })
    })
})

b3.addEventListener('click', () => {
    header.textContent = "Ending 1"
    warn.style.display = "none"
    text.textContent = "You just don't care and go on with your life"
    image1.src = "don't_care.jpg"
    image2.style.display = "none"
    image3.style.display = "none"
    b1.style.display = "none"
    b2.style.display = "none"
    b3.style.display = "none"
})