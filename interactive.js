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

function hideshow(section) {
    var x = document.getElementById(section);
    var rest = document.getElementsByClassName('paragraph')

    if (x.style.display === "none") {
      for(i=0; i<rest.length; i++) {
        rest[i].style.display="none";
      }
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
