var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

var randomImage = " ./Dicee+Challenge+-+Starting+Files/images/dice"+randomNumber1+".png"
console.log(randomImage)

var randomImage2 = " ./Dicee+Challenge+-+Starting+Files/images/dice"+randomNumber2+".png"
console.log(randomImage2)


document.querySelector(".img1").setAttribute("src",randomImage);
document.querySelector(".img2").setAttribute("src",randomImage2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = (" &#128681 Player 1 Wins!")
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = ("Player 2 Wins! &#128681")
} else{
    document.querySelector("h1").innerHTML = (" Draw ! ")
}