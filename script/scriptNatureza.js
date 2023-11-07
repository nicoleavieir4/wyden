document.querySelectorAll('.link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1); // Remove o "#" do href
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
  });