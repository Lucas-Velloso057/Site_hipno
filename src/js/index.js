var treatmentAnalise = document.querySelectorAll(".maismenos");

treatmentAnalise.forEach(element => {
  element.addEventListener("click", function(){
    element.parentElement.classList.toggle("ativo")

    });  
});

