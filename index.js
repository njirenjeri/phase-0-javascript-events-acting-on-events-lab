// Your code here
var dodger = document.getElementById('dodger');

function moveDodgerLeft(){
    // checks dodger's position and uses .replace to remove the 'px' part leaving the integer
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10); //takes the string returned by leftNumbers and convers to an integer to base 10

    if(left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowLeft'){
        moveDodgerLeft()
    }
})


function moveDodgerRight(){
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
    if(left < 360){
        dodger.style.left = `${left + 1}px`;//
    }
}

document.addEventListener('keydown', function (e){
    if(e.key === 'ArrowRight'){
        moveDodgerRight();
    }
})