var pageLength = 0;
var activeExperienceButton = "volunteer";
var count = 0;
var hidden = false;
var animationSpeed = 300;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function introAnimation() {
    var text = "A detail oriented software engineer."
    document.getElementById("cursor").style.display = "inline";
    document.getElementById("subtext").innerHTML = "";

    await sleep(250);

    for (var i = 0; i < text.length + 1; i++) {
        await sleep(80);
        document.getElementById("subtext").innerHTML = text.substring(0, i);
        var right = document.getElementById("subtext").getBoundingClientRect().right;
        var left = document.getElementById("subtext").getBoundingClientRect().left;
        document.getElementById("cursor").style.left = (right - left) + "px";
    }

    cursor();
}

function experienceHandler(button) {
    var clicked = ""
    var otherName1 = "";
    var otherName2 = "";

    if (button == 0) {
        clicked = "volunteer";
        otherName1 = "technical";
        otherName2 = "coursework";
    } else if (button == 1) {
        clicked = "technical";
        otherName1 = "volunteer";
        otherName2 = "coursework";
    } else if (button == 2) {
        clicked = "coursework";
        otherName1 = "volunteer";
        otherName2 = "technical";
    }

    document.getElementById(clicked + "Button").style.color = "#a6e22e";
    document.getElementById(clicked + "Button").style.borderLeft = "2px solid #a6e22e";
    document.getElementById(clicked + "Frame").style.visibility = "visible";

    document.getElementById(otherName1 + "Button").style.color = "#575757";
    document.getElementById(otherName1 + "Button").style.borderLeft = "2px solid #575757";
    document.getElementById(otherName1 + "Frame").style.visibility = "hidden";

    document.getElementById(otherName2 + "Button").style.color = "#575757";
    document.getElementById(otherName2 + "Button").style.borderLeft = "2px solid #575757";
    document.getElementById(otherName2 + "Frame").style.visibility = "hidden";

    activeExperienceButton = clicked
}

function hoverHandler(hover, name) {
    if (name != activeExperienceButton) {
        if (hover) {
            document.getElementById(name + "Button").style.color = "#a6e22e";
            document.getElementById(name + "Button").style.borderLeft = "2px solid #a6e22e";
        } else {
            document.getElementById(name + "Button").style.color = "#575757";
            document.getElementById(name + "Button").style.borderLeft = "2px solid #575757";
        }
    }
}

function resizeElements() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    var right = document.getElementById("subtext").getBoundingClientRect().right;
    var left = document.getElementById("subtext").getBoundingClientRect().left;
    var body = document.body,
        html = document.documentElement;
    var educationHeight = document.getElementById("educationContainer").getBoundingClientRect().height;
    var experienceWidth = document.getElementById("experienceContent").getBoundingClientRect().width;
    var buttonWidth = document.getElementById("experienceButtons").getBoundingClientRect().width;

    pageLength = height;

    document.getElementById("welcomeTextbox").style.top = (.4 * height) + "px";
    document.getElementById("welcomeTextbox").style.left = (.2 * width) + "px";

    document.getElementById("aboutMeContainer").style.top = height + "px";
    document.getElementById("educationContainer").style.top = (2 * height) + "px";
    document.getElementById("experienceContainer").style.top = (2 * height) + educationHeight + "px";
    document.getElementById("projectsContainer").style.top = (3 * height) + educationHeight + "px";

    document.getElementById("inspired").style.top = html.scrollHeight + "px";

    document.getElementById("navbarDetector").style.height = document.getElementById("navbar").getBoundingClientRect().height + "px";

    document.getElementById("volunteerButton").style.color = "#a6e22e";
    document.getElementById("volunteerButton").style.borderLeft = "2px solid #a6e22e";
    document.getElementById("volunteerFrame").style.width = (experienceWidth - buttonWidth) - 20 + "px"
    document.getElementById("volunteerButton").addEventListener("click", function () { experienceHandler(0) });
    document.getElementById("technicalButton").addEventListener("click", function () { experienceHandler(1) });
    document.getElementById("courseworkButton").addEventListener("click", function () { experienceHandler(2) });
    document.getElementById("volunteerButton").addEventListener("mouseenter", function () { hoverHandler(true, "volunteer") });
    document.getElementById("technicalButton").addEventListener("mouseenter", function () { hoverHandler(true, "technical") });
    document.getElementById("courseworkButton").addEventListener("mouseenter", function () { hoverHandler(true, "coursework") });
    document.getElementById("volunteerButton").addEventListener("mouseleave", function () { hoverHandler(false, "volunteer") });
    document.getElementById("technicalButton").addEventListener("mouseleave", function () { hoverHandler(false, "technical") });
    document.getElementById("courseworkButton").addEventListener("mouseleave", function () { hoverHandler(false, "coursework") });

    document.getElementById("learnMore").addEventListener("click", scrollButtonClick);
    document.getElementById("navAboutMe").addEventListener("click", function () { navButtonClick(height) });
    document.getElementById("navEducation").addEventListener("click", function () { navButtonClick(height * 2) });
    document.getElementById("navExperience").addEventListener("click", function () { navButtonClick((height * 2) + educationHeight) });
    document.getElementById("navProjects").addEventListener("click", function () { navButtonClick((height * 3) + educationHeight) });
    document.getElementById("navbarDetector").addEventListener("mouseenter", function() {
        count = 0
        hidden = false;
        document.getElementById("navbar").animate({ "top": "0px" }, animationSpeed);
        setTimeout(function () {
            document.getElementById("navbar").style.top = "0px";
        }, animationSpeed);
    });
}

function cursor() {
    cursorOn = true;

    var right = document.getElementById("subtext").getBoundingClientRect().right;
    var left = document.getElementById("subtext").getBoundingClientRect().left;
    document.getElementById("cursor").style.left = (right - left) + 5 + "px";

    window.setInterval(function () {
        cursorOn = !cursorOn;
        document.getElementById("cursor").style.display = cursorOn ? "inline" : "none";
    }, 800);
}

function scrollButtonClick() {
    var height = window.innerHeight;
    document.body.scrollTop = height;
    document.documentElement.scrollTop = height;
}

function navButtonClick(scrollTo) {
    document.body.scrollTop = scrollTo;
    document.documentElement.scrollTop = scrollTo;
}

window.addEventListener("resize", resizeElements);
window.addEventListener("load", resizeElements);
//window.addEventListener("load", cursor);
window.addEventListener("load", introAnimation);

var lastScroll = 0;

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    //console.log(scroll)

    if (scroll > 30) {
        document.getElementById("navbar").style.position = "fixed"
        document.getElementById("navbar").style.boxShadow = "0px 0px 10px black";
    } else {
        count = 0;
        document.getElementById("navbar").style.position = "absolute"
        document.getElementById("navbar").style.boxShadow = "";
    }

    if (lastScroll - scroll < 0 && !hidden) {
        if (count > 5) {
            hidden = true;
            document.getElementById("navbar").animate({ "top": "-60px" }, animationSpeed);
            setTimeout(function () {
                document.getElementById("navbar").style.top = "-60px";
            }, animationSpeed)
        } else {
            count += 1;
        }
    } else if (lastScroll - scroll > 0) {
        count = 0
        hidden = false;
        document.getElementById("navbar").animate({ "top": "0px" }, animationSpeed);
        setTimeout(function () {
            document.getElementById("navbar").style.top = "0px";
        }, animationSpeed)
    }

    lastScroll = scroll
});