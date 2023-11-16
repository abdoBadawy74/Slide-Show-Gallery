let currentSlide = 0;
      const slides = document.querySelectorAll(".slide");
      const totalSlides = slides.length;

      function showSlide(index) {
        if (index < 0) {
          currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
          currentSlide = 0;
        } else {
          currentSlide = index;
        }

        const newTransformValue = -currentSlide * 100 + "%";

        document.getElementById("slider").style.transform =
          "translateX(" + newTransformValue + ")";
      }

      function nextSlide() {
        showSlide(currentSlide + 1);
      }

      function prevSlide() {
        showSlide(currentSlide - 1);
      }

      // Create navigation links
      const navContainer = document.getElementById("slider-nav");
      
      for (let i = 0; i < totalSlides; i++) {
      
        const navLink = document.createElement("a");
      
        navLink.classList.add("nav-link");
      
        navLink.textContent = "page " + (i + 1);
      
        navLink.addEventListener("click", () => showSlide(i));
      
        navContainer.appendChild(navLink);
      }

      // Add event listeners for arrow buttons
      document.addEventListener("DOMContentLoaded", () => {
      
        document
          .getElementById("slider-container")
          .insertAdjacentHTML(
            "beforeend",
            '<button class="left" onclick="prevSlide()">❮</button><button class="right" onclick="nextSlide()">❯</button>'
          );
      });