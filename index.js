function expand() {
  document.getElementById("menu_logo").style.display = "none";
  //document.getElementById("nav_container").style.display = "block";
  document.getElementById("nav_container").style.display = "block";
  document.getElementById("nav_container").style.opacity = "1";
  document.getElementById("close_logo").style.display = "block";

  console.log("clicked");
}

function nav_close() {
  document.getElementById("close_logo").style.display = "none";
  document.getElementById("menu_logo").style.display = "block";
  document.getElementById("nav_container").style.display = "none";
}
