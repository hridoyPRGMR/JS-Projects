function addNewWe() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('my-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', "Enter your Work Experience");

    let weOb = document.getElementById('we');
    let weAddButton = document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButton);

}

function addNewAq() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('my-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', "Enter your Work Experience");

    let aqOb = document.getElementById('aq');
    let aqAddButton = document.getElementById('aqAddButton');

    aqOb.insertBefore(newNode, aqAddButton);
}

function generateCv() {

    const name = document.getElementById('nameField').value;
    const contact = document.getElementById('contactField').value;
    const address = document.getElementById('addressField').value;

    let nameT = document.getElementById('nameT');
    nameT.innerText = name;
    let contactT = document.getElementById('contactT');
    contactT.innerText = contact;
    let addressT = document.getElementById('addressT');
    addressT.innerText = address;

    document.getElementById('nameT2').innerHTML = name;

    document.getElementById('linkdlnT').setAttribute('href', document.getElementById('linkedinField').value);
    document.getElementById('githubT').setAttribute('href', document.getElementById('githubField').value);

    document.getElementById('objective').innerText = document.getElementById('objectiveField').value;

    // Work Experience
    let weFields = document.getElementsByClassName('weField');
    let weList = '';

    for (let element of weFields) {
        weList += `<li>${element.value}</li>`;
    }

    document.getElementById('weT').innerHTML = weList;

    // Academic Qualifications
    let aqFields =document.getElementsByClassName('aqField'); 
    let aqList = '';

    for (let element of aqFields) {
        aqList += `<li>${element.value}</li>`;
    }

    document.getElementById('aqT').innerHTML = aqList;


    //set profile image
    let file=document.getElementById('imgField').files[0];

    let reader=new FileReader();
    reader.readAsDataURL(file);
    
    reader.onloadend=function (){
        document.getElementById('imgT').src=reader.result;
    };

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}

function printCv(){
    window.print();
}