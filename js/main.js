function firstAlert(message) {
    alert(message);
}

const button = document.getElementById('do-it');

button.addEventListener('click', () => {
    console.log('CLICK');
    firstAlert("DONE");
})