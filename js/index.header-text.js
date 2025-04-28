const pageTitle = document.querySelector('.header__title');

const greetings = [
    'Hello',
    'Hola',        // Spanish
    'Bonjour',     // French
    'Hallo',       // German
    'Ciao',        // Italian
    'Olá',         // Portuguese
    'こんにちは',    // Japanese
    '你好',         // Chinese
    '안녕하세요',     // Korean
    'Вітаю!', // Ukrainian
];

const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
pageTitle.innerText = randomGreeting;
pageTitle.style.color = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
