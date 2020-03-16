mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('header.mdc-top-app-bar'));

const grafUrl = "https://data.cityofchicago.org/resource/v6vf-nfxy.json?sr_short_code=GRAF&$limit=5";
const sfdUrl = "https://data.cityofchicago.org/resource/v6vf-nfxy.json?sr_short_code=SFD&$limit=5";
const csfUrl = "https://data.cityofchicago.org/resource/v6vf-nfxy.json?sr_short_code=CSF&$limit=5";

const dataView = document.querySelector('.data');

const clearList = () => {
    dataView.innerHTML = '';
}
const constructList = (elements) => {
    let ul = document.createElement('ul');
    ul.classList.add('mdc-list');
    ul.classList.add('mdc-list--two-line');
    ul.classList.add('mdc-list--avatar-list');
    ul.classList.add('mdc-list--non-interactive');
    for(let el of elements) {
        let li = document.createElement('li');
        li.classList.add('mdc-list-item');
        let icon = document.createElement('i');
        icon.classList.add('material-icons');
        icon.textContent = "linked_camera";
        let iconSpan = document.createElement('span');
        iconSpan.classList.add('mdc-list-item__graphic');
        let spanText = document.createElement('span');
        spanText.classList.add('mdc-list-item__text');
        let spanTextPri = document.createElement('span');
        spanTextPri.classList.add('mdc-list-item__primary-text');
        spanTextPri.textContent = el.owner_department;
        let spanTextSec = document.createElement('span');
        spanTextSec.classList.add('mdc-list-item__secondary-text');
        spanTextSec.textContent = el.street_address;
        li.appendChild(iconSpan);
        iconSpan.appendChild(icon);
        spanText.appendChild(spanTextPri);
        spanText.appendChild(spanTextSec);
        li.appendChild(spanText);
        ul.appendChild(li);
    }
    dataView.appendChild(ul);
}
document.querySelector('#graf').addEventListener('click', (ev) => {
    clearList();
    grabGrafData();
});
document.querySelector('#sfd').addEventListener('click', (ev) => {
    clearList();
    grabSfdData();
});
document.querySelector('#csf').addEventListener('click', (ev) => {
    clearList();
    grabCsfData();
});

const grabGrafData = () => {
    fetch(grafUrl).then((res) => {return res.json()})
        .then((data) =>{
            constructList(data);
        });
}

const grabSfdData = () => {
    fetch(sfdUrl).then((res) => {return res.json()})
        .then((data) =>{
            constructList(data);
        });
}

const grabCsfData = () => {
    fetch(csfUrl).then((res) => {return res.json()})
        .then((data) =>{
            constructList(data);
        });
}