function convertDate() {
    const input = document.getElementById("inputDate").value;
    if (!input) return;
  
    const date = new Date(input + "T00:00:00"); // UTC fix
  
    // روز هفته
    const weekdays = ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
    document.getElementById("weekday").textContent = weekdays[date.getDay()];
  
    // تبدیل به شمسی
    const j = jalaali.toJalaali(date);
    const shamsiStr = `${j.jy}/${pad(j.jm)}/${pad(j.jd)}`;
    document.getElementById("shamsi").textContent = shamsiStr;
  
    // تبدیل به قمری
    const hijri = new HijriDate(date);
    const ghamariStr = `${hijri.getFullYear()}/${pad(hijri.getMonth() + 1)}/${pad(hijri.getDate())}`;
    document.getElementById("ghamari").textContent = ghamariStr;
  }
  
  function pad(n) {
    return n.toString().padStart(2, '0');
  }
  