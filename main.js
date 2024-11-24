   const main=document.querySelector('.main');
    const nav=document.getElementsByName('nav');
    const sidemenubtn=document.querySelector('.sidemenubtn');
    const aside=document.querySelector('.sidemenu');
    const searchlabel=document.getElementsByName('search');
    const music_bar=document.querySelector('.music-bar');
    const progressbar=document.querySelector('.progressbar');
    const modelclosebtn=document.querySelector('.close');
    const modelsection=document.querySelector('.modal');
    const Songcards=document.querySelector('.song-section');
    const albumcards=document.querySelector('.album-section');
    const artistcards=document.querySelector('.card-section');
    const ff=document.querySelectorAll('.ff');
    const bf=document.querySelectorAll('.bf');
    let ob=[];
    let queue=[];
    var state=false;// false=close
    let btnimg=sidemenubtn.querySelector('img');
    let q=0;
    let albumIndexes=[];
    let md=false;
    let aViewMore=false;

    function viewmore(elementName){
        if( elementName === 'artist-see-more')
        { 
            let current=document.querySelector('.artist div');
            let OtherSection=document.querySelector('.album ');
            let OtherSection2=document.querySelector('.song ');
            
        if(aViewMore == true){
            console.log(elementName);
            OtherSection.style.display='block';
            OtherSection2.style.display='block';
            current.style.display='block';
            current.style.overflow='auto';
            artistcards.style.display='flex';
            artistcards.style.flexDirection='row';
            artistcards.style.flexWrap='no-wrap';
            artistcards.style.height='300px';
            artistcards.style.width='76%';
            let t=document.querySelector(`.artist button`);
            console.log(t,'t');
            t.textContent='See more';
            aViewMore=false;   
            console.log('closed')

        }
        else{
            console.log(elementName);
            bf.forEach(element => {
    element.style.display = 'none';
});
ff.forEach(element => {
    element.style.display = 'none';
});
    
            OtherSection.style.display='none';
            OtherSection2.style.display='none';
            current.style.width='100vw';
            current.style.height='max-content';
            current.style.overflow='auto';
            artistcards.style.display='flex';
            artistcards.style.flexWrap='wrap';
            artistcards.style.height='max-content';
            artistcards.style.width='75%';
            artistcards.style.padding='2px 2px';
            let t=document.querySelector(`.artist button`);
           
            console.log(t,'t');
            t.textContent='See less';
            console.log('opened')

            aViewMore=true;            
        }}        
    };



    function scrollforward(element) {
    let v = document.querySelector(`.${element}`);
    console.log(v);
    
    // Calculate if the end of the div has been reached
    const maxScrollLeft = v.scrollWidth - v.clientWidth;
    const currentScrollLeft = v.scrollLeft;
    console.log(maxScrollLeft)
    if (currentScrollLeft >= maxScrollLeft) {
        // End of the div reached, handle as needed
        console.log("Reached the end of the div");
        let t=document.querySelector('.ff img')
        t.src="assets/arrow-left.svg";
        // Optionally, you can disable scrolling or perform any other action here
        v.scrollBy({
        top: 0,
        left: - maxScrollLeft,  // Adjust this value to control scroll distance
        behavior: 'smooth' , // 'smooth' makes the scroll gradual
    });
        return;
    }
    console.log(currentScrollLeft)
    // Scroll forward if the end has not been reached
    v.scrollBy({
        top: 0,
        left: 250,  // Adjust this value to control scroll distance
        behavior: 'smooth'  // 'smooth' makes the scroll gradual
    });
}

function scrollbackwards(btn, element) {
    let v = document.querySelector(`.${element}`); // Select the scrollable div by its class name
    if (!v) {
        console.error('Scrollable element not found');
        return;
    }
    
    // Calculate the current scroll position and the maximum scroll position
    const maxScrollLeft = v.scrollWidth - v.clientWidth;
    const currentScrollLeft = v.scrollLeft;

    console.log('Moved backwards', currentScrollLeft, btn);
    
    if (currentScrollLeft <= 0) {
        // Reached the beginning of the scrollable div, disable the button
        console.log("Reached the start of the div");
        btn.disabled = true;
        btn.style.opacity = "0.7";
        return;
    }

    // Enable the forward button (in case it was disabled)
    btn.disabled = false;
    btn.style.opacity = "1";

    // Scroll backwards
    v.scrollBy({
        top: 0,
        left: -350,  // Adjust this value for the scroll distance
        behavior: 'smooth'  // Smooth scroll effect
    });
}







function registrationmodal(modaltype){
    if(modaltype == 'signup'){
        main.insertAdjacentHTML('afterbegin',`  <form class="modal text-[#fbfffe] h-fit p-6 w-[360px]  space-y-5  fixed z-20 md:left-[50%]  self-center rounded-lg  bg-[#11151c]">
            <button class="close  block  rounded-tr-xl absolute top-1 right-1 opacity-50 hover:opacity-100"><img src="./assets/imgs/x.svg" alt=""></button>
            <header class=' text-center text-[24px] cursor-default'>Sign up to start listening</header>
            <div class=' space-y-2 '>
                <h3 class='pl-2  '>Email:</h3>
                <input type="email" class='pl-1 ml-2 rounded-md h-[29px] w-[300px] text-[#11151c]' placeholder="example@email.com"></input> 
                <span class="text-[12px] hidden pl-3 flex ">This email is invalid. Make sure it's written like example@email.com</span>
            </div>
            <button class="close bg-[#3a506b]  rounded-full ml-2 w-[300px] h-[40px] bg-opacity-100 hover:bg-opacity-85  ">Next</button>
             <div class="space-y-1 inline-block pl-3  border-y-2 pb-5 border-[#3a506b] text-[15px] ">
                <span class=" relative bottom-[14px] left-[134px] inline bg-[#11151c] px-2">or</span>
                <button class=" border-opacity-50 border-4 rounded-full w-[300px] items-center  p-1 border-[#3a506b] hover:border-opacity-100 flex"><img src="./assets/Google.png" alt="" class="rounded-full mx-2 h-[25px]"><span class="ml-12">Sign up with Google</span></button>
                <button class=" border-opacity-50 border-4  rounded-full w-[300px] items-center p-1 border-[#3a506b] hover:border-opacity-100 flex"><img src="./assets/facebook.png" alt="" class="rounded-full  mx-2 h-[25px]"><span class="ml-12">Sign up with Facebook</span></button>
                <button class=" border-opacity-50 border-4 rounded-full w-[300px] items-center p-1 border-[#3a506b] hover:border-opacity-100 flex"><img src="./assets/aple.png" alt="" class="rounded-full  mx-2 h-[25px]"><span class="ml-12">Sign up with Apple</span></button>
             </div>
             <span class="text-center block">Already have an account? <button class="underline underline-offset-2">Log in here.</button></span>
        </form>`
                )
        console.log('jdjdjdnd');     
    }

};

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
                 imgsrc2:SongFileData[7],
                }
                let card=`<div onclick="songplay(this)" class="card group space-y-2 h-max w-[210px] hover:cursor-pointer text-start hover:bg-[#11151c] transition ease-in-out delay-200 p-4 m-0 rounded-xl hover:-translate-y-1 hover:shadow-xl">
                            <img src="${song.imgsrc}"  " class=" drop-shadow-xl w-full rounded-xl hover:drop-shadow-none"> 
                            <h3 class="songname float-start text-[16px]">${song.songName}</h3>
                            <button class="playSong p-2 bg-[#364156] float-end rounded-full opacity-0 group-hover:opacity-100  hover:bg-opacity-40 transistion ease-out delay-150"><img src="./assets/imgs/play.png" alt="" class="  rounded-full"></button>
                            
                            <span class="Album/Artist  float-left clear-left text-[14px]">${song.name}</span>
                           
                        </div>`
                Songcards.insertAdjacentHTML("afterbegin",card);
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
           sidemenubtn.style.position='fixed';
           sidemenubtn.style.left=aside.width;
           btnimg.src='./assets/imgs/x.svg';
           state=true;
           }
         else{
           console.log("sidemenu closed");
           btnimg.src='./assets/imgs/menu.svg';
           aside.style.display='none';
           sidemenubtn.style.left='0';
          
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
            albumcards.insertAdjacentHTML('afterbegin',`
            <div class="card  group space-y-1 w-[220px] h-max hover:cursor-pointer  text-start bg-[#364156] hover:bg-opacity-50  transition ease-in-out delay-150 p-4 rounded-md hover:-translate-y-1 hover:shadow-xl">
                        <img src="${ob[index].imgsrc}" alt="" class="drop-shadow-xl w-full rounded-lg hover:drop-shadow-none">
                        <h3 class="name inline float-left text-white text-[16px]">${ob[index].albumName}</h3>
                        <button class="playSong p-2 bg-[#11151c] float-end rounded-full opacity-0 group-hover:opacity-100  hover:bg-opacity-40 transistion ease-out delay-150"><img src="./assets/imgs/play.png" alt="" class="  rounded-full"></button>   
                        <span class="type inline float-left clear-left text-[14px]">${ob[index].name}</span>
                       
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
             if(ob[i].name === convertIntoArray[n] && ob[i].ArtistPic !== '\r'){
                artistcards.insertAdjacentHTML('afterbegin',` <div onclick="modalOpen(this)" class="card space-y-1 w-[210px] hover:cursor-pointer  hover:bg-[#2b2d42]    hover:bg-opacity-90   transition ease-in-out delay-100 p-4 rounded-md hover:shadow-2xl">
                        <img src="${ob[i].ArtistPic}" alt="" class="drop-shadow-xl w-full rounded-full hover:drop-shadow-none">
                        <h3 class="name ">${ob[i].name}</h3>
                        <span class="type  text-center">${ob[i].Type}</span>
                    </div>`)
                console.log('kd')
                break 

                }
            
            
         console.log('n=',n);
         

         };
        
         console.log('i',i);
    };
 


};




function modalOpen(element) {
    const modalImage = document.querySelector('.modalimage'); // Getting the class modal image
    const artistNmae = document.querySelector('.modalname'); // Getting the artist name
    const closebtn = document.querySelector('.close');
    const current = document.querySelector('.artist');
    const OtherSection = document.querySelector('.album');
    const OtherSection2 = document.querySelector('.song');
    const Artistsongs = document.querySelector('.artistsongs');
    const artistalbhums = document.querySelector('.modal .albums');
    const Otherartist = document.querySelector('.modal .artist');
    let u=document.querySelector('.modal');

    console.log(u);
    

    // Clear previous content
    Artistsongs.innerHTML = '';
    artistalbhums.innerHTML = '';
    Otherartist.innerHTML = '';

    // Hide current sections
    current.style.display = 'none';
    OtherSection.style.display = 'none';
    OtherSection2.style.display = 'none';
    bf.forEach(element => element.style.display = 'none');
    ff.forEach(element => element.style.display = 'none');

    // Set modal image and artist name
    artistNmae.textContent = element.querySelector('.name').textContent;
   
    var c='';

    // Populate artist songs
    for (let index = 0; index < ob.length; index++) {
        if (ob[index].name === artistNmae.textContent) {
            Artistsongs.insertAdjacentHTML('afterbegin', `
                <li onclick="songplay(this)" class="flex content-center cursor-pointer bg-[#11151c] p-2 contents-center h-fit hover:bg-opacity-75 transition ease-in-out delay-150">
                    <img src="${ob[index].imgsrc}" alt="" class="h-[40px] w-[40px]">
                    <h2 class="songname my-2 mx-4 hover:underline hover:underline-offset-4 text-[16px]">${ob[index].songName}</h2>
                    <button class="playSong p-2 bg-[#364156] absolute right-8 rounded-full opacity-75 group-hover:opacity-100 hover:bg-opacity-40 transition ease-out delay-150"><img src="./assets/imgs/play.png" alt="" class="rounded-full"></button>
                    <button class="absolute right-2 my-1">+</button>
                </li>`);
                c=ob[index].imgsrc2;
                console.log(c);
                if (c !== undefined){
                    c=ob[index].imgsrc2;
                    modalImage.src = c;
                    console.log(modalImage.src);
                    console.log(c)
              
                }
                else{
                    c='';
                    console.log('klop');
                }

            
        }
    }    
  
    modelsection.style.display = 'flex';
    modelsection.style.flexDirection = 'column';

    // Populate artist albums
    for (let d = 0; d < album.length; d++) {
        let indexOfsongData = album[d].songs;
        let index = indexOfsongData[0];
        if (artistNmae.textContent === ob[index].name) {
            artistalbhums.insertAdjacentHTML('beforeend', `
                <div class="card group space-y-1 w-[220px] h-max hover:cursor-pointer text-start bg-[#364156] hover:bg-opacity-50 transition ease-in-out delay-150 p-4 rounded-md hover:-translate-y-1 hover:shadow-xl">
                    <img src="${ob[index].imgsrc}" alt="" class="drop-shadow-xl w-screen h-[200px] rounded-lg hover:drop-shadow-none">
                    <h3 class="name inline float-left text-white texxt-[16px]">${ob[index].albumName}</h3>
                    <button class="playSong p-2 bg-[#11151c] float-end rounded-full opacity-0 group-hover:opacity-100 hover:bg-opacity-40 transition ease-out delay-150"><img src="./assets/imgs/play.png" alt="" class="rounded-full"></button>
                    <span class="type inline float-left clear-left text-[16px]">${ob[index].name}</span>
                </div>`);
        }
    }

    // Populate other artists (only related artists)
    let convertIntoArray = Array.from(names);
    for (let i = 0; i < 4; i++) {
        if (convertIntoArray[i] !== artistNmae.textContent) {
            let artistObj = ob.find(obj => obj.name === convertIntoArray[i]);
            if (artistObj && artistObj.ArtistPic !== '\r') {
                Otherartist.insertAdjacentHTML('afterbegin', `
                    <div onclick="modalOpen(this)" class="card space-y-1 w-[210px] hover:cursor-pointer hover:bg-[#2b2d42] hover:bg-opacity-50 transition ease-in-out delay-100 p-4 rounded-md hover:shadow-2xl">
                        <img src="${artistObj.ArtistPic}" alt="" class="drop-shadow-xl w-full rounded-full hover:drop-shadow-none">
                        <h3 class="name text-[16px]">${artistObj.name}</h3>
                        <span class="type text-center text-[16px]">${artistObj.Type}</span>
                    </div>`);
            }
        }
    }

    // Close button event listener
    closebtn.addEventListener('click', () => {
        modelsection.style.display = 'none';
        current.style.display = 'block';
        OtherSection.style.display = 'block';
        OtherSection2.style.display = 'block';
        bf.forEach(element => element.style.display = 'block');
        ff.forEach(element => element.style.display = 'block');
        Artistsongs.innerHTML = '';
        artistalbhums.innerHTML = '';
        Otherartist.innerHTML = '';
    });
}



function formatTime(time) {  // converts th time into mins and seconds .
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}


main.addEventListener('click',()=>{
    
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
        currentElement.style.background='#11151c';
        currentSong.src = ''; // Clear the current song's source to stop it completely

        // Reset the previous song's UI
        let c = ['bg-opacity-50'];
        let b = ['opacity-100'];
        if (currentElement) {
            currentElement.classList.remove(c);
            currentElement.style.background='';
            currentElement.style.opacity='1';
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
                element.style.background='#11151c';
                element.style.opacity='0.7';
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
        if (currentElement) {
            currentElement.classList.remove(c);
            currentElement.style.background='';
            currentElement.style.opacity='1';
            currentElement.querySelector('button').classList.remove(b);
            currentElement.querySelector('button img').src = './assets/imgs/play.png';
        }
    
   

    };
    function forwardedSong() {
        song.currentTime += 5;
        console.log('forwarded');
    };
    forward.addEventListener('click',forwardedSong);
    
    function BackedSong (){
        song.currentTime -= 5;
        console.log('backed');
    };
    backwards.addEventListener('click', BackedSong);

    next.addEventListener('click',() => {
        if (index > 0 && index < ob.length) {
            song.play(document.querySelector('.card:nth-child(' + (index + 1) + ')'));
        }
    });

    previous.addEventListener('click',() => {
        if (index > 0) {
            songplay(document.querySelector('.card:nth-child(' + (index - 1) +')'));
        }
    });
};
initializationOfOb();
window.onload = () => {
  
    state = false;
   
};

