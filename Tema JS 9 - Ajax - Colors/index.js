const requestUrl =
  'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';

const request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
  const colors = request.response;
  populateColors(colors);
};

const populateColors = jsonObj => {
  const createList = document.createElement('ul');

  for (let key in jsonObj) {
    const createItems = document.createElement('li');
    const createPara = document.createElement('p');

    createPara.textContent = key;
    createPara.style.backgroundColor = key;
    createItems.appendChild(createPara);
    createList.appendChild(createItems);
  }
  document.body.appendChild(createList);
};
