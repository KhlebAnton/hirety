
// modal
var modal = document.getElementById("modal");

function openModal() {
    modal.classList.remove('hidden')
}
function closeModal() {
    modal.classList.add('hidden')
}

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal()
    }
}
// mask phone
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue = '+7 ';
        if (value.length > 1) {
            formattedValue += '(' + value.substring(1, 4);
        }
        if (value.length > 4) {
            formattedValue += ')' + value.substring(4, 7);
        }
        if (value.length > 7) {
            formattedValue += '-' + value.substring(7, 9);
        }
        if (value.length > 9) {
            formattedValue += '-' + value.substring(9, 11);
        }
    }

    e.target.value = formattedValue;
});

phoneInput.addEventListener('keydown', function (e) {
    if (e.target.value.replace(/\D/g, '').length >= 11 && e.key !== 'Backspace') {
        e.preventDefault();
    }
});

// form imitation
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Форма отправлена! (имитация)');
    closeModal()
});

// swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 24,
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
    breakpoints: {
        1150: {
            slidesPerView: 3,
        },
    },

});



// menu mobil

const mobilMenu = document.querySelector('.menu__mobile');
const menuBtn = document.getElementById('menuBtn');
const menuIcon = document.getElementById('menuIcon');

function toggleMobilMenu(event) {
    event.stopPropagation(); // Останавливаем всплытие события

    if (mobilMenu.classList.contains('hidden')) {
        // Если меню скрыто, открываем его
        mobilMenu.classList.remove('hidden');
        menuIcon.innerHTML = `
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#2B2B2B"/>
        `;
    } else {
        // Если меню открыто, закрываем его
        mobilMenu.classList.add('hidden');
        menuIcon.innerHTML = `
            <path d="M4 18C3.71667 18 3.47917 17.9042 3.2875 17.7125C3.09583 17.5208 3 17.2833 3 17C3 16.7167 3.09583 16.4792 3.2875 16.2875C3.47917 16.0958 3.71667 16 4 16H20C20.2833 16 20.5208 16.0958 20.7125 16.2875C20.9042 16.4792 21 16.7167 21 17C21 17.2833 20.9042 17.5208 20.7125 17.7125C20.5208 17.9042 20.2833 18 20 18H4ZM4 13C3.71667 13 3.47917 12.9042 3.2875 12.7125C3.09583 12.5208 3 12.2833 3 12C3 11.7167 3.09583 11.4792 3.2875 11.2875C3.47917 11.0958 3.71667 11 4 11H20C20.2833 11 20.5208 11.0958 20.7125 11.2875C20.9042 11.4792 21 11.7167 21 12C21 12.2833 20.9042 12.5208 20.7125 12.7125C20.5208 12.9042 20.2833 13 20 13H4ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z" fill="#2B2B2B"/>
        `;
    }
}

// Открываем/закрываем меню при клике на кнопку
menuBtn.addEventListener('click', toggleMobilMenu);

// Закрываем меню при клике вне его
window.addEventListener('click', function (event) {
    if (!mobilMenu.contains(event.target) && event.target !== menuBtn && !menuBtn.contains(event.target)) {
        mobilMenu.classList.add('hidden');
        menuIcon.innerHTML = `
            <path d="M4 18C3.71667 18 3.47917 17.9042 3.2875 17.7125C3.09583 17.5208 3 17.2833 3 17C3 16.7167 3.09583 16.4792 3.2875 16.2875C3.47917 16.0958 3.71667 16 4 16H20C20.2833 16 20.5208 16.0958 20.7125 16.2875C20.9042 16.4792 21 16.7167 21 17C21 17.2833 20.9042 17.5208 20.7125 17.7125C20.5208 17.9042 20.2833 18 20 18H4ZM4 13C3.71667 13 3.47917 12.9042 3.2875 12.7125C3.09583 12.5208 3 12.2833 3 12C3 11.7167 3.09583 11.4792 3.2875 11.2875C3.47917 11.0958 3.71667 11 4 11H20C20.2833 11 20.5208 11.0958 20.7125 11.2875C20.9042 11.4792 21 11.7167 21 12C21 12.2833 20.9042 12.5208 20.7125 12.7125C20.5208 12.9042 20.2833 13 20 13H4ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z" fill="#2B2B2B"/>
        `;
    }
});




