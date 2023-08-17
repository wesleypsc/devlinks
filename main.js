document.addEventListener("DOMContentLoaded", function(e) {

  let mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)');
  let isDarkMode = mediaQueryObj.matches;

  if(isDarkMode){
    document.documentElement.classList.remove("light");  
  }
})

document.querySelector("#switch").addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
})