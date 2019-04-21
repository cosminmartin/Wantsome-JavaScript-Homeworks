const clickEvent = document.getElementById('observations');

const createTextArea = () => {
    let textArea = document.createElement('textarea');
    // textArea.maxLength = '160';
    textArea.cols = 35;
    textArea.rows = 5;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.setAttribute('id', 'obs');
}

clickEvent.addEventListener('click', createTextArea, {once: true});


const validateText = document.getElementById('verText');

const checkChar = () => {
    let getObs = document.getElementById('obs');
    if(getObs.textLength > 160) {
        // return textarea.style.backgroundColor = "red";
    }
}

validateText.addEventListener ('click', checkChar);

