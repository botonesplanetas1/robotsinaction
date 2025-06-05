
  document.addEventListener("DOMContentLoaded", () => {
    const opciones = document.querySelectorAll('.opcion.desplegable');
  
    opciones.forEach(opcion => {
      const submenu = opcion.querySelector('.submenu');
  
      opcion.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.submenu.active').forEach(s => {
          if (s !== submenu) s.classList.remove('active');
        });
        submenu.classList.toggle('active');
      });
  
      submenu.addEventListener('click', (e) => e.stopPropagation());
    });
  
    document.addEventListener('click', () => {
      document.querySelectorAll('.submenu.active').forEach(s => {
        s.classList.remove('active');
      });
    });
  });
  

  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key.toLowerCase() === "c") {
      const contacto = document.getElementById("btn-contacto");
      if (contacto) {
        contacto.style.display = "inline-block";
      }
    }
  });
  
const scrollArea = document.getElementById('scrollArea');
  let isDown = false;
  let startX;
  let scrollLeft;

  scrollArea.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollArea.classList.add('active');
    startX = e.pageX - scrollArea.offsetLeft;
    scrollLeft = scrollArea.scrollLeft;
  });

  scrollArea.addEventListener('mouseleave', () => {
    isDown = false;
  });

  scrollArea.addEventListener('mouseup', () => {
    isDown = false;
  });

  scrollArea.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollArea.offsetLeft;
    const walk = (x - startX) * 1.5; 
    scrollArea.scrollLeft = scrollLeft - walk;
  });

