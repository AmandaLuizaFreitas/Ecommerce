// -----------  MENU -----------
// Categoria
function toggleSubmenu(index) {
    const submenus = document.querySelectorAll(".submenu");
    const menuItems = document.querySelectorAll(".menu-item");
  
    submenus.forEach((submenu, i) => {
      if (i === index) {
        submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
        menuItems[i].classList.toggle("active");
      } else {
        submenu.style.display = "none";
        menuItems[i].classList.remove("active");
      }
    });
}
//  Busca
function Search() {
    const result = document.getElementById('result');
    //  Chamando o html da parte do MOBILE
    const mobileInput = document.getElementById('mobile-search-input');
    const mobileBtn = document.getElementById('mobile-search-button');
   
    mobileBtn.addEventListener('click', () => {
      const query = mobileInput.value.trim();
      if (query) {
        result.innerHTML = `Você buscou por: <strong> ${query}</strong>`;
      } else {
        result.innerHTML = '';
      }
    });
    
    mobileInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        mobileBtn.click();
      }
    });
    
    // Chamando o html da parte do DESKTOP
    const desktopInput = document.querySelector('.desktop-search-input');
    const desktopBtn = document.getElementById('desktop-search-button');
    
    desktopBtn.addEventListener('click', () => {
      const query = desktopInput.value.trim();
      if (query) {
        result.innerHTML = `Você buscou por:<strong> ${query}</strong>`;
      } else {
        result.innerHTML = '';
      }
    });
    
    desktopInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        desktopBtn.click();
      }
    });
}
  Search()
//----------- CARROSSEL -----------
function carousel(){
    document.addEventListener('DOMContentLoaded', () => {
     
       function initCarousel(slidesId, prevId, nextId, dotId) {
           const slides = document.getElementById(slidesId);
           const sets = slides.querySelectorAll('.carousel-set');
           const prevBtn = document.getElementById(prevId);
           const nextBtn = document.getElementById(nextId);
           const indicators = document.getElementById(dotId).querySelectorAll('.dot');
           
           let currentSet = 0;
           const setCount = sets.length;
           
           
           function updateCarousel() {
               slides.style.transform = `translateX(-${currentSet * 100}%)`;
               indicators.forEach((indicator, index) => {
                   if (index === currentSet) {
                       indicator.classList.add('active');
                   } else {
                       indicator.classList.remove('active');
                   }
               });
           }
           
          
           nextBtn.addEventListener('click', () => {
               currentSet = (currentSet + 1) % setCount;
               updateCarousel();
           });
           
          
           prevBtn.addEventListener('click', () => {
               currentSet = (currentSet - 1 + setCount) % setCount;
               updateCarousel();
           });
           
          
           indicators.forEach(indicator => {
               indicator.addEventListener('click', () => {
                   currentSet = parseInt(indicator.dataset.index);
                   updateCarousel();
               });
           });
           
         
           let touchStartX = 0;
           let touchEndX = 0;
           
           slides.addEventListener('touchstart', (e) => {
               touchStartX = e.changedTouches[0].screenX;
           });
           
           slides.addEventListener('touchend', (e) => {
               touchEndX = e.changedTouches[0].screenX;
               handleSwipe();
           });
           
           function handleSwipe() {
             
               if (touchEndX < touchStartX - 50) {
                   currentSet = (currentSet + 1) % setCount;
                   updateCarousel();
               }
               
               if (touchEndX > touchStartX + 50) {
                   currentSet = (currentSet - 1 + setCount) % setCount;
                   updateCarousel();
               }
           }
       }
       
       // Inicializa os dois carrosséis
       initCarousel('carousel1-slides', 'prev1', 'next1', 'dot1');
       initCarousel('carousel2-slides', 'prev2', 'next2', 'dot2');
     });
  }
  carousel()
// ----------- MOBILE FOOTER -----------
function FooterMobile(){
    const headers = document.querySelectorAll('.mobile-footer-header');
    
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const icon = header.querySelector('i');
        const isActive = item.classList.contains('active');
    
        // Fecha todos
        document.querySelectorAll('.mobile-footer-item').forEach(i => {
          i.classList.remove('active');
          i.querySelector('i').classList.replace('bx-chevron-up', 'bx-chevron-down');
        });
    
        // Abre o clicado
        if (!isActive) {
          item.classList.add('active');
          icon.classList.replace('bx-chevron-down', 'bx-chevron-up');
        }
      });
    });
    
  }
  FooterMobile()