// Dropdown menu 

$(function() { // Dropdown toggle
  $('.dropdown-toggle').click(function() { $(this).next('.dropdown').slideToggle();
  });
  
  $(document).click(function(e) 
  { 
  var target = e.target; 
  if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) 
  //{ $('.dropdown').hide(); }
    { $('.dropdown').slideUp(); }
  });
  });

// Mobile menu display
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});

// Reviews slider
let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');

    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

// Booking Form function
document.addEventListener("DOMContentLoaded", function() {
  const bookButton = document.getElementById("book-table-btn");
  const reservationForm = document.getElementById("reservation-form");
  const bookingConfirmation = document.getElementById("booking-confirmation");

  bookButton.addEventListener("click", () => {
    // Display the booking confirmation message
    bookingConfirmation.style.display = "block";
    
    // Show an alert to the user
    alert("Table Booked");

    // Hide the booking confirmation message after a few seconds
    setTimeout(() => {
      bookingConfirmation.style.display = "none";
    }, 3000);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  var modal = document.getElementById("booking-table");
  // Get all buttons that open the modal
  var buttons = document.querySelectorAll(".book-table");
  // Get the <span> element that closes the modal
  var span = document.querySelector(".close");
  // Check if modal exists
  if (modal) {
    // When the user clicks any button with class "book-table", open the modal
    buttons.forEach(button => {
      button.onclick = function() {
        modal.style.display = "block";
      };
    });
    // When the user clicks on <span> (x), close the modal
    if (span) {
      span.onclick = function() {
        modal.style.display = "none";
      };
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
});


// Image fade animation

$(document).ready(function() {
  $('.grid-img').hover(
    function() {
      const $this = $(this);
      const originalSrc = $this.attr('src');
      const hoverSrc = $this.data('hover-src');

      $this.fadeOut(2000, function() {
        $this.attr('src', hoverSrc);
        $this.fadeIn(2000);
      });
    },
    function() {
      const $this = $(this);
      const originalSrc = $this.data('original-src');

      $this.fadeOut(2000, function() {
        $this.attr('src', originalSrc);
        $this.fadeIn(2000);
      });
    }
  );
});

// Hide and Show functionality

$(document).ready(function(){
  $(".content-grid-p-hidden-1").hide();
  $(".content-grid-p-hidden-2").hide();

  $("#show").click(function(){
    $(".content-grid-p-hidden-1").stop(true, true).slideDown("slow");
  });
  $("#hide").click(function(){
    $(".content-grid-p-hidden-1").stop(true, true).slideUp("slow");
  });

  $("#show-more").click(function(){
    $(".content-grid-p-hidden-2").stop(true, true).slideDown("slow");
  });
  $("#hide-more").click(function(){
    $(".content-grid-p-hidden-2").stop(true, true).slideUp("slow");
  });
});


// Save for later

const saveButtons = document.querySelectorAll('.save-btn');
// Retrieve saved images from local storage
const savedImages = JSON.parse(localStorage.getItem('savedImages')) || []; 

function updateSavedImagesCount() {
  // element with this id
  const savedImagesCount = document.getElementById('savedImagesCount'); 
  if (savedImagesCount) {
    savedImagesCount.textContent = savedImages.length;
  } else {
    console.error('Element with id "savedImagesCount" not found.');
  }
}

// Call this initially to update the count on page load
updateSavedImagesCount();

saveButtons.forEach(button => {
  button.addEventListener('click', () => {
    // image is the previous sibling
    const imageSrc = button.previousElementSibling ? button.previousElementSibling.src : null; 
    console.log('Image source:', imageSrc);

    if (!imageSrc) {
      console.error('No previous sibling image found.');
      return;
    }

    if (!savedImages.includes(imageSrc)) {
      savedImages.push(imageSrc);
      localStorage.setItem('savedImages', JSON.stringify(savedImages));
      updateSavedImagesCount();
      console.log('Saved images:', savedImages);
      alert(`Image saved! You have ${savedImages.length} items saved.`);
    } else {
      alert('Image already saved.');
    }
  });
});

// Update saved images count initially
updateSavedImagesCount();



// Comments Functionality
document.getElementById("btn-post").addEventListener("click", function () {
  // Get the comment and user's name
  const newComment = document.getElementById("new-comment").value;
  const userName = document.getElementById("user-name").value;

  // Create a new paragraph element for the comment
  const commentContainer = document.getElementById("comment-container");
  const commentElement = document.createElement("p");
  commentElement.innerText = `${userName}: ${newComment}`;

  // Append the comment to the comment container
  commentContainer.appendChild(commentElement);

  // Clear the textarea and name field after posting the comment
  document.getElementById("new-comment").value = "";
  document.getElementById("user-name").value = "";
});

// Like Functionality


