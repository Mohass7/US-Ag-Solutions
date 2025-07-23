const sliders = document.querySelectorAll(".right-side .slider");

sliders.forEach((slider) => {
    const parent = slider.closest(".right-side");
    const beforeImage = parent.querySelector(".before-1-image");
    const sliderLine = parent.querySelector(".slider-line");
    const sliderIcon = parent.querySelector(".slider-icon");

slider.addEventListener("input", (e) => {
    let sliderValue = e.target.value + "%";

    beforeImage.style.width = sliderValue;
    sliderLine.style.left = sliderValue;
    sliderIcon.style.left = sliderValue;
    });
});

//FAQ Accordian
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e)=>{
        const groupHeader = (e.target).closest('.faq-group-header');
        if(!groupHeader)return;
        
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        //Toggle visibility of body
        groupBody.classList.toggle('open');

        //Close other open FAQ bodies
        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if(otherGroup !== group){
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});

//Mobile Menu

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => 
    mobileMenu.classList.toggle('active')
);
});


//Contact Us Pop Up 
function openPopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePopup(event) {
    if (event && event.target !== event.currentTarget) return;
    
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon.`);
    
    // Reset form
    event.target.reset();
    closePopup();
}

// Close popup with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});