
//circle section

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".department-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 0.1 });

    items.forEach((item, index) => {
        // Add animation delay for each item
        item.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(item);
    });
});



//BMI CALCULATOR SCRIPT START S HERE------------------------------------------------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const ageInput = document.getElementById("age");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const heightUnit = document.getElementById("height-unit");
    const weightUnit = document.getElementById("weight-unit");
    const calculateBtn = document.getElementById("calculate");
    const result = document.getElementById("result");
    const bmiValue = document.getElementById("bmi-value");
    const bmiCategory = document.getElementById("bmi-category");
    const userInfo = document.getElementById("user-info");
    const gaugeNeedle = document.querySelector(".gauge-needle");
  
    function convertHeight(height, unit) {
      return unit === "ft" ? height * 30.48 : height;
    }
  
    function convertWeight(weight, unit) {
      return unit === "lbs" ? weight * 0.453592 : weight;
    }
  
    function calculateBMI(height, weight) {
      const heightInMeters = height / 100;
      return weight / (heightInMeters * heightInMeters);
    }
  
    function getBMICategory(bmi) {
      if (bmi < 18.5) return ["Underweight", "#3498db"];
      if (bmi < 25) return ["Normal weight", "#2ecc71"];
      if (bmi < 30) return ["Overweight", "#f1c40f"];
      return ["Obese", "#e74c3c"];
    }
  
    function updateGauge(bmi) {
      const minBMI = 15;
      const maxBMI = 35;
      let rotation = -90 + (((bmi - minBMI) / (maxBMI - minBMI)) * 180);
      rotation = Math.max(-90, Math.min(90, rotation));
      gaugeNeedle.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
    }
  
    calculateBtn.addEventListener("click", () => {
      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
      const age = parseInt(ageInput.value);
      const height = parseFloat(heightInput.value);
      const weight = parseFloat(weightInput.value);
  
      if (!name || !phone || isNaN(age) || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0 || age <= 0) {
        alert("Please enter valid values for all fields");
        return;
      }
  
      const heightInCm = convertHeight(height, heightUnit.value);
      const weightInKg = convertWeight(weight, weightUnit.value);
      const bmi = calculateBMI(heightInCm, weightInKg);
  
      bmiValue.textContent = bmi.toFixed(1);
      const [category, color] = getBMICategory(bmi);
      bmiCategory.textContent = category;
      bmiCategory.style.color = color;
      userInfo.textContent = `Name: ${name} | Phone: ${phone} | Age: ${age} years`;
  
      updateGauge(bmi);
      result.classList.remove("d-none");
    });
  });
  
  //bmi calculation function ends here--------------------------------------------- 


 //------------------------------------------------------------------------------------------homepage animations
  // Function to check if the element is in the viewport
  function checkVisibility() {
    const elements = document.querySelectorAll('.custom-content, .custom-image');
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
        // If element is in viewport, apply the animation
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }
    });
  }

  // Listen for scroll event and check visibility
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility); // Check on initial load

//-------------------------------------------------------------------------------------------service page animations



    // Scroll animation handler
    const items = document.querySelectorAll('[data-scroll]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-scroll-visible', '');
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));


//preloader
window.addEventListener("load", function() {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("hidden");
});