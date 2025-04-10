const btn = document.getElementById("backToTop");

// وقتی اسکرول می‌کنیم:
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// وقتی روی دکمه کلیک شد:
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
