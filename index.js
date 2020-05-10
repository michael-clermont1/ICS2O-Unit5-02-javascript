

function myFunction() {
      var x, userguess,cguess;
      x = document.getElementById("userguess").value;
        if (x > 0 ) {
            userguess = "Your number is positive (" + x +")"
        } else {
            userguess = "Your number is negative (" + x +")"
        }
    document.getElementById("demo").innerHTML = userguess;
}