class musicalJourney{
    
    classicalSong: NodeListOf<HTMLElement>;
    innerHTML: any;
    //element:HTMLElement
    
    

    constructor(){
        this.classicalSong = document.querySelectorAll('.song')! as NodeListOf<HTMLElement>
        //this.element = document.getElementsByClassName('.fifth song')! as HTMLElement

        console.log(this.classicalSong)

        

        this.classicalSong.forEach(press=>{
                press.addEventListener('click', this.audio)
                press.addEventListener('dblclick',this.pauseAudio)
                
                // () => {
                //    // alert('Music started ')
                // })
        })
    }


    audio(){
        

        const audio1:any = new Audio;
        audio1.src='./sounds/bubbles.mp3'

        const audio2:any = new Audio;
        audio2.src='./sounds/clay.mp3'

        const audio3:any = new Audio;
        audio3.src='./sounds/confetti.mp3'

        const audio4:any = new Audio;
        audio4.src='./sounds/flash-1.mp3'

        const audio5:any = new Audio;
        audio5.src='./sounds/glimmer.mp3'

        const audio6:any = new Audio;
        audio6.src='./sounds/moon.mp3'

        const audio7:any = new Audio;
        audio7.src='./sounds/ufo.mp3'

        const audio8:any = new Audio;
        audio8.src='./sounds/zig-zag.mp3'

        const audio9:any = new Audio;
        audio9.src='./sounds/flash-1.mp3'
            
        // music1.play();

        //console.log(this);
       // console.log(this.innerHTML);


        var audioID:any= this.innerHTML;

       // console.log(audioID);

        switch(audioID){
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
                alert('bad input')

        }
    }

    pauseAudio(){
        //alert('audio paused');

        const audio11:any = new Audio;
        audio11.src='./sounds/bubbles.mp3'

        const audio22:any = new Audio;
        audio22.src='./sounds/clay.mp3'

        const audio33:any = new Audio;
        audio33.src='./sounds/confetti.mp3'

        const audio44:any = new Audio;
        audio44.src='./sounds/flash-1.mp3'

        const audio55:any = new Audio;
        audio55.src='./sounds/glimmer.mp3'

        const audio66:any = new Audio;
        audio66.src='./sounds/moon.mp3'

        const audio77:any = new Audio;
        audio77.src='./sounds/ufo.mp3'

        const audio88:any = new Audio;
        audio88.src='./sounds/zig-zag.mp3'

        const audio99:any = new Audio;
        audio99.src='./sounds/flash-1.mp3'


        var audiop:any= this.innerHTML;

        switch(audiop){
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
                alert('bad input')

    }
    }
    
}

const classicalMusic = new musicalJourney;