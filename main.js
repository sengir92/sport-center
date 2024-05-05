function toggleContainer(containerId) {
  // Hide all containers
  var containers = document.querySelectorAll('.container-content');
  containers.forEach(function(container) {
    container.style.display = 'none';
  });

  // Display the container associated with the clicked button
  var container = document.getElementById(containerId);
  container.style.display = 'block';
}
window.onload = function() {
  toggleContainer('container1'); // Change 'container1' to the ID of your first container
};
//deneme
document.getElementById("btnContainer1").addEventListener("click", function() {
  toggleContainer('container1');
});

document.getElementById("btnContainer2").addEventListener("click", function() {
  toggleContainer('container2');
});

document.getElementById("btnContainer3").addEventListener("click", function() {
  toggleContainer('container3');
});

document.getElementById("btnContainer4").addEventListener("click", function() {
  toggleContainer('container4');
});


document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('mainNav');
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});



document.getElementById('height').addEventListener('input', calculate);
document.getElementById('weight').addEventListener('input', calculate);

function calculate () {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  if (weight > 0 && height > 0) {
    let bmi = weight / ((height/100)**2);
    document.getElementById('bmi-result').textContent = bmi.toFixed(2);
    let arrow = document.querySelector('.arrow-up');
    if (bmi < 18.5 ) {
      arrow.style.left = "17%";
    }
    else if (bmi < 24.9) {
      arrow.style.left = "33%";
    }
    else if (bmi < 29.9) {
      arrow.style.left = "48%";
    } 
    else if (bmi < 34.9) {
      arrow.style.left = "63%";
    } else {
      arrow.style.left = "80%";
    }
  }
}