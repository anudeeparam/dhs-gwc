function hello()
{
  window.alert("Hello and welcome to the 2018-2019 Duluth High School GirlswhoCode club!");
}

function hide(section)
{
  var x = document.getElementById(section);

  x.style.display = "none";

}

function show(section)
{
  var y = document.getElementById(section);
  y.style.display = "block";
}

function hideshow() {
    var x = document.getElementById("Meetings");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
