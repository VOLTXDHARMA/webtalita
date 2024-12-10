
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-form');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainScreen = document.getElementById('main-screen');
    const finalScreen = document.getElementById('final-screen');
    const greeting = document.getElementById('greeting');
    const userPhoto = document.getElementById('user-photo');
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    const thanksMessage = document.getElementById('thanks-message');

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const photo = document.getElementById('photo').files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            userPhoto.src = e.target.result;
        };
        reader.readAsDataURL(photo);

        greeting.textContent = `Halo, ${name}!`;
        welcomeScreen.classList.add('hidden');
        setTimeout(() => {
            mainScreen.classList.remove('hidden');
        }, 500);
    });

    // Make the "No" button move
    noButton.addEventListener('mouseover', () => {
        noButton.style.position = 'absolute';
        noButton.style.top = `${Math.random() * 80 + 10}%`;
        noButton.style.left = `${Math.random() * 80 + 10}%`;
    });

    // Handle "Yes" button click
    yesButton.addEventListener('click', () => {
        mainScreen.classList.add('hidden');
        setTimeout(() => {
            finalScreen.classList.remove('hidden');
        }, 500);
    });
});
