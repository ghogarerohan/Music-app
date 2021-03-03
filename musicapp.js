"use strict";
class musicalJourney {
    constructor() {
        this.classicalSong = document.querySelectorAll('.song');
        console.log(this.classicalSong);
        this.classicalSong.forEach(press => {
            press.addEventListener('click', this.audio);
            press.addEventListener('dblclick', this.pauseAudio);
        });
    }
    audio() {
        const audio1 = new Audio;
        audio1.src = './sounds/bubbles.mp3';
        const audio2 = new Audio;
        audio2.src = './sounds/clay.mp3';
        const audio3 = new Audio;
        audio3.src = './sounds/confetti.mp3';
        const audio4 = new Audio;
        audio4.src = './sounds/flash-1.mp3';
        const audio5 = new Audio;
        audio5.src = './sounds/glimmer.mp3';
        const audio6 = new Audio;
        audio6.src = './sounds/moon.mp3';
        const audio7 = new Audio;
        audio7.src = './sounds/ufo.mp3';
        const audio8 = new Audio;
        audio8.src = './sounds/zig-zag.mp3';
        const audio9 = new Audio;
        audio9.src = './sounds/flash-1.mp3';
        var audioID = this.innerHTML;
        switch (audioID) {
            case 'first':
                audio1.play();
                break;
            case 'second':
                audio2.play();
                break;
            case 'third':
                audio3.play();
                break;
            case 'fourth':
                audio4.play();
                break;
            case 'fifth':
                audio5.play();
                break;
            case 'sixth':
                audio6.play();
                break;
            case 'seventh':
                audio7.play();
                break;
            case 'eighth':
                audio8.play();
                break;
            case 'ninth':
                audio9.play();
                break;
            default:
                alert('bad input');
        }
    }
    pauseAudio() {
        const audio11 = new Audio;
        audio11.src = './sounds/bubbles.mp3';
        const audio22 = new Audio;
        audio22.src = './sounds/clay.mp3';
        const audio33 = new Audio;
        audio33.src = './sounds/confetti.mp3';
        const audio44 = new Audio;
        audio44.src = './sounds/flash-1.mp3';
        const audio55 = new Audio;
        audio55.src = './sounds/glimmer.mp3';
        const audio66 = new Audio;
        audio66.src = './sounds/moon.mp3';
        const audio77 = new Audio;
        audio77.src = './sounds/ufo.mp3';
        const audio88 = new Audio;
        audio88.src = './sounds/zig-zag.mp3';
        const audio99 = new Audio;
        audio99.src = './sounds/flash-1.mp3';
        var audiop = this.innerHTML;
        switch (audiop) {
            case 'first':
                audio11.pause();
                break;
            case 'second':
                audio22.pause();
                break;
            case 'third':
                audio33.pause();
                break;
            case 'fourth':
                audio44.pause();
                break;
            case 'fifth':
                audio55.pause();
                break;
            case 'sixth':
                audio66.pause();
                break;
            case 'seventh':
                audio77.pause();
                break;
            case 'eighth':
                audio88.pause();
                break;
            case 'ninth':
                audio99.pause();
                break;
            default:
                alert('bad input');
        }
    }
}
const classicalMusic = new musicalJourney;
//# sourceMappingURL=musicapp.js.map