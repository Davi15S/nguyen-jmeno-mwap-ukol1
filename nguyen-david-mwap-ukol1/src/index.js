const ar = ['Lodash', 'React', 'Next', 'Strapy', 'Axios', 'Typescript']
const rev = ar.reverse();

for (let step = 0; step < 6; step++) {
    console.log(ar[step]);
}

for (let step = 0; step < 6; step++) {
    console.log(rev[step]);
}

const car1 = {type:"Fiat", model:"500", color:"white"};
const car2 = {type:"Skoda", model:"Fabia", color:"red"};
const car3 = {type:"Audi", model:"R6", color:"black"};

const rn = 0;

rn = Math.floor(Math.random() * 556);

console.log('Náhodné číslo je:' + rn)