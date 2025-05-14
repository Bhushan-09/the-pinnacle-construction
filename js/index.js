
// Smooth Scroll for anchor links (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Dynamic Project Filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.project-item').forEach(item => {
        const category = item.getAttribute('data-category');
        item.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
      });
  
      // Button active state
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  



// popup form
document.addEventListener('DOMContentLoaded', function() {
  const visitForm = document.getElementById('visitForm');
  if (visitForm) {
    visitForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      
      // Better validation
      if (!name) {
        alert('Please enter your name');
        return;
      }
      
      if (!phone) {
        alert('Please enter your phone number');
        return;
      }
      
      if (!email) {
        alert('Please enter your email');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Phone validation - basic check for numbers only
      const phoneRegex = /^\d{10,15}$/;
      if (!phoneRegex.test(phone.replace(/[- ]/g, ''))) {
        alert('Please enter a valid phone number');
        return;
      }
      
      // If we get here, form is valid
      alert('Thank you! Your site visit request has been submitted.');
      this.reset();
      
      // Close the modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('siteVisitModal'));
      if (modal) {
        modal.hide();
      }
    });
  }
});
  


//counting
  const counters = document.querySelectorAll('.counter');
    let triggered = false;

    function startCounters() {
      if (triggered) return;
      triggered = true;

      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = target / 100;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    }

    window.addEventListener('scroll', () => {
      const section = document.getElementById('counters');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY + window.innerHeight >= sectionTop + sectionHeight / 3) {
        startCounters();
      }
    });




 /* Main Content Section */
       // Initialize the carousel with auto-sliding
       document.addEventListener('DOMContentLoaded', function() {
        var myCarousel = new bootstrap.Carousel(document.getElementById('propertyCarousel'), {
            interval: 3000,  // Changes slide every 3 seconds
            wrap: true,      // Continuous loop
            pause: 'hover'   // Pauses when mouse hovers over carousel
        });
        
        // Responsive adjustments
        function checkScreenSize() {
            // Get the screen width
            const screenWidth = window.innerWidth;
            
            // Adjust elements based on screen size
            if (screenWidth <= 576) {
                // Mobile adjustments
                document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(control => {
                    control.style.width = '35px';
                    control.style.height = '35px';
                });
            } else {
                // Reset for larger screens
                document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(control => {
                    control.style.width = '40px';
                    control.style.height = '40px';
                });
            }
        }
        
        // Run on page load
        checkScreenSize();
        
        // Run whenever window is resized
        window.addEventListener('resize', checkScreenSize);
    });


      //our project
              // Initialize AOS animation
              document.addEventListener('DOMContentLoaded', function() {
                AOS.init({
                    duration: 800,
                    easing: 'ease-in-out',
                    once: true,
                    mirror: false
                });
                
                // Additional hover effects for projects
                const projectCards = document.querySelectorAll('.project-card');
                
                projectCards.forEach(card => {
                    card.addEventListener('mouseenter', function() {
                        // Add advanced hover effects with JS if needed
                    });
                    
                    card.addEventListener('mouseleave', function() {
                        // Reset effects on mouse leave if needed
                    });
                });
            });


//features
document.addEventListener("DOMContentLoaded", () => {
  // Animation delay for feature boxes
  const elements = document.querySelectorAll(".animate__animated");
  elements.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.1}s`;
  });

  // Scroll functionality
  const scrollDown = document.querySelector('.scroll-down');
  const scrollUp = document.querySelector('.scroll-up');
  
  scrollDown.addEventListener('click', () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });
  
  scrollUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Show/hide scroll up button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollUp.classList.add('visible');
      scrollDown.style.opacity = '0';
    } else {
      scrollUp.classList.remove('visible');
      scrollDown.style.opacity = '1';
    }
  });

  // Scroll-triggered animations for feature boxes
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__fadeInUp');
        entry.target.style.opacity = 1;
      } else {
        entry.target.classList.remove('animate__fadeInUp');
        entry.target.style.opacity = 0.3;
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.feature-box').forEach(box => {
    observer.observe(box);
    box.style.transition = 'opacity 0.5s ease';
  });
});


//our services
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
      rect.bottom >= 0
    );
  }

  // Function to handle scroll animations
  function handleScrollAnimations() {
    // Animate header
    const header = document.querySelector('.services-header');
    if (isInViewport(header) && !header.classList.contains('animate')) {
      header.classList.add('animate');
    }
    
    // Animate service cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
      if (isInViewport(card) && !card.classList.contains('animate')) {
        const delay = parseFloat(card.getAttribute('data-delay') || 0);
        setTimeout(() => {
          card.classList.add('animate');
        }, delay * 1000);
      }
    });
  }

  // Add event listeners
  document.addEventListener('DOMContentLoaded', function() {
    // Initial check for animations
    setTimeout(handleScrollAnimations, 300);
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimations);
  });


  //video section
        // Function to play video in its container
        function playVideo(containerId) {
          // Get the container
          const container = document.getElementById(containerId);
          
          // Get the video element
          const videoId = containerId.replace('video-container-', 'video-');
          const video = document.getElementById(videoId);
          
          // Stop all other videos first
          stopAllVideos(containerId);
          
          // Add playing class to container
          container.classList.add('is-playing');
          
          // Play the video
          video.play().catch(err => {
              console.log('Video playback failed:', err);
          });
      }
      
      // Function to stop video
      function stopVideo(containerId) {
          // Get the container
          const container = document.getElementById(containerId);
          
          // Get the video element
          const videoId = containerId.replace('video-container-', 'video-');
          const video = document.getElementById(videoId);
          
          // Pause the video
          video.pause();
          video.currentTime = 0;
          
          // Remove playing class
          container.classList.remove('is-playing');
      }
      
      // Stop all videos except the current one
      function stopAllVideos(exceptContainerId) {
          const containers = document.querySelectorAll('.video-media-container');
          containers.forEach(container => {
              if (container.id !== exceptContainerId) {
                  const videoElement = container.querySelector('video');
                  if (videoElement) videoElement.pause();
                  container.classList.remove('is-playing');
              }
          });
      }
      
      // Close videos when pressing Escape
      document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') {
              const playingContainers = document.querySelectorAll('.video-media-container.is-playing');
              playingContainers.forEach(container => {
                  stopVideo(container.id);
              });
          }
      });


      //client review
          // Initialize AOS animation library
    document.addEventListener('DOMContentLoaded', function() {
      AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true
      });
      
      // Add smooth transition effects for testimonial cards
      const testimonialCards = document.querySelectorAll('.testimonial-card');
      testimonialCards.forEach(card => {
          card.addEventListener('mouseenter', function() {
              this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
              this.style.transform = 'translateY(-10px)';
              this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.12)';
          });
          
          card.addEventListener('mouseleave', function() {
              this.style.transform = 'translateY(0)';
              this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
          });
      });
      
      // Add counter animation for numbers (if needed)
      function animateValue(obj, start, end, duration) {
          let startTimestamp = null;
          const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              obj.innerHTML = Math.floor(progress * (end - start) + start);
              if (progress < 1) {
                  window.requestAnimationFrame(step);
              }
          };
          window.requestAnimationFrame(step);
      }
      
      // Initialize Bootstrap carousel with auto-scroll
      var testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
          interval: 4000,  // Auto-scroll every 4 seconds
          wrap: true,      // Continuous loop
          pause: 'hover',  // Pause on hover
          touch: true      // Enable swipe on touch devices
      });
      
      // Add swipe functionality for mobile
      const carousel = document.getElementById('testimonialCarousel');
      let touchStartX = 0;
      let touchEndX = 0;
      
      carousel.addEventListener('touchstart', e => {
          touchStartX = e.changedTouches[0].screenX;
      });
      
      carousel.addEventListener('touchend', e => {
          touchEndX = e.changedTouches[0].screenX;
          handleSwipe();
      });
      
      function handleSwipe() {
          if (touchEndX < touchStartX - 50) {
              // Swipe left, go to next slide
              testimonialCarousel.next();
          }
          if (touchEndX > touchStartX + 50) {
              // Swipe right, go to previous slide
              testimonialCarousel.prev();
          }
      }
  });


  //footer section
         document.addEventListener("DOMContentLoaded", function () {
            // Footer animation
            const footerWidgets = document.querySelectorAll('.footer-widget');
            
            function animateFooterWidgets() {
                footerWidgets.forEach((widget, index) => {
                    const delay = widget.getAttribute('data-delay') || 100 * index;
                    const animation = widget.getAttribute('data-animation') || 'fadeInUp';
                    
                    setTimeout(() => {
                        widget.classList.add('animated', animation);
                    }, delay);
                });
            }
            
            // Back to top button functionality
            const backToTopButton = document.querySelector('.back-to-top');
            
            function toggleBackToTopButton() {
                if (window.scrollY > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            }
            
            backToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Handle scroll events
            window.addEventListener('scroll', toggleBackToTopButton);
            
            // Animation on scroll
            const animateElements = document.querySelectorAll('.animate-in');
            
            function checkIfInView() {
                animateElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight - 100) {
                        element.classList.add('visible');
                    }
                });
            }
            
            // Intersection Observer for footer animations
            const footerObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateFooterWidgets();
                        footerObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            const footer = document.getElementById('footer');
            if (footer) {
                footerObserver.observe(footer);
            }
            
            // Social links hover effects
            const socialLinks = document.querySelectorAll('.social-links a');
            
            socialLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.classList.add('pulse');
                });
                
                link.addEventListener('mouseleave', function() {
                    this.classList.remove('pulse');
                });
            });
            
            // Newsletter form submission
            const newsletterForm = document.querySelector('.newsletter-form');
            const newsletterInput = document.querySelector('.newsletter-input');
            
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const email = newsletterInput.value.trim();
                    
                    if (email.length > 0 && /^\S+@\S+\.\S+$/.test(email)) {
                        // Success message with Bootstrap toast
                        const successToast = document.createElement('div');
                        successToast.className = 'position-fixed bottom-0 end-0 p-3';
                        successToast.style.zIndex = '1050';
                        successToast.innerHTML = `
                            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header bg-success text-white">
                                    <strong class="me-auto">Success!</strong>
                                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div class="toast-body">
                                    Thank you for subscribing to our newsletter!
                                </div>
                            </div>
                        `;
                        document.body.appendChild(successToast);
                        
                        // Remove toast after 3 seconds
                        setTimeout(() => {
                            successToast.remove();
                        }, 3000);
                        
                        newsletterInput.value = '';
                    } else {
                        // Error message with Bootstrap toast
                        const errorToast = document.createElement('div');
                        errorToast.className = 'position-fixed bottom-0 end-0 p-3';
                        errorToast.style.zIndex = '1050';
                        errorToast.innerHTML = `
                            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header bg-danger text-white">
                                    <strong class="me-auto">Error</strong>
                                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div class="toast-body">
                                    Please enter a valid email address.
                                </div>
                            </div>
                        `;
                        document.body.appendChild(errorToast);
                        
                        // Remove toast after 3 seconds
                        setTimeout(() => {
                            errorToast.remove();
                        }, 3000);
                    }
                });
            }
            
            // Add smooth scrolling to all links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    
                    if (targetId !== '#') {
                        const targetElement = document.querySelector(targetId);
                        
                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            });
            
            // Initialize functionality
            toggleBackToTopButton();
            checkIfInView();
            
            // Re-check on scroll
            window.addEventListener('scroll', checkIfInView);
        });

        

        //footer section
        document.addEventListener("DOMContentLoaded", function () {
          // Footer animation
          const footerWidgets = document.querySelectorAll('.footer-widget');
          
          function animateFooterWidgets() {
              footerWidgets.forEach((widget, index) => {
                  const delay = widget.getAttribute('data-delay') || 100 * index;
                  const animation = widget.getAttribute('data-animation') || 'fadeInUp';
                  
                  setTimeout(() => {
                      widget.classList.add('animated', animation);
                  }, delay);
              });
          }
          
          // Back to top button functionality
          const backToTopButton = document.querySelector('.back-to-top');
          
          function toggleBackToTopButton() {
              if (window.scrollY > 300) {
                  backToTopButton.classList.add('visible');
              } else {
                  backToTopButton.classList.remove('visible');
              }
          }
          
          backToTopButton.addEventListener('click', () => {
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
              });
          });
          
          // Handle scroll events
          window.addEventListener('scroll', toggleBackToTopButton);
          
          // Animation on scroll
          const animateElements = document.querySelectorAll('.animate-in');
          
          function checkIfInView() {
              animateElements.forEach(element => {
                  const elementTop = element.getBoundingClientRect().top;
                  const windowHeight = window.innerHeight;
                  
                  if (elementTop < windowHeight - 100) {
                      element.classList.add('visible');
                  }
              });
          }
          
          // Intersection Observer for footer animations
          const footerObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      animateFooterWidgets();
                      footerObserver.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.1 });
          
          const footer = document.getElementById('footer');
          if (footer) {
              footerObserver.observe(footer);
          }
          
          // Social links hover effects
          const socialLinks = document.querySelectorAll('.social-links a');
          
          socialLinks.forEach(link => {
              link.addEventListener('mouseenter', function() {
                  this.classList.add('pulse');
              });
              
              link.addEventListener('mouseleave', function() {
                  this.classList.remove('pulse');
              });
          });
          
          // Newsletter form submission
          const newsletterForm = document.querySelector('.newsletter-form');
          const newsletterInput = document.querySelector('.newsletter-input');
          
          if (newsletterForm) {
              newsletterForm.addEventListener('submit', function(e) {
                  e.preventDefault();
                  
                  const email = newsletterInput.value.trim();
                  
                  if (email.length > 0 && /^\S+@\S+\.\S+$/.test(email)) {
                      // Success message with Bootstrap toast
                      const successToast = document.createElement('div');
                      successToast.className = 'position-fixed bottom-0 end-0 p-3';
                      successToast.style.zIndex = '1050';
                      successToast.innerHTML = `
                          <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                              <div class="toast-header bg-success text-white">
                                  <strong class="me-auto">Success!</strong>
                                  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                              </div>
                              <div class="toast-body">
                                  Thank you for subscribing to our newsletter!
                              </div>
                          </div>
                      `;
                      document.body.appendChild(successToast);
                      
                      // Remove toast after 3 seconds
                      setTimeout(() => {
                          successToast.remove();
                      }, 3000);
                      
                      newsletterInput.value = '';
                  } else {
                      // Error message with Bootstrap toast
                      const errorToast = document.createElement('div');
                      errorToast.className = 'position-fixed bottom-0 end-0 p-3';
                      errorToast.style.zIndex = '1050';
                      errorToast.innerHTML = `
                          <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                              <div class="toast-header bg-danger text-white">
                                  <strong class="me-auto">Error</strong>
                                  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                              </div>
                              <div class="toast-body">
                                  Please enter a valid email address.
                              </div>
                          </div>
                      `;
                      document.body.appendChild(errorToast);
                      
                      // Remove toast after 3 seconds
                      setTimeout(() => {
                          errorToast.remove();
                      }, 3000);
                  }
              });
          }
          
          // Add smooth scrolling to all links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function(e) {
                  e.preventDefault();
                  
                  const targetId = this.getAttribute('href');
                  
                  if (targetId !== '#') {
                      const targetElement = document.querySelector(targetId);
                      
                      if (targetElement) {
                          targetElement.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start'
                          });
                      }
                  }
              });
          });
          
          // Initialize functionality
          toggleBackToTopButton();
          checkIfInView();
          
          // Re-check on scroll
          window.addEventListener('scroll', checkIfInView);
      });




      