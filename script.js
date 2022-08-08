function dark_light() {
  console.log(window.localStorage.getItem("dark"));
  if (
    window.localStorage.getItem("dark") === null ||
    window.localStorage.getItem("dark") === "light"
  ) {
    console.log("null");
    window.localStorage.setItem("dark", "light");
  } else {
    console.log("true");
    $("body").toggleClass("bg-secondary");
    $("nav").toggleClass("navbar-dark bg-dark");
    $(".custom-control-label").toggleClass("text-white");
    $("#content").toggleClass("text-white");
    $("footer").toggleClass("navbar-dark bg-dark");
    $("footer").toggleClass("text-white");
    $(".footer-a").toggleClass("text-white");
    $("hr").toggleClass("bg-light");
    changeImg();
  }
  $("#selector").click(function () {
    colorChange();
  });
  $("#selector2").click(function () {
    colorChange();
  });
}
function changeImg() {
  if (window.localStorage.getItem("dark") === "light") {
    console.log("light");
    document.getElementById("selector").style.display = "block";
    document.getElementById("selector2").style.display = "none";
  } else {
    console.log("dark");
    document.getElementById("selector").style.display = "none";
    document.getElementById("selector2").style.display = "block";
  }
}
function colorChange() {
  if (window.localStorage.getItem("dark") === "light") {
    window.localStorage.setItem("dark", "dark");
  } else {
    window.localStorage.setItem("dark", "light");
    console.log("false done");
  }

  $("body").toggleClass("bg-secondary");
  $("nav").toggleClass("navbar-dark bg-dark");
  $(".custom-control-label").toggleClass("text-white");
  $("#content").toggleClass("text-white");
  $("footer").toggleClass("navbar-dark bg-dark");
  $("footer").toggleClass("text-white");
  $(".footer-a").toggleClass("text-white");
  $("hr").toggleClass("bg-light");
  changeImg();
}
function check_login() {
  const full_name = window.localStorage.getItem("name");
  if (window.localStorage.getItem("login") === "true") {
    var nav_log = document.getElementById("nav_login");
    nav_log.innerHTML =
      '<a class="nav-link active" onclick="logout()" href="#">Hi ' +
      full_name +
      "</a>";
  }
}

function logout() {
  if (confirm("Do you want to logout?")) {
    window.localStorage.setItem("login", "false");
    var nav_log = document.getElementById("nav_login");
    nav_log.innerHTML =
      '<a href="login.html" class="nav-link font-weight-bold">Log In/Sign Up</a>';

    location.reload();
  }
}
