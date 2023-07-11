

      const sectionInput = document.getElementById("sectionInput");
      const cardName = document.getElementById("cardName");
      const cardNumber = document.getElementById("cardNumber");
      const cardMM = document.getElementById("cardMM");
      const cardYY = document.getElementById("cardYY");
      const cardCVC = document.getElementById("cardCVC");
      const confirmButton = document.getElementById("confirmButton");
      const outPutName = document.getElementById("outPutName");
      const cardNameExample = document.querySelector(".cardNameExample");
      const cardNumberExample = document.querySelector(".cardNumberExample");
      const cardMonthExample = document.querySelector(".cardMonthExample");
      const cardYearExample = document.querySelector(".cardYearExample");
      const cardCvcExample = document.querySelector(".cardCvcExample");

      confirmButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (
          cardName.value &&
          cardNumber.value &&
          cardMM.value &&
          cardYY.value &&
          cardCVC.value
        ) {
          alert("Todos los campos están llenos");
          return;
        } else {
          alert("Faltan campos por llenar");
        }

      });

      confirmButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (cardMM.value <= 0  || cardMM.value > 12) {
            alert("Mes no válido")
        } else {}
        
      });

      confirmButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (cardYY.value <= 23  || cardYY.value > 33) {
            alert("Año no válido")
        } else {}
        
      });

     
      cardName.addEventListener("input", () => {
        if (cardName.value == "") {
          cardNameExample.innerText = "JANE APPLESED";
        } else {
          cardNameExample.innerText = cardName.value;
        }
      });

      cardNumber.addEventListener("input", () => {
        if (cardNumber.value === "") {
          cardNumberExample.innerText = "0000 0000 0000 0000";
        } else {
          cardNumberExample.innerText = cardNumber.value;
        }
      });

      cardMM.addEventListener("input", () => {
        if (cardMM.value == "") {
          cardMonthExample.innerText = "00";
        } else {
          cardMonthExample.innerText = cardMM.value;
        }
      });
      
      cardYY.addEventListener("input", () => {
        if (cardYY.value == "") {
          cardYearExample.innerText = "00";
        } else {
            cardYearExample.innerText = cardYY.value;
        }
      });

      cardCVC.addEventListener("input", () => {
        if (cardCVC.value == "") {
          cardCvcExample.innerText = "000";
        } else {
            cardCvcExample.innerText = "***";
        }
      });

      function formatNumber() {
        let numeros4 = cardNumber.value;
        let cleanedValue = numeros4.replace(/\D/g, "");
        let truncatedValue = cleanedValue.slice(0, 19); 
        let groups = truncatedValue.match(/.{1,4}/g); 
        let formattedValue = groups ? groups.join(" ") : "";
        cardNumber.value = formattedValue;
      }
      
