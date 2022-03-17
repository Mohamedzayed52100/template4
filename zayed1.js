///////////////////
let landingpage = document.querySelector('.landing_page');
let imgarray = ["zayed1.jpg", "zayed2.jpg", "zayed3.jpg", "zayed4.jpg", "zayed5.jpg"];
var i = 0;


let backgroundOption = true;


let theinterval;
background_local_item = localStorage.getItem("background_option");
if (background_local_item !== null) {

    // console.log(background_local_item);
    // console.log(typeof(background_local_item));
    if (background_local_item == true) {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }
    document.querySelectorAll('.random_background span').forEach(el => {
        el.classList.remove('active');

    });
    if (background_local_item == true) {
        document.querySelector(".yes").classList.add('active');


    } else {
        document.querySelector(".no").classList.add('active');


    }




}


function RandomizeBackground() {
    if (backgroundOption == true) {
        theinterval = setInterval(function() {

            landingpage.style.backgroundImage = 'url("images/' + imgarray[i] + '")';

            i++;
            if (i == imgarray.length)
                i = 0;



        }, 2000);
    } else {


    }

}
RandomizeBackground();


////
let myicon = document.getElementById('i'),
    setting_box = document.querySelector('.setting_box');

myicon.onclick = function() {
        setting_box.classList.toggle('open');
    }
    ////////////////////////////////////////////////////////////////
const colorsli = document.querySelectorAll('.colorslist li');
// console.log(colorsli);
colorsli.forEach(li => {
    li.addEventListener("click", (e) => {
        // console.log(e.target.dataset.color);
        localStorage.setItem("color_option", e.target.dataset.color);
        document.documentElement.style.setProperty('--mainColor', e.target.dataset.color);

        handleStates(e);
        // e.target.parentElement.querySelectorAll(".active").forEach((el) => {
        //     el.classList.remove("active");

        // });
        // el.classList.add("active");




    });

});
////////////
let mainColor = localStorage.getItem("color_option");

if (mainColor != null) {
    // console.log("hi");

    document.documentElement.style.setProperty('--mainColor', mainColor);
    document.querySelectorAll(".colorslist li").forEach((el) => {
        el.classList.remove("active");
        if (el.dataset.color == mainColor) {
            el.classList.add("active");
        }

    });



}
//////////////////////////////////////Background option 
const reandombackground = document.querySelectorAll('.random_background span');
reandombackground.forEach(span => {
    span.addEventListener("click", (span) => {
        // console.log(e.target.dataset.color);
        handleStates(span);

        // span.target.parentElement.querySelectorAll(".active").forEach((span) => {
        //     span.classList.remove("active");

        // });

        // span.target.classList.add("active");
        if (span.target.dataset.background == 'yes') {
            backgroundOption = true;
            RandomizeBackground();
            localStorage.setItem("background_option", true);
        } else {
            backgroundOption = false;
            clearInterval(theinterval);
            localStorage.setItem("background_option", false);

        }
    });
});
///////////////////////Select all progress bar/------/----------------/---------------


let ourskills = document.querySelector(".skills");
window.onscroll = function() {

    let skillsoffsetTop = ourskills.offsetTop;
    let skillsouterheight = ourskills.offsetHeight;
    let windowheight = this.innerHeight;
    let windowscrolltop = this.pageYOffset;

    if (windowscrolltop > (skillsoffsetTop + skillsouterheight - windowheight))

    {
        let allskills = document.querySelectorAll(".skill_prograss span");





        allskills.forEach(skill => {
            skill.style.width = skill.dataset.progress;

        })



    }
}

///////////////////////craete poupup with the images
let ourgallery = document.querySelectorAll('.images_box img');
console.log(ourgallery);
ourgallery.forEach(image => {
    image.addEventListener('click', (e) => {
        ///create overlay
        let overlay = document.createElement('div');
        overlay.className = "popup_overlay";
        document.body.appendChild(overlay);

        //create popup
        let popupbox = document.createElement('div');
        popupbox.className = 'popup_box';
        if (image.alt !== null) {
            let imageHeading = doc = document.createElement('h3');
            let imgtext = document.createTextNode(image.alt);
            imageHeading.appendChild(imgtext);
            popupbox.appendChild(imageHeading);

        }
        let popup_image = document.createElement('img');
        popup_image.src = image.src;
        popupbox.appendChild(popup_image);
        document.body.appendChild(popupbox);


        /////////////////create the close span

        let closeSpan = document.createElement('span');
        let closetext = document.createTextNode('X');
        closeSpan.appendChild(closetext);
        closeSpan.className = 'close_button';

        popupbox.appendChild(closeSpan);


    });



});
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close_button')) {
        e.target.parentNode.remove();
        document.querySelector('.popup_overlay').remove();

    }
});
const allBullets = document.querySelectorAll(".nav_bullets .bullet");
// console.log(allBullets);
// allBullets.forEach(bullet => {
//     bullet.addEventListener("click", (e) => {
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: "smooth",
//         })


//     })


// });
/////////////------------------------------------------
const alllinks = document.querySelectorAll(".landing_page li a");
// console.log(allBullets);
// alllinks.forEach(link => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: "smooth",
//         });



//     });


// });





function scrollToSection(alllinks) {
    alllinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth",
            });



        });


    });

}
scrollToSection(allBullets);
scrollToSection(alllinks);



function handleStates(e) {


    e.target.parentElement.querySelectorAll('.active').forEach(element => {
        element.classList.remove('active');
    });
    e.target.classList.add('active');


}
///////////////----------------///////////////////////////////////////////////////////bullet_option 
let bullet_option = document.querySelectorAll('bullet_option span');
let nav_bullets = document.querySelector('.nav_bullets');



bullet_option.forEach(s => {
    s.addEventListener('click', function(e) {
        if (s.dataset.display == 'show') {
            nav_bullets.style.display = 'block';

        } else {
            nav_bullets.style.display = 'none';

        }
        handleStates(e);
    });
});