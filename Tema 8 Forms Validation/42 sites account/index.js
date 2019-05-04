
function createInput (text, text2) {
    const para = document.createElement('p');
    para.textContent = text;
    f.appendChild(para);

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.required = true;
    f.appendChild(newInput);

    const para2 = document.createElement('p');
    para2.textContent = text2;
    f.appendChild(para2);

    return para + newInput + para2;
}

function createEmail (text, text2) {
    const para = document.createElement('p');
    para.textContent = text;
    f.appendChild(para);

    const newInput = document.createElement('input');
    newInput.type = 'email';
    newInput.required = true;
    f.appendChild(newInput);

    const para2 = document.createElement('p');
    para2.textContent = text2;
    f.appendChild(para2);

    return para + newInput + para2;
}

function createNickname (text, text2) {
    const para = document.createElement('p');
    para.textContent = text;
    f.appendChild(para);

    const newInput = document.createElement('input');
    newInput.type = 'text';
    f.appendChild(newInput);

    return para + newInput;
}

function createPhoneNr (text, text2) {
    const para = document.createElement('p');
    para.textContent = text;
    f.appendChild(para);

    const newInput = document.createElement('input');
    newInput.type = 'number';
    f.appendChild(newInput);

    const para2 = document.createElement('p');
    para2.textContent = text2;
    f.appendChild(para2);

    return para + newInput + para2;
}

function createRadioInput (text, radioValue) {
    const radioInput = document.createElement('input');
    radioInput.setAttribute('type', 'radio');
    radioInput.value = radioValue;
    f.appendChild(radioInput);

    const radioPara = document.createElement('p');
    radioPara.textContent = text;
    f.appendChild(radioPara);

    return radioInput + radioPara;
}

function createSubmit (text, id) {
    const submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('id', id);
    submitInput.value = text;
    f.appendChild(submitInput);
}

function appendChildren (f, children) {
    children.forEach(function (child) {
        f.appendChild(child);
    })
}


const f = document.getElementById('formSample');
f.method = 'POST';
f.action = '';

const myInputs = [
    createInput('USERNAME','(Must be at least 4 characters, letters and numbers only.)'),
    createEmail('EMAIL ADDRESS:','We send you registration email to this address. (Double-check your email address before continuing.)'),
    createInput('FIRST NAME', '(Must be input.)'),
    createInput('LAST NAME', '(Must be input.)'),
    createNickname('NICKNAME'),
    createPhoneNr('Phone','(Must be at least 10 characters, numbers only.)'),
    createRadioInput('GIMME A SITE!','Create Site'),
    createRadioInput('JUST A USERNAME, PLEASE.', 'Create Username'),
    createSubmit('NEXT','next')
]

