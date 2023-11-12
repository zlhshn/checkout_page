const body = document.querySelector('body');

body.addEventListener('click', (e) => {
    const numberEl = document.querySelector('#number');

    if (e.target.id === 'plus') {
        numberEl.textContent = parseInt(numberEl.textContent) + 1;
    } else if (e.target.id === 'minus') {
        // Ensure the number is greater than 0 before decrementing
        numberEl.textContent = Number(numberEl.textContent) > 0
            ? Number(numberEl.textContent) - 1
            : 0;
    }
});