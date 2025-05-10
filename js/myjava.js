

// todo======Navbar=======


  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar-example");

    if (window.scrollY >= 850) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });



// !======== navbar end=========

//todo ======loader======

window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";

    document.getElementById("main-content").style.display = "block";
  }, 1500);
});

// !======loader End======
// todo ====counter=====


function startCounter(id, startCount, endCount, intervalTime) {
    let count = startCount;

    let interval = setInterval(function() {
      document.getElementById(id).innerText = count;
      count++;

      if (count > endCount) {
        clearInterval(interval);
      }
    }, intervalTime);
  }

document.addEventListener('DOMContentLoaded', function() {

  startCounter('count1', 200, 850, 10);  
  startCounter('count2', 50, 230, 15);  
  startCounter('count3', 9000, 9450, 10);  
  startCounter('count4', 500, 780, 10);  
});
 
 


// !====== counter end=========
