let slideIndex = 0;
showSlides();

function showSlides() 
{
    let slides = document.getElementsByClassName("slideshowImage");

    // Remove active class from all slides
    for (let i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }

    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }

    // Show and animate current slide
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 5000); // Change image every 5 seconds
}