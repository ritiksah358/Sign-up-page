document.addEventListener('DOMContentLoaded', () => {
    const resetBtn = document.querySelector('.reset-btn');
    const exitBtn = document.querySelector('.exit-btn');
    
    resetBtn.addEventListener('click', () => {
        document.querySelector('form').reset();
    });

    exitBtn.addEventListener('click', () => {
        window.close();
    });
});
