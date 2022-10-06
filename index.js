const button = document.querySelector(".button");
const btnChilds = document.querySelectorAll('.playPause');
const video = document.querySelector('.vid-container')
button.addEventListener('click', ()=>{
    btnChilds.forEach(elem =>{
        if(!elem.classList.contains("active")){
            elem.classList.add('active');
            video.pause();
        }
        else{
            elem.classList.remove('active');
            video.play();
        }
    })
})