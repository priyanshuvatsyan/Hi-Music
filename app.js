
/***** MASTER PLAY */
const music = new Audio('audio/7.mp3');
//music.play();

const songs = [
    {
        id: 1,
        songName: `Marez-E-ishq <br>
        <div class="subtitle">arjit singh</div>`,
        poster: "thumbnails/1.jpeg",
    },
    {
        id: 2,
        songName: `Meharma<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnails/2.jpeg",
    },
    {
        id: 3,
        songName: `Wajah tum ho <br>
        <div class="subtitle">Armaan malik</div>`,
        poster: "thumbnails/3.jpeg",
    },
    {
        id: 4,
        songName: `Jan Nisar <br>
        <div class="subtitle">arjit singh</div>`,
        poster: "thumbnails/4.jpeg",
    },
    {
        id: 5,
        songName: `Aabaad Barbaad <br>
        <div class="subtitle">arjit singh</div>`,
        poster: "thumbnails/5.jpeg"
    },
    {
        id: 6,
        songName: `Aj sajeya <br>
        <div class="subtitle">Alaya F</div>`,
        poster: "thumbnails/6.jpeg"
    },
    {
        id: 7,
        songName: `Aakhari kadam tak <br>
        <div class="subtitle">Unknown</div>`,
        poster: "thumbnails/7.jpeg"
    },
    {
        id: 8,
        songName: `Baarishen <br>
        <div class="subtitle">Anuv Jain</div>`,
        poster: "thumbnails/8.jpeg"
    },
    {
        id: 9,
        songName: `Bekhayali <br>
        <div class="subtitle">arjit singh</div>`,
        poster: "thumbnails/9.jpeg"
    },
    {
        id: 10,
        songName: `Channa mereya <br>
        <div class="subtitle">arjit singh</div>`,
        poster: "thumbnails/10.jpeg"
    },
    {
        id: 11,
        songName: `Chitta <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnails/11.jpeg"
    },
    {
        id: 12,
        songName: `Gaal ni kadni <br>
        <div class="subtitle">parmish varma</div>`,
        poster: "thumbnails/12.jpeg"
    },
    {
        id: 13,
        songName: `Gut ch paranda <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnails/13.jpeg"
    },
    {
        id: 14,
        songName: `Hey Mama <br>
        <div class="subtitle">Nicki Minaj</div>`,
        poster: "thumbnails/14.jpeg"
    },
    {
        id: 15,
        songName: `Khariyat <br>
        <div class="subtitle">arjit singh</div>`,
        poster: "thumbnails/15.jpeg",
    },
    {
        id: 16,
        songName: `Lambiya Judaiyan <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnails/16.jpeg"
    },
    {
        id: 17,
        songName: `Gut ch paranda <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnails/13.jpeg"
    },
    {
        id: 18,
        songName: `Hey Mama <br>
        <div class="subtitle">Nicki Minaj</div>`,
        poster: "thumbnails/14.jpeg"
    },
    {
        id: 19,
        songName: `Khariyat <br>
        <div class="subtitle">arjit singh</div>`,
        poster: "thumbnails/15.jpeg"
    },
    {
        id: 20,
        songName: `Lambiya Judaiyan <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnails/16.jpeg"
    },
    {
        id: 21,
        songName: `Lambiya Judaiyan <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnails/16.jpeg",
    },

]


Array.from(document.getElementsByClassName('.songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

        /* Search results */
//search data start
document.addEventListener('DOMContentLoaded', function () {
    let search_results = document.getElementsByClassName('search_results')[0];

    songs.forEach(element => {
        const { id, songName, poster } = element;
        console.log(id);
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = "#" + id;
        card.innerHTML = `
            <img src="${poster}" alt="">
            <div class="content">
                ${songName}
            </div>
        `;
        search_results.appendChild(card);
    });

    let input = document.getElementsByTagName('input')[0];
    input.addEventListener('keyup', () => {
        let input_value = input.value.toUpperCase();
        let items = search_results.getElementsByTagName('a');
        for (let index = 0; index < items.length; index++) {
            let as = items[index].getElementsByClassName('content')[0];
            let text_value = as.textContent || as.innerHTML;

            if (text_value.toUpperCase().indexOf(input_value) > -1) {
                items[index].style.display = "flex";
            } else {
                items[index].style.display = "none";
            }
        }
        if (input.value == 0) {
            search_results.style.display = "none";
        }
        else{
            search_results.style.display = "";
        }
    });
});


//Search data ends

/*****  MASTER PLAY */

function play() {
    let playBtn = document.querySelector('.playBtn');
    console.log('Play function called');
    let wave = document.getElementById('wave');



    if (music.paused || music.currentTime <= 0) {
        console.log('Playing music');
        music.play();
        wave.classList.add('active');

        playBtn.classList.remove('bi-play-fill');
        playBtn.classList.add('bi-pause-fill');


    } else {
        console.log('Pausing music');
        music.pause();
        wave.classList.remove('active');
        playBtn.classList.add('bi-play-fill');
        playBtn.classList.remove('bi-pause-fill');
        wave.classList.remove('active');

    }
};


//Music Play
/* 
 let index = 0;
document.addEventListener('DOMContentLoaded', function () {
    // Use a class selector instead of an ID selector
    let playListPlayButtons = document.querySelectorAll('.playListPlay');

    playListPlayButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            // Your click event handling logic
            let buttonId = event.target.id;
            console.log(buttonId);
        });
    });
}); */



const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0';
        el.classList.remove('bi-play-circle-')
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0';
    })
}









/* Scroll buttons*/




function ScrollLeft_pop() {
    let pop_song_left = document.getElementById('pop_song_left');
    let pop_song_right = document.getElementById('pop_song_right');
    let pop_songs = document.getElementsByClassName('pop_songs')[0];


    console.log("left Click");
    pop_songs.scrollLeft -= 330;


}

function ScrollRight_pop() {
    let pop_song_left = document.getElementById('pop_song_left');
    let pop_song_right = document.getElementById('pop_song_right');
    let pop_songs = document.getElementsByClassName('pop_songs')[0];


    console.log("Right Click");
    pop_songs.scrollLeft += 330;


}

function ScrollRight_artist() {
    let pop_artist_left = document.getElementById('pop_artist_left');
    let pop_artist_right = document.getElementById('pop_artist_right');
    let pop_artists = document.getElementsByClassName('pop_artists')[0];
    pop_artists.scrollLeft += 330;
    console.log("Right Click");

}
function ScrollLeft_artist() {
    let pop_artist_left = document.getElementById('pop_artist_left');
    let pop_artist_right = document.getElementById('pop_artist_right');
    let pop_artists = document.getElementsByClassName('pop_artists')[0];
    pop_artists.scrollLeft -= 330;
    console.log("left Click");

}







/* Shuffle * */
/* document.addEventListener('DOMContentLoaded', function () {

    let shuffle = document.getElementsByClassName('shuffle')[0];
    shuffle.addEventListener('click', ()=> {
        console.log("Event");
        let a = shuffle.innerHTML;
        console.log("Current value of 'a':", a); 
        switch (a) {
            case "next":
                console.log("wing");
                shuffle.classList.add('bi-arrow-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                
                shuffle.innerHTML = 'repeat';
                break;

            case "repeat":
                console.log("wing");
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.add('bi-shuffle');
                shuffle.innerHTML = 'random';  // Fixed typo here
                break;

            case "random":
                console.log("wing");
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'next';
                break;
        }
    })
});
 */

document.addEventListener('DOMContentLoaded', function () {
    let shuffle = document.querySelector('.shuffle');

    if (shuffle) {
        shuffle.addEventListener('click', () => {
            console.log("Event");
            let a = shuffle.innerHTML;
            console.log("Current value of 'a':", a);

            switch (a.toLowerCase()) {
                case "next":
                    console.log("next");
                    shuffle.classList.add('bi-arrow-repeat');
                    shuffle.classList.remove('bi-music-note-beamed');
                    shuffle.classList.remove('bi-shuffle');
                    shuffle.innerHTML = 'repeat';
                    break;

                case "repeat":
                    console.log("repeat");
                    shuffle.classList.remove('bi-arrow-repeat');
                    shuffle.classList.remove('bi-music-note-beamed');
                    shuffle.classList.add('bi-shuffle');
                    shuffle.innerHTML = 'random';
                    break;

                case "random":
                    console.log("random");
                    shuffle.classList.remove('bi-arrow-repeat');
                    shuffle.classList.add('bi-music-note-beamed');
                    shuffle.classList.remove('bi-shuffle');
                    shuffle.innerHTML = 'next';
                    break;
            }
        });
    } else {
        console.error("Element with class 'shuffle' not found");
    }

});




//music play 
document.addEventListener('DOMContentLoaded', function () {
    let index = 0;
    let poster_master_play = document.getElementById('poster_master_play');
    let title = document.getElementById('title');
    let download_music = document.getElementById('download_music');
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
        e.addEventListener('click', (el) => {
            index = el.target.id;
            /*  console.log(index); */
            music.src = `audio/${index}.mp3`;
            poster_master_play.src = `thumbnails/${index}.jpeg`;
            music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');

            /**Download */
            download_music.href = `audio/${index}.mp3`;

            let songTitles = songs.filter((els) => {
                return els.id == index;
            });

            songTitles.forEach(elss => {
                let { songName } = elss;
                title.innerHTML = songName;
                download_music.setAttribute('download', songName)
            });

            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1";
            makeAllplays();
            el.target.classList.add('bi-pause-circle-fill');
            el.target.classList.remove('bi-play-circle-fill');
            wave.classList.add('active');
        });

    })

    let currentStart = document.getElementById('currentStart');
    let currentEnd = document.getElementById('currentEnd');

    music.addEventListener('timeupdate', () => {
        let music_crr = music.currentTime;
        let music_dur = music.duration;
        //console.log(music_dur);
        let min1 = Math.floor(music_dur / 60);
        let sec1 = Math.floor(music_dur % 60);
        /*   console.log(min1);
          console.log(sec1); */
        if (sec1 < 10) {
            sec1 = `0${sec1}`;
        }
        currentEnd.innerHTML = `${min1}:${sec1}`;

        let min2 = Math.floor(music_crr / 60);
        let sec2 = Math.floor(music_crr % 60);
        if (sec2 < 10) {
            sec2 = `0${sec2}`;
        }
        currentStart.innerHTML = `${min2}:${sec2}`;


        /*Seek bar */
        let seek = document.getElementById('seek');
        let bar2 = document.getElementById('bar2');
        let dot = document.getElementsByClassName('dot')[0];

        let progressbar = parseInt((music_crr / music_dur) * 100);
        seek.value = progressbar;
        //console.log(seek.value);
        let seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar}%`;
    });
    seek.addEventListener('change', () => {
        music.currentTime = seek.value * music.duration / 100;
    });



    /**     VOLUME BUTTONS */
    let vol_icon = document.getElementById('vol_icon');
    let vol = document.getElementById('vol');
    let vol_bar = document.getElementsByClassName('vol_bar')[0];
    let vol_dot = document.getElementById('vol_dot');

    vol.addEventListener('change', () => {
        if ((vol.value == 0)) {
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.add('bi-volume-off-fill');
        }
        if (vol.value > 0) {
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.add('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }
        if (vol.value > 50) {
            vol_icon.classList.add('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }

        let vol_a = vol.value;
        vol_bar.style.width = `${vol_a}%`;
        vol_dot.style.left = `${vol_a}%`;
        music.volume = vol_a / 100;
    })



    /** Next and prev buttons*/
    let back = document.getElementById('back');
    let next = document.getElementById('next');

    back.addEventListener('click', () => {
        index -= 1;
        if (index < 1) {
            index = Array.from(document.getElementsByClassName('songItem')).length;

        }
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `thumbnails/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active');
    })


    next.addEventListener('click', () => {
        index++;
        if (index > Array.from(document.getElementsByClassName('songItem')).length) {
            index = 1;
        }
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `thumbnails/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active');
    });





    // continue playing the next music
    const next_music = () => {
        if (index == songs.length) {//When song ends 
            index = 1;
        }
        else {
            index++;
        }
        console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `thumbnails/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');



        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName)
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active');

    }

    // repeat
    const repeat_music = () => {
        index;
        console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `thumbnails/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');



        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName)
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active');
    }

    //Shuffle
    const random_music = () => {
        if (index == songs.length) {//When song ends 
            index = 1;
        }
        else {
            index = Math.floor((Math.random() * songs.length) + 1);
        }
        console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `thumbnails/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');



        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName)
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active');
    }


    /* 
        music.addEventListener('ended', () => {
            //let shuffle = document.querySelector('.shuffle').innerHTML;
            console.log("triggerd");
           // let a  = shuffle.innerHTML;
           let b = document.querySelector('.shuffle').innerHTML;
    
            console.log("entered");
            console.log("Value of b:", b);
    
            switch (b) {
                
                case 'next':
                    console.log('entered next');
                    next_music();
                    break;
                case 'repeat':
                    console.log('entered repeat');
                    repeat_music();
                    break;
    
    
                case 'random':
                    console.log('entered  random');
                    random_music();
                    break;
    
    
            }
    
        }); */


   
    music.addEventListener('ended', () => {
    console.log("triggered");

    // Use the correct selector for the Bootstrap Icons element
    let b = document.querySelector('.shuffle').textContent.trim();

    console.log("entered");
    switch (b.toLowerCase()) {
        case 'next':
            console.log('entered Next');
            next_music();
            break;

        case 'repeat':
            console.log('entered repeat');
            repeat_music();
            break;

        case 'random':
            console.log('entered random');
            random_music();
            break;
       
        default:
            console.log('entered default');
            break;
    }
});



});















