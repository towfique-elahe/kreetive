// dropdown function start
// company menu
function company_menu() {
    document.getElementById("company").classList.toggle("show");
}
// service menu
function service_menu() {
    document.getElementById("service").classList.toggle("show");
}
// training menu
function training_menu() {
    document.getElementById("training").classList.toggle("show");
}
// internship menu
function internship_menu() {
    document.getElementById("internship").classList.toggle("show");
}
// testimonials menu
function testimonial_menu() {
    document.getElementById("testimonial").classList.toggle("show");
}
window.onclick = function (event) {
    // company menu
    if (!event.target.matches('.company-btn')) {
        var dropdowns = document.getElementsByClassName("company-sub");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    // service menu
    if (!event.target.matches('.service-btn')) {
        var dropdowns = document.getElementsByClassName("service-sub");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    // training menu
    if (!event.target.matches('.training-btn')) {
        var dropdowns = document.getElementsByClassName("training-sub");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    // internship menu
    if (!event.target.matches('.internship-btn')) {
        var dropdowns = document.getElementsByClassName("internship-sub");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    // testimonials menu
    if (!event.target.matches('.testimonial-btn')) {
        var dropdowns = document.getElementsByClassName("testimonial-sub");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// dropdown function ends

// mobile menu start
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
// mobile menu ends