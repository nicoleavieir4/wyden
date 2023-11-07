document.addEventListener("DOMContentLoaded", function () {
  
  // Seleciona os elementos do carrossel
  const carrossel = document.querySelector(".carrossel");
  const carrosselItems = document.querySelectorAll(".carrossel-item");
  const nextButton = document.querySelector(".next-button");
  const prevButton = document.querySelector(".prev-button");
  let currentIndex = 0;

  // Função para atualizar a exibição do carrossel
  function updateCarrossel() {
    // Calcula o deslocamento com base no índice atual
    const offset = currentIndex * -100;
    carrossel.style.transform = `translateX(${offset}%)`;
  }

  // Avançar para o próximo item
  function nextSlide() {
    currentIndex = (currentIndex + 1) % carrosselItems.length;
    updateCarrossel();
  }

  // Voltar para o slide anterior
  function prevSlide() {
    currentIndex =
      (currentIndex - 1 + carrosselItems.length) % carrosselItems.length;
    updateCarrossel();
  }

  // Adicionar eventos aos botões de navegação
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Inicializar o carrossel
  updateCarrossel();

  // Adicionar funcionalidade para as setas esquerda/direita do teclado
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else if (event.key === "ArrowRight") {
      nextSlide();
    }
  });
});

