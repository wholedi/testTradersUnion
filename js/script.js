const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
})

const tabButtons = document.querySelectorAll('.currency-info__tabs')

tabButtons.forEach(tabButton => {
    tabButton.addEventListener('click', () => {
        tabButtons.forEach(button => {
            button.classList.remove('currency-info__tabs--active')
        })
        tabButton.classList.add('currency-info__tabs--active')
    })
})

const tabsElement = document.querySelectorAll('.tabs__item')

document.querySelectorAll('.tabs__container').forEach(tabsContainer => {
    const tabsElement = tabsContainer.querySelectorAll('.tabs__item')

    tabsElement.forEach(tabButton => {
        tabButton.addEventListener('click', () => {
            tabsElement.forEach(button => {
                button.classList.remove('tabs__item--active')
            })
            tabButton.classList.add('tabs__item--active')
        })
    })
})

document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
    const mobileDropdownButtonElement = dropdown.querySelector('.mobile-dropdown__trigger');
    const mobileDropdownBodyElement = dropdown.querySelector('.mobile-dropdown__body');
    const mobileDropdownItemElements = dropdown.querySelectorAll('.mobile-dropdown__item');

    mobileDropdownButtonElement.addEventListener('click', function () {
        mobileDropdownBodyElement.classList.toggle('mobile-dropdown__body--active');
    });

    mobileDropdownItemElements.forEach(function (item) {
        item.addEventListener('click', function () {
            mobileDropdownButtonElement.textContent = this.textContent;
            mobileDropdownBodyElement.classList.remove('mobile-dropdown__body--active');
        });
    });
});

function updateCurrentTime() {
    const now = new Date();
    const formattedTime = formatTime(now);
    document.getElementById('current-time').textContent = formattedTime;
}

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `Real-time Data ${hours}:${minutes}:${seconds}`;
}

window.onload = function() {
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
};



