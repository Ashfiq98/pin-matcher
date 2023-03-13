var temp;

var input = document.getElementById('input-pin');

function random() {
    var randomNumber = (Math.random() * 10000).toFixed(0);
    if (randomNumber >= 1000 && randomNumber <= 9999) {
        input.value = randomNumber;
        temp = randomNumber;
    }
}
//random NUmber
document.getElementById('pin-generate').addEventListener('click', random);

//calculator

let screen = document.getElementById('screen');
var buttons = document.getElementsByClassName('button');
let screenValue = '';
let cnt = 0;
for (item of buttons) {
    item.addEventListener('click', function(event) {


        var buttonText = event.target.innerText;
        // console.log('Button text is ', buttonText);
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '<') {
            screenValue = screen.value;
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
// submit button

document.getElementById('button-submit').addEventListener('click', function() {
    // var submit = document.getElementById('screen');
    // var submitValue = submit.value;
    var verifyRight = document.getElementById('right-pass');
    var verifyWrong = document.getElementById('wrong-pass');
    var buttonSubmit = document.getElementById('button-submit');
    var pinGenerate = document.getElementById('pin-generate');

    if (screen.value == temp) {

        verifyWrong.style.display = 'none';
        verifyRight.style.display = 'block';
        pinGenerate.disabled = true;
        pinGenerate.style.backgroundColor = 'red';
        buttonSubmit.disabled = true;
        buttonSubmit.style.backgroundColor = 'red';
        for (button of buttons) {
            button.disabled = true;
        }

    } else {

        var verifyWrong = document.getElementById('wrong-pass');
        verifyWrong.style.display = 'block';
        screenValue = "";
        screen.value = "";
        var attempt = document.getElementById('try-attempt').innerText;
        var attemptNo = parseInt(attempt);
        // console.log(attemptNo);
        if (attemptNo > 0) {
            attemptNo--;
            //      console.log(attemptNo);
            var tryAttempt = document.getElementById('try-attempt');
            tryAttempt.style.display = 'none';
            tryAttempt.innerText = attemptNo;

            document.getElementById('try-attempt').style.display = 'inline';

            if (attemptNo == 0) {

                buttonSubmit.disabled = true;
                pinGenerate.disabled = true;
                pinGenerate.style.backgroundColor = 'red';
                buttonSubmit.style.backgroundColor = 'red';
                for (button of buttons) {
                    button.disabled = true;
                }

            }

        }


    }
})