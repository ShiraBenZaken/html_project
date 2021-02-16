// if click on buttons
document.addEventListener("DOMContentLoaded", function () {
    var myitem = document.querySelectorAll(".notClickedYet");
    for (h = 0; h < myitem.length; h++) {
        myitem[h].addEventListener("click", function (e) {
            var myitem = document.querySelectorAll(".notClickedYet");
            for (h = 0; h < myitem.length; h++) {
                myitem[h].classList.remove("bordered");
            }
            this.classList.add("bordered");
        });
    }
});

//add toggle class to open/close collapse
function CollapseToggle(obj) {
    var currentLevel = document.getElementById(obj.getAttribute("data-listner"));
    var parentWrapper = currentLevel.parentElement;
    if (currentLevel.classList.contains("open")) {
        currentLevel.classList.remove("open");
        removeLevel(obj);
    }
    else {
        parentWrapper.classList.add("open");
        currentLevel.classList.add("open");
    }
}
//remove the open class by levels 
function removeLevel(obj) {
    var objListner = obj.getAttribute("data-listner");
    if (objListner) {
        let subElement = document.getElementById(objListner);
        subElement.classList.remove("open");
        //rm next level (and childrens)
        for (let i = 0; i < subElement.children.length; i++) {
            subElement.children[i].classList.remove(".open");
            removeLevel(subElement.children[i]);
        }
    }
}

// right icon
function goToRight() {
    var containerSlide = document.getElementById('containerSlide');
    sideScroll(containerSlide, 'right', 25, 100, 10);
}

// left icon
function goToLeft() {
    var containerSlide = document.getElementById('containerSlide');
    sideScroll(containerSlide, 'left', 25, 100, 10);
}

// scroll side action
function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    var slideTimer = setInterval(function () {
        if (direction == 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}
