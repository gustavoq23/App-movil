function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }        
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  },2000);
})