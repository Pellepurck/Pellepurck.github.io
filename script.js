// ----Sticky-navbar----
var navbar = document.getElementById("navbar");
    var sidemenu = document.getElementById("sidemenu");

    window.onscroll = function(){
        if(window.pageYOffset >= sidemenu.offsetTop){
            navbar.classList.add("sticky");
        }
        else{
            navbar.classList.remove("sticky");
        }
    }
// ----Sticky-navbar----
// ----Tab-links----
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
// ----Tab-links----
// ----Dropdown-content----
function myFunction(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
    }
// ----Dropdown-content----
// ----Backvideo-naprapti----
let backVideo = document.getElementById("backVideo");
    let btnicon = document.getElementById("btnicon");

    btnicon.onclick = function(){
        backVideo.style.display = "block";

        if(backVideo.paused){
            backVideo.play();
            btnicon.src = "icons/pause.png";
        }
        else{
            backVideo.pause();
            btnicon.src = "icons/play.png";
        }
    }
// ----Sidemenu----
var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }
// ----Sidemenu----
// ----Formsubmit----
// const navnInput = document.getElementById('navn-input');
// const subjectInput = document.getElementById('subject-input');

// navnInput.addEventListener('input', () => {
//   subjectInput.value = `Nytt kontaktskjema fra ${navnInput.value}`;
// });
// ----Formsubmit----
// ----Formsubmit2----
// ----Formsubmit2----

// ----Testimonial----
// ----Testimonial----
// ----Åpningstider----
window.addEventListener('DOMContentLoaded', function() {
    let popup = document.getElementById("popup");
    
    function openPopup(){
      popup.classList.add("open-popup");
    }
    function closePopup(){
      popup.classList.remove("open-popup");
    }
  });
// ----Åpningstider----