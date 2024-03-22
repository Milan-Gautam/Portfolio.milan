document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();
      document.getElementById("popup").style.display = "flex";
      setTimeout(function() {
        document.getElementById("popup").style.display = "none";
      }, 2000); // Popup disappears after 2 seconds
      document.getElementById("contactForm").reset();
    });