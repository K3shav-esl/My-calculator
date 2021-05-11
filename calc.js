//NOtes for the claculator
// made html
// create teh basic formation and looks of the calculator
//html part
//make a div container
//use input for clac screen
// use table tags for buttons
//now on to styling

//css part
//make the css to the center
// make all the buttons uniform
// make the unformity with screen of the buttons.
//use the right font
//make the borders

//javascript part
//grab the screen
//grab the buttons
//for items of buttons and addevent
//take the target innertext
//add logic for different functon buttons/




//actual code starts here
function printf(input) {
        console.log(input)
};
//checking the file
printf("file is working");

//grabbing the screen

let screen = document.getElementById('screen');
let screenValue = "";
//grabbing all the buttons

buttons = document.getElementsByClassName('btn');

for (item of buttons) {
        item.addEventListener('click', (e) => {
                buttonText = e.target.innerText;
                if (buttonText == 'X') {
                        buttonText = '*';
                        screenValue += buttonText;
                        screen.value = screenValue;
                }
                else if (buttonText == 'C') {
                        screenValue = '';
                        screen.value = screenValue;
                }
                else if (buttonText == '=') {
                        buttonText = '*';
                        screen.value = eval(screenValue);
                }
                else {
                        screenValue += buttonText;
                        screen.value = screenValue;
                }
        })
}
 

//above written code works
printf("code ends here")

//it was a failed code snippet
// Array.from(buttons).forEach(element => {
//         let buttonValue = element.innerHTML;

//         screen.value += buttonValue;
// });
