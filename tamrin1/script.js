function checkNumber() {
    const input = prompt("یک عدد وارد کنید:");
    const number = parseInt(input);
    const modalBody = document.getElementById('modalBody');
  
    if (isNaN(number)) {
      alert("لطفاً یک عدد معتبر وارد کنید!");
      return;
    }
  
    // بررسی شرایط عدد
    if (number % 2 !== 0 && number < 100) {
      document.body.style.backgroundColor = "green";
    } else if (number % 2 === 0 && number > 100) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "white";
    }
  
    // نمایش عدد در modal
    modalBody.textContent = `عدد وارد شده: ${number}`;
    const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    resultModal.show();
  }
  