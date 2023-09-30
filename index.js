let nome = "Mateus";
let xp = 13000;

if(xp < 1000) {
    console.log("O herói " + nome + " está com XP em " + xp + " e sua patente é Ferro!");
} else if((xp > 1000) && (xp <= 2000)) {
    console.log("O herói " + nome + " está com XP em " + xp + " e sua patente é Bronze!");
} else if((xp > 2000) && (xp <= 5999)) {
    console.log("O herói " + nome + " está com XP em " + xp + " e sua patente é Prata!");
} else if((xp > 6000) && (xp <= 7000)) {
    console.log("O herói " + nome + " está com XP em " + xp + " e sua patente é Ouro!");
} else if((xp > 7000) && (xp <= 8000)) {
    console.log("O herói " + nome + " está com XP em " + xp + " e sua patente é Platina!");
} else if((xp > 8000) && (xp <= 9000)) {
    console.log("O herói " + nome + " está com XP em " + xp + " e sua patente é Ascendente!");
} else if((xp > 9000) && (xp <= 10000)) {
    console.log("O herói " + nome + " está com XP em " + xp + " e sua patente é Imortal!");
} else if(xp >= 10001) {
    console.log("O herói " + nome + " está com XP em " + xp + " e sua patente é Radiante!");
};