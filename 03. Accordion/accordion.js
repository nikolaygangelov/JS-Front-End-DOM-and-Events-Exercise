function toggle() {
    let button = document.querySelector('.button');
    const textToDisplay = document.querySelector('#extra');
    
    if (button.textContent === 'More') {
        button.textContent = 'Less';
        textToDisplay.style.display = 'block';
    } else if(button.textContent === 'Less') {
        button.textContent = 'More'
        textToDisplay.style.display = 'none';
    }
}