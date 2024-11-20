document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    document.getElementById("success-message").classList.remove("hidden");
  
    document.getElementById("contact-form").reset();
  });
  