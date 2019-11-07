
const name = "Michael Vanderloon";
const age = 33;
const birthday = "Spetember 28";
const detroitGC= false;


const lifeEvents =[
        "I was born in Grand Rapids, MI.",
        "I attend Grand Circus bootcamp.",
        "I have written 4 books that are self published.",
        "I will soon be a front end developer"
        
    ]

if (detroitGC == true) {
    console.log(`My name is ${name} and I am a student at Grand Circus, Detroit, MI. I am currently ${age} and my birthday is on ${birthday}. `)
} else if (detroitGC == false) 
    console.log(`My name is ${name} and I am a student at Grand Circus, Grand Rapids, MI. I am currently ${age} and my birthday is ${birthday}`)


for(i = 0; i < lifeEvents.length; i++){
    console.log(lifeEvents[i]);
}

let counter = 0



while(true){
 let randomNumber =Math.floor(Math.random() * 10) +1; 
    if(randomNumber !== 5){
        counter++
        console.log(`${randomNumber} !== 5`)
    } else {
        counter ++
       console.log(`5 === 5 It took ${counter} iterations to generate the number 5.`)
        break
    }
}

    
