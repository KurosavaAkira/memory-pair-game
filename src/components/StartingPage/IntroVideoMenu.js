import './IntroVideoMenu.sass';

const introVideoMenuHTML = () => {
    return `<div id="intro-video-menu">
                <button class="intro-video-menu-box" value="sound">Sound</button>
                <button class="intro-video-menu-box" value="screen">Full Screen</button>
                <button class="intro-video-menu-box" value="hide">Hide</button>
            </div>`
}

const introVideoMenuSkipHTML = () => {
    return `<div id="intro-video-menu-skip">
                Press ESC to skip
            </div>`
}

const addClickEvent = () => {
    const buttons = document.querySelectorAll('.intro-video-menu-box');
    buttons.forEach( button => {
        button.addEventListener('click', () => { applyButton(button.value) });
    });
}

const applyButton = (button) => {
    return buttonsFunc(button);
}

const buttonsFunc = (button) => {
    switch (button) {
        case 'sound': return buttonSound();
        case 'screen': return buttonScreen();
        case 'hide': return buttonHide();
    }
} 

const buttonSound = () => {
    const button_sound = document.getElementsByClassName('intro-video-menu-box')[0];
    button_sound.classList.toggle('intro-video-menu-box-active');
    const full_screen_video = document.getElementById('full-screen-video');
    if(full_screen_video.muted) full_screen_video.muted = false;
    else full_screen_video.muted = true;
}

const buttonScreen = () => {
    const button_sound = document.getElementsByClassName('intro-video-menu-box')[1];
    button_sound.classList.toggle('intro-video-menu-box-active');
    if(!(document.webkitCurrentFullScreenElement==null)) document.webkitCancelFullScreen();
    else document.documentElement.webkitRequestFullScreen();
}

const buttonHide = () => {
    const intro_video_menu = document.getElementById('intro-video-menu');
    intro_video_menu.classList.add('intro-video-menu-hide-button');
    intro_video_menu.addEventListener('animationend', () => { intro_video_menu.remove() });
}

const render = () => {
    const container = document.getElementById('container');
    return container.insertAdjacentHTML('beforeend', introVideoMenuHTML() + introVideoMenuSkipHTML());
}

const RenderIntroVideoMenu = () => {
    render();
    addClickEvent();
}

export default RenderIntroVideoMenu;