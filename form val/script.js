document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    
    let isValid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("idError").innerText = "";

    let firstLastName = document.getElementById("firstLastName").value.trim();
    let idCode = document.getElementById("idCode").value.trim();

    if(!/^[\u0600-\u06FF\s]+$/.test(firstLastName)){
        document.getElementById("nameError").innerText="نام و نام خانوادگی نباید شامل عدد یا کاراکتر غیرمجاز باشد.";
        isValid = false;
    }
    if(!/^\d{11}$/.test(idCode)){
        document.getElementById("idError").innerText="کد ملی باید فقط شامل ۱۱ رقم عددی باشد.";
        isValid = false;
    }
    if(isValid){
        alert("اطلاعات با موفقیت ثبت شد")
    }
});