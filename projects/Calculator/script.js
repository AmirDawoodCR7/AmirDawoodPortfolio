let string = "";
const screen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('.key');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if(value === "=") {
            try {
                string = eval(string);
                screen.value = string;
            } catch {
                screen.value = "Error";
                string = "";
            }
        } else if(value === "C") {
            string = "";
            screen.value = "";
        } else {
            string += value;
            screen.value = string;
        }
    });
});