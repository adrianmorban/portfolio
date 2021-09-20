window.onload=function(){
  const toggleIcon = document.getElementById("toggleIcon");
  const navLinks = document.getElementById("links");
  const navBar = document.getElementById("navBar");
  var prevScrollpos = window.pageYOffset;

/*Menú hamburguesa*/
  toggleIcon.addEventListener("click", () => {
    if(navLinks.classList.contains("visible")){
      navLinks.classList.remove("visible")
    }
    else{
      navLinks.classList.add("visible")
    }
  }
  )

  window.addEventListener("resize", (e) => {
    if(window.innerWidth >= 850 && navLinks.classList.contains("visible")){
      navLinks.classList.remove("visible");
    }
  })

  window.addEventListener("scroll", ()=> {
    var currentScrollPos = window.pageYOffset;
    if(window.scrollY != 0) navBar.classList.add("notTop");
    else navBar.classList.remove("notTop");
    if (prevScrollpos > currentScrollPos) {
      navBar.classList.replace("navUnpinned","navPinned");
    } else {
      navBar.classList.replace("navPinned","navUnpinned");
    }
    prevScrollpos = currentScrollPos;
  })
 
}