/* Declare variables below to save the different sections (divs) of your story*/
let title=document.querySelector(".title");
let optionOne=document.querySelector(".option-one");
let optionTwo=document.querySelector(".option-two");
let storyOpening=document.querySelector(".story-opening");
let screen1=document.querySelector(".option-one-screen");
let screen2=document.querySelector(".option-two-screen");
let end1=document.querySelector(".option-one-end");
let end2=document.querySelector(".option-two-end");
let optionThree=document.querySelector(".option-one2");
let optionFour=document.querySelector(".option-two2");
let optionFive=document.querySelector(".option-one3");
let optionSix=document.querySelector(".option-two3");
let optionSeven=document.querySelector(".option-one4");
let optionEight=document.querySelector(".option-one5");
let endText1=document.querySelector(".endText1"); 
let endText2=document.querySelector(".endText2");
let endimage1=document.querySelector(".endimage1");   
let endimage2=document.querySelector(".endimage2");
                                  
                              



optionOne.onclick=function(){
    screen1.style.display="block";
    storyOpening.style.display="none";
    optionOne.style.display="none";
    optionTwo.style.display="none";
    title.style.display="none";
    optionThree.style.display="block";
    optionFour.style.display="block";
    
    
};
    
 
 optionTwo.onclick=function(){
     screen2.style.display="block";
     storyOpening.style.display="none"; 
     optionOne.style.display="none";
     optionTwo.style.display="none";
     title.style.display="none";
     optionFive.style.display="block";
     optionSix.style.display="block";
 };

optionThree.onclick=function(){
    end1.style.display="block";
    screen1.style.display="none";
    optionThree.style.display="none";
    optionFour.style.display="none";
    optionSeven.style.display="block";
};

optionFour.onclick=function(){
    storyOpening.style.display="block";
    screen1.style.display="none";
    optionThree.style.display="none";
    optionFour.style.display="none";
    title.style.display="block";
    optionTwo.style.display="block";
    optionOne.style.display="block";
    
};
optionFive.onclick=function(){
    end2.style.display="block";
    screen2.style.display="none";
    optionFive.style.display="none";
    optionSix.style.display="none";
    optionEight.style.display="block";
    
};

optionSix.onclick=function(){
    storyOpening.style.display="block";
    screen1.style.display="none";
    optionFive.style.display="none";
    optionSix.style.display="none";
    title.style.display="block";
    optionTwo.style.display="block";
    optionOne.style.display="block";
};

optionSeven.onclick=function(){
    endText1.innerHTML="Thanks for playing!";
    endimage1.src="https://c8.alamy.com/comp/GW7W4E/party-confetti-celebration-background-vector-illustration-festival-GW7W4E.jpg";
};
 
optionEight.onclick=function(){
    endText2.innerHTML="Thanks for playing";
    endimage2.src="https://c8.alamy.com/comp/GW7W4E/party-confetti-celebration-background-vector-illustration-festival-GW7W4E.jpg";
    
};

     

          








