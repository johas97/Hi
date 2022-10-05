const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const navEmailTextButn = document.querySelector('.copy-eMail');
const navEmail = document.querySelector('footer-eMail');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

//Close nav-bar when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

//Copy E-mail to clipboard Måste ha en textinmatningsruta för att det ska gå, samt en knapp. KUl med animation också på det? 


      navEmailTextButn.addEventListener('click', () => {
        var copyEmail = document.getElementById('myEmail');
        copyEmail.select();
        copyEmail.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyEmail.value);
        alert("Copied the e-mail " + copyEmail.value);
    
    })
  
 
  


//Video som allt baseras på  https://www.youtube.com/watch?v=_xkSvufmjEs&t=5459s