function writeWelcome() {
    for (var i = 1; i <= 6; i++) {
      document.write("<h" + i + ">Welcome to my page</h" + i + ">");
    }
  }
  
  writeWelcome();
  window.location.href ="./heading.html"