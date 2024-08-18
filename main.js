 const main=document.querySelector('.main');
    const nav=document.getElementsByName('nav');
    const sidemenubtn=document.querySelector('.sidemenubtn');
    const aside=document.querySelector('aside');
    const searchlabel=document.getElementsByName('search');
    const music_bar=document.querySelector('.music-bar');
    const progressbar=document.querySelector('.progressbar');
    const modelclosebtn=document.querySelector('.close');
    const modelsection=document.querySelector('.modal');
    const SongSection=document.querySelector('.song-section');
    const albumSection=document.querySelector('.album-section');
    const artistsection=document.querySelector('.card-section');
    let ob=[];
    let queue=[];
    var state=false;// false=close
    let btnimg=sidemenubtn.querySelector('img');
    let q=0;
    let albumIndexes=[];
    let md=false;
   

    function viewmore(element){};



    function initializationOfOb() {
    fetch('./assets/data/songdata.txt')
    .then(response => response.text())
    .then(data => {
      console.log(data); // Do something with the data
      const lines=data.split('\n');
      console.log(lines)
     for(let i=0;i<lines.length;i++){
        const currentline=lines[i];
        if (currentline == '\r' || currentline == ''){
            console.log('empty line');
        }else{
            console.log(`line ${i} is =  ${currentline} `);
            var SongFileData=currentline.split(',',currentline.length);
           
                var song={
                 name:SongFileData[0],
                 imgsrc:SongFileData[1],
                 albumName:SongFileData[2],
                 songName:SongFileData[3],
                 Songsrc:SongFileData[4],
                 ArtistPic:SongFileData[5],
                 Type:SongFileData[6],
                }
                let songcard=`<div onclick="songplay(this)" class="card group space-y-2 h-max w-[250px] hover:cursor-pointer text-start bg-[#022b3a] hover:bg-opacity-50 transition ease-in-out delay-150 p-4 rounded-xl hover:-translate-y-1 hover:shadow-xl">
                            <img src="${song.imgsrc}"  " class=" drop-shadow-xl w-full rounded-xl hover:drop-shadow-none"> 
                            <h3 class="songname float-start ">${song.songName}</h3>
                            <button class="playSong p-2 bg-[#1f7a8c] float-end rounded-full opacity-0 group-hover:opacity-100  hover:bg-opacity-40 transistion ease-out delay-150"><img src="./assets/imgs/play.png" alt="" class="  rounded-full"></button>
                            
                            <span class="Album/Artist text-[#e1e5f2] float-left clear-left">${song.name}</span>
                           
                        </div>`
                SongSection.insertAdjacentHTML("afterbegin",songcard);
                ob.push(song);
                albumIndexes.push(`${song.albumName},${q}`)//pushing album name and its songs
                q++;
                console.log(song);

        }    
     }

     console.log('album =',album);
     console.log('album sorted =',albumIndexes.length);
     console.log(ob);
     SettingUpAlbums();
    })
    .catch(err => console.error(err));
}

sidemenubtn.addEventListener('click',()=>{
    setTimeout(() => {    
        if(state == false){
           aside.style.display='flex';
           console.log('sidemenu opened');
           sidemenubtn.style.left='200px';
           sidemenubtn.style.zIndex='20';
           btnimg.src='./assets/imgs/x.svg';
           state=true;
           }
         else{
           console.log("sidemenu closed");
           btnimg.src='./assets/imgs/menu.svg';
           aside.style.display='none';
           sidemenubtn.style.left='0px';
           state=false;
           }  
    }, 200);
    });

let album=[];// will store the album name + name of its song 
let c=0;// keeps track of previous index

function SettingUpAlbums(){

    // first inserting data into the album array which will contain the object song which has 1,album name 2,names of song

    let x=[];//will temporary store the same name of the same/repeating albums
    let valueA;
    let song;
    for(let i=0;i < albumIndexes.length;i++){
        valueA=albumIndexes[i].substring(',',albumIndexes[i].indexOf(','));
        console.log('i',i);
        console.log('valuea',valueA)
        c=i;
        for(let g=i+1;g<albumIndexes.length+1;g++){
            console.log(' g =',g);
            if(g < albumIndexes.length){
                let valueB=albumIndexes[g].substring(0,albumIndexes[g].indexOf(','));
            console.log('value b =',valueB);
            if(valueA == valueB){
                x.push(albumIndexes[c].substring(albumIndexes[c].indexOf(',')+1,albumIndexes[c].length));
                c++;
                console.log(x);
                console.log('c = ',c)
                console.log('matched');
            }
       
           else{
            x.push(albumIndexes[c].substring(albumIndexes[c].indexOf(',')+1,albumIndexes[c].length));
            song={
            name:valueA,
            songs:x
             };
             x=[];
          
           console.log('not matched');
           console.log(x,song);
          
           console.log('c =',c);
           i=g-1;
         console.log(song);
         album.push(song);
         break;
           
           }
      


            }
            else{
            x.push(albumIndexes[c].substring(albumIndexes[c].indexOf(',')+1,albumIndexes[c].length));
            song={
            name:valueA,
            songs:x
             };
             x=[];
          
           console.log('not matched');
           console.log(x,song);
          
           console.log('c =',c);
           i=g-1;
         console.log(song);
         album.push(song);
         break;
            
        }
                      
        }
        
      
    };
    console.log('album name = ',album,album[2].songs);
    //creating albums element in DOM
    for(let d=0; d < album.length ;d++){
        console.log('njnjjnj  jnj ')
        let indexOfsongData=album[d].songs;
        let index=indexOfsongData[0];
        console.log(`index now ${index}`);
        console.log(indexOfsongData.length)
        if(indexOfsongData.length <= 1){
            console.log('not an album because only one song');
            
        }
        else{
            albumSection.insertAdjacentHTML('afterbegin',`
            <div class="card  group space-y-1 w-[250px] h-max hover:cursor-pointer  text-start bg-[#1f7a8c] hover:bg-opacity-50  transition ease-in-out delay-150 p-4 rounded-md hover:-translate-y-1 hover:shadow-xl">
                        <img src="${ob[index].imgsrc}" alt="" class="drop-shadow-xl w-full rounded-lg hover:drop-shadow-none">
                        <h3 class="name ">${ob[index].albumName}</h3>
                        <span class="type  ">${ob[index].name}</span>
                        <button class="playSong p-3 mt-2 bg-[#022b3a] float-end rounded-full opacity-0 group-hover:opacity-100  hover:bg-[#bfdbf7] hover:bg-opacity-40  transistion ease-out delay-150"><img src="./assets/imgs/play.png" alt="" class="  rounded-full"></button>
                </div>`)

        }
       
        

        console.log(indexOfsongData);
     
    };
    SettingUPArtistSection();
};
let names=new Set([])
function SettingUPArtistSection(){
    
    for(let i=0;i<album.length;i++){
        let indexOfsongData=album[i].songs;
        let index=indexOfsongData[0];
        names.add(ob[index].name);
    }



    let convertIntoArray=Array.from(names);
    console.log(names);
    console.log(convertIntoArray);
    for(let i=0;i < ob.length;i++){
          for(let n=0;n<ob.length;n++){
             if(ob[i].name === convertIntoArray[n] && ob[i].ArtistPic !== ''){
                artistsection.insertAdjacentHTML('afterbegin',` <div onclick="modalOpen(this)" class="card space-y-1 w-[250px] hover:cursor-pointer  hover:bg-[#2b2d42]    hover:bg-opacity-50   transition ease-in-out delay-150 p-4 rounded-md hover:shadow-2xl">
                        <img src="${ob[i].ArtistPic}" alt="" class="drop-shadow-xl w-full rounded-full hover:drop-shadow-none">
                        <h3 class="name ">${ob[i].name}</h3>
                        <span class="type  text-center">${ob[i].Type}</span>
                    </div>`)
                console.log('kd')
                break 

                }
           else{
            console.log('not displayed')
           }
            
            
         console.log('n=',n);
         

         };
        
         console.log('i',i);
    };
 


};




function modalOpen(element){
    const modalImage=document.querySelector('.modalimage');//getting the class modal image
    const artistNmae=document.querySelector('.modalname');//getting thec
    const closebtn=document.querySelector('.close');

    artistNmae.textContent=element.querySelector('.name').textContent;
    modalImage.src=element.querySelector('img').src;
    console.log(modalImage.src);
    console.log(artistNmae);
    modelsection.style.display='flex';

            
    console.log()   
    setTimeout(() => {
        md=true;
    }, 500);
 
          
       
 
    closebtn.addEventListener('click',()=>{
        modelsection.style.display='none';
        md=false;
    })  
   
   
};



function formatTime(time) {  // converts th time into mins and seconds .
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}


main.addEventListener('click',()=>{
     if(md == true){
        modelsection.style.display='none';
        md=false;
        }
    if (state == true){
        console.log("sidemenu closed");
        btnimg.src='./assets/imgs/menu.svg';
        aside.style.display='none';
        sidemenubtn.style.left='0px';
        state=false;
    }    
} )
        
  


function initialise_Music_Bar(song,element){
    let start_time=music_bar.querySelector('.start-time');// getting the class 'start-time'  which will also display the current time
    let total_time=music_bar.querySelector('.total-time');// getting the class 'end-time' in the music-bar html element(div) it will display the total audio duration
    let songtitle=music_bar.querySelector('h6');
    console.log(start_time); 

    
    total_time.textContent=formatTime(song.duration);// constant value
    songtitle.textContent=`Now Playing : ${element.querySelector('.songname').textContent}`;
    
    song.addEventListener('timeupdate',function updateBar(){  // dynamic values which have to change 
            let current_time=song.currentTime;
            start_time.textContent=formatTime(song.currentTime);
            progressbar.value=(current_time/song.duration)*100;
            console.log(progressbar.value);
           
       } );

     progressbar.addEventListener('input', () => {
         let seekTime = (progressbar.value / 100) * song.duration;
         song.currentTime = seekTime;
         start_time.textContent = formatTime(seekTime);
         console.log('Progress bar value:', progressbar.value);
         } );
    
     console.log(start_time,total_time);


}
let currentSong = null; // Variable to keep track of the current song
let currentElement = null; // Variable to keep track of the current song element

function songplay(element) {
    var nameOfsong = element.querySelector('.songname').textContent;
    console.log(nameOfsong);

    // If a song is already playing, pause it and reset the UI
    if (currentSong) {
        currentSong.pause();
        currentSong.currentTime = 0;
        currentSong.src = ''; // Clear the current song's source to stop it completely

        // Reset the previous song's UI
        let c = ['bg-opacity-50'];
        let b = ['opacity-100'];
        if (currentElement) {
            currentElement.classList.remove(c);
            currentElement.querySelector('button').classList.remove(b);
            currentElement.querySelector('button img').src = './assets/imgs/play.png';
        }
    }

    // Find and play the new song
    for (let i = 0; i < ob.length; i++) {
        if (ob[i].songName == nameOfsong) {
            currentSong = new Audio(ob[i].Songsrc); // Create a new Audio object for the song
            console.log(currentSong.src);
            music_bar.style.display = 'flex'; // Display the music bar

            currentSongIndex = i;
            currentElement = element; // Store the current song element

            currentSong.addEventListener('loadedmetadata', () => {
                console.log(`song now playing ${currentSong.src}`);
                currentSong.play(); // Play the song
                initialise_Music_Bar(currentSong, element); // Initialize the music bar
                controls(currentSong, element, currentSongIndex);

                // Update the UI to reflect the playing state
                let c = ['bg-opacity-50'];
                let b = ['opacity-100'];
                element.classList.add(c);
                element.querySelector('button').classList.add(b);
                element.querySelector('button img').src = './assets/imgs/pause.png';
                element.focus
            });

            break;
        }
    }
}

function controls(song, element, index) {
    let playPausebtn = document.querySelector('.play');
    let forward = document.querySelector('.forward');
    let next = document.querySelector('.next');
    let previous = document.querySelector('.previous');
    let backwards = document.querySelector('.backward');
    const close_player=document.querySelector('.close-player');
    playPausebtn.querySelector('img').src = 'assets/imgs/pause.png';


    function togglePlayPause() {
        if (song.paused) {
            song.play();
            playPausebtn.querySelector('img').src = 'assets/imgs/pause.png';
            element.querySelector('button img').src='assets/imgs/pause.png';

        } else {
            song.pause();
            playPausebtn.querySelector('img').src = 'assets/imgs/play.png';
            element.querySelector('button img').src='assets/imgs/play.png';
        }
    }

    // Add keydown event listener to the document
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            event.preventDefault(); // Prevent default spacebar behavior (like scrolling)
            togglePlayPause();
        }
        if(event.code === 'ArrowRight'){
            event.preventDefault();
            forwardedSong();
        }
        if(event.code === 'ArrowLeft'){
            event.preventDefault();
            BackedSong();
        }
    });
     

    // Add click event listener to play/pause button
    playPausebtn.addEventListener('click', togglePlayPause);


    close_player.onclick=()=>{
        music_bar.style.display='none';
        currentSong.pause();
        currentSong.currentTime = 0;
        currentSong.src = '';
        let c = ['bg-opacity-50'];
        let b = ['opacity-100'];   
        currentElement.classList.remove(c);
        currentElement.querySelector('button').classList.remove(b);
        currentElement.querySelector('button img').src = './assets/imgs/play.png';
    
   

    };
    function forwardedSong() {
        song.currentTime += 5;
        console.log('forwarded');
    };
    forward.onclick =forwardedSong();
    
    function BackedSong (){
        song.currentTime -= 5;
        console.log('backed');
    };
    backwards.onclick = BackedSong()

    next.onclick = () => {
        if (index > 0 && index < ob.length) {
            song.play(document.querySelector('.card:nth-child(' + (index + 1) + ')'));
        }
    };

    previous.onclick = () => {
        if (index > 0) {
            songplay(document.querySelector('.card:nth-child(' + (index - 1) +')'));
        }
    };
};

window.onload = () => {
    initializationOfOb();
    aside.style.display = 'none';
    state = false;
   
};


