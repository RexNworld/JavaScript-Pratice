'use strict'
//variables
const btnModel = document.querySelectorAll('.model-button');
const openModel = document.querySelector('.model-window');
const closeModel = document.querySelector('.window-button');
const buttonId = document.querySelectorAll('.button-no');
const overlay = document.querySelector('.bg-image');

//When model window opened
/*both works same and fine
for (let i = 0; i < btnModel.length; i++) {
    btnModel[i].addEventListener('click', () => {
        openModel.classList.remove('hidden');
        buttonId.forEach(e => {
            e.textContent = ' ' + btnModel[i].id;
        });
    });
}*/
btnModel.forEach(eBtn => {
    eBtn.addEventListener('click', () => {
        openModel.classList.remove('hidden');
        buttonId.forEach(e => {
            e.textContent = ' ' + eBtn.id;
        });
    })
});

//window close function
const closeWindow = () => {
    openModel.classList.add('hidden');
}
//cross button
closeModel.addEventListener('click', closeWindow);
//close when click ouside of the window
overlay.addEventListener('click', closeWindow);
//when Escape button press close window
const keyBordPress = (e) => e.key === 'Escape' && !openModel.classList.contains('hidden') ? closeWindow() : 0;
document.addEventListener('keyup', keyBordPress);

