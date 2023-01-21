
// FORM  TOGGLE
let formContainer =  document.querySelector('.form-wrapper');
let contactBtn = document.getElementByI('side-contact-form-tab');
let closeBtn = document.getElementById('close-form-button');

closeBtn.addEventListener('click', () => {
   formContainer.classList.toggle('.active');
   alert("1st event listener ran");
});

contactBtn.addEventListener('click', () => {
   formContainer.classList.toggle('.active');
   alert("2nd event listener ran");
});



// CONTACT FORM SUBMIT BUTTON RIPPLE EFFECT
const form_submit_btn = document.getElementById("form-submit-btn");
  
    // Listen for click event
    form_submit_btn.onclick = function (e) {
  
        // Create span element
        let ripple = document.createElement("span");
  
        // Add ripple class to span
        ripple.classList.add("ripple-effect");
  
        // Add span to the button 
        this.appendChild(ripple);
  
        // Get position of X
        let x = e.clientX - e.target.offsetLeft;
  
        // Get position of Y 
        let y = e.clientY - e.target.offsetTop;
  
        // Position the span element
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
  
        // Remove span after 0.3s
        setTimeout(() => {
            ripple.remove();
        }, 500);
  
    };