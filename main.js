function pixelfy(number) {
    return number.toString() + 'px'
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function center(tag) {
    var width = $(window).width()

    $(tag).css('left', pixelfy((width / 2) - ($(tag).width() / 2)))
}

function resize() {
    var height = $(window).height()
    var width = $(window).width()

    // Landing Page Resizing
    $('#landingPage').css('height', pixelfy(height))
    center('#textbox')
    $('#textbox').css('top', pixelfy((height / 2) - ($('#textbox').height())))
    $('#learnMore').css('top', pixelfy(height - 150))
    center('#learnMore')

    //Projects Resizing
    $('#screenshot').css('left', pixelfy($('#projects').outerWidth()));
    $('#screenshot').css('display', width < 600 ? 'none' : 'inline')

    if (width < 1250 && width > 900) {
        $('#screenshot').css('display', 'inline')
        $('#screenshot').css('width', pixelfy(2 * (width - $('#projects').outerWidth())));

    } else if (width < 900) {
        $('#screenshot').css('width', pixelfy(600));
    }
}

function cursor() {
    var cursorOn = true

    window.setInterval(function () {
        cursorOn = !cursorOn
        $('#cursor').css('display', cursorOn ? 'inline' : 'none')
    }, 800)

}

async function introAnimation() {
    var text = 'A detail oriented software engineer.'

    $('#cursor').css('display', 'inline')
    $('#subtext').text('')
    $('#cursor').css('left', pixelfy($('#subtext').width()))

    await sleep(250)

    for (var i = 0; i < text.length + 1; i++) {
        await sleep(80)
        $('#subtext').text(text.substring(0, i))
        $('#cursor').css('left', pixelfy($('#subtext').width()))
    }

    cursor()
    resize()
}

function navSetup() {
    $('#learnMore').on('click', function () { navHandler('aboutMe') })
    $('#navAboutMe').on('click', function () { navHandler('aboutMe') })
    $('#navEducation').on('click', function () { navHandler('education') })
    $('#navExperience').on('click', function () { navHandler('experience') })
    $('#navProjects').on('click', function () { navHandler('projects') })
    $('#navbarDetector').mouseover(peekNav)
}

function navHandler(tag) {
    var section = ['landingPage', 'aboutMe', 'education', 'experience', 'projects']
    var index = section.indexOf(tag) - 1
    var element = $('#' + section[index])

    window.scrollTo(0, element.offset().top + element.height())
}

function peekNav() {
    hidden = false;
    count = 0;
    document.getElementById('navbar').animate({ 'top': '0px' }, animationSpeed)
    setTimeout(function () {
        $('#navbar').css('top', '0px')
    }, animationSpeed)
}

var lastScroll = 0
var hidden = false
var onTop = true;
var count = 0
var animationSpeed = 300

function navbarHandler() {
    let scroll = this.scrollY

    if (scroll > 70) {
        $('#navbar').css('position', 'fixed')
        $('#navbar').css('boxShadow', '0px 0px 10px black')

        if (onTop) {
            onTop = false;
            count = 6
            $('#navbar').css('top', '-70px')
        }
    } else {
        count = 0
        onTop = true;
        $('#navbar').css('position', 'absolute')
        $('#navbar').css('boxShadow', '')
    }

    if (lastScroll - scroll < 0 && !hidden) {
        if (count > 5) {
            hidden = true
            document.getElementById('navbar').animate({ 'top': '-70px' }, animationSpeed)
            setTimeout(function () {
                $('#navbar').css('top', '-70px')
            }, animationSpeed)
        } else {
            count += 1
        }
    } else if (lastScroll - scroll > 0) {
        count = 0
        hidden = false
        document.getElementById('navbar').animate({ 'top': '0px' }, animationSpeed)
        setTimeout(function () {
            $('#navbar').css('top', '0px')
        }, animationSpeed)
    }

    lastScroll = scroll
}

var activeButton = 'volunteer'

function experienceSetup() {
    $('#volunteerButton').on('click', function() {experienceHandler('volunteer')})
    $('#volunteerButton').mouseover(function() {experienceHover('volunteer', true)})
    $('#volunteerButton').mouseleave(function() {experienceHover('volunteer', false)})

    $('#skillsButton').on('click', function() {experienceHandler('skills')})
    $('#skillsButton').mouseover(function() {experienceHover('skills', true)})
    $('#skillsButton').mouseleave(function() {experienceHover('skills', false)})

    $('#courseworkButton').on('click', function() {experienceHandler('coursework')})
    $('#courseworkButton').mouseover(function() {experienceHover('coursework', true)})
    $('#courseworkButton').mouseleave(function() {experienceHover('coursework', false)})
}

function experienceHandler(tag) {
    var tabs = ['volunteer', 'skills', 'coursework']
    activeButton = tag

    for (var i = 0; i < tabs.length; i++) {
        var currentTab = tabs[i]
        var activeTab = currentTab == tag

        $('#' + currentTab + 'Button').css('color', activeTab ? '#a6e22e' : '#575757')
        $('#' + currentTab + 'Button').css('border-left', '2px solid ' + (activeTab ? '#a6e22e' : '#575757').toString())
        $('#' + currentTab + 'Container').css('display', activeTab ? 'inline' : 'none')
    }
}

function experienceHover(tag, over) {
    $('#' + tag + 'Button').css('color', over || tag == activeButton ? '#a6e22e' : '#575757')
    $('#' + tag + 'Button').css('border-left', '2px solid ' + (over || tag == activeButton ? '#a6e22e' : '#575757').toString())
}

$(document).ready(function() {
    resize()
    introAnimation()
    navSetup()
    experienceSetup()
    experienceHandler('volunteer')
})

$(window).resize(resize)
$(window).scroll(navbarHandler)
