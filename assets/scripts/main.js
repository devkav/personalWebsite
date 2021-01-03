var lastScroll = 0 // Keeps track of the position of the last scroll
var count = 0 // Keeps track of how long the user has been scrolling down for
var hidden = false // Whether or not the navbar is hidden
var onTop = true; // Whether or not the navbar is on the top of the screen (true = non-fixed)
var activeButton = 'volunteer' // The active tab in the experiences section

function pixelfy(number) {
    /*
    Converts a number into a string and adds "px" to the end. 
    Example: 200 -> "200px"

    Parameters:
        number: The number being converted
    */
    return number.toString() + 'px'
}

function sleep(ms) {
    /*
    Pauses the program for a given amount of time

    Parameters:
        ms: The amount of time to pause for (in milliseconds)
    */
    return new Promise(resolve => setTimeout(resolve, ms))
}

function center(tag) {
    /*
    Centers a given element.

    Parameters:
        tag: The name of the element
    */
    var width = $(window).width()

    $(tag).css('left', pixelfy((width / 2) - ($(tag).width() / 2)))
}

function resize() {
    /*
    Resizes elements to fit the screen size
    */
    var height = $(window).height()
    var width = $(window).width()

    // Landing Page Resizing
    $('#landingPage').css('height', pixelfy(height))
    $('#textbox').css('top', pixelfy((height / 2) - ($('#textbox').height())))
    $('#learnMore').css('top', pixelfy(height - 150))
    center('#textbox')
    center('#learnMore')

    //Projects Resizing
    $('#screenshot').css({
        'left': pixelfy($('#projects').outerWidth()),
        'display': width < 600 ? 'none' : 'inline'
    });

    if (width < 1250 && width > 900) {
        $('#screenshot').css({
            'display': 'inline',
            'width': pixelfy(2 * (width - $('#projects').outerWidth()))
        })
    } else if (width < 900) {
        $('#screenshot').css('width', pixelfy(600));
    } else {
        $('#screenshot').css('width', pixelfy(750));
    }
}

function cursor() {
    /*
    Animates the cursor on the landing page
    */
    var cursorOn = true

    // Infinitely toggle the cursor on and off
    window.setInterval(function () {
        cursorOn = !cursorOn
        $('#cursor').css('display', cursorOn ? 'inline' : 'none')
    }, 800)

}

async function introAnimation() {
    /*
    Types out the subtext when a user first loads the page
    */
    var text = 'A detail oriented software engineer.'

    $('#subtext').text('') // Clear the current text
    $('#cursor').css({
        'left': pixelfy($('#subtext').width()),
        'display': 'inline'
    })

    await sleep(250) // Don't play the animation immediately

    // "Type" out the text
    for (var i = 0; i < text.length + 1; i++) {
        await sleep(80)
        $('#subtext').text(text.substring(0, i))
        $('#cursor').css('left', pixelfy($('#subtext').width()))
    }

    cursor() // Start the cursor animation
    resize() // Resize everything in case of some odd glitches
}

function navHandler(tag) {
    /*
    Handles when a button in the navbar is clicked.

    Parameters:
        tag: The name of section
    */
    var section = ['landingPage', 'aboutMe', 'education', 'experience', 'projects'] // All of the section names
    var index = section.indexOf(tag) - 1 // Get the section above the given section
    var element = $('#' + section[index]) // Get the section above

    window.scrollTo(0, element.offset().top + element.height()) // Scroll to the bottom of the previous section
}

function peekNav() {
    /*
    Shows the navbar when the user hovers their mouse over the top of the screen.
    */
    // Show the navbar
    hidden = false;
    count = 0;
    $('#navbar').css('top', '0px')
}

function navbarHandler() {
    /*
    Handles hiding the navbar when scrolling down. Note: No animation is done in
    JS. The navbar CSS has a transition set for top, so no animation is needed.
    */
    let scroll = this.scrollY // Get the current scroll position

    if (scroll > 70) {
        // If scrolled 70px or more down the page, set the navbar to fixed
        $('#navbar').css('position', 'fixed')
        $('#navbar').css('boxShadow', '0px 0px 10px black')

        if (onTop) {
            // If this is the first time past 70px, hide the navbar
            onTop = false;
            count = 6 // Set count to more than 5 so the navbar doesn't show
            $('#navbar').addClass('notransition'); // Disable transitions
            $('#navbar').css('top', '-70px')
            $('#navbar').position(); // Trigger a reflow, flushing the CSS changes
            $('#navbar').removeClass('notransition'); // Re-enable transitions
            /*
            The code above disables any animation from an initial scroll from the top. Without
            this code, the navbar appears but the immediately animates away. This fixes that. 
            */
        }
    } else {
        // If the user is at the top of the page, set the scrollbar to not fixed.
        count = 0
        onTop = true;
        $('#navbar').css('position', 'absolute')
        $('#navbar').css('boxShadow', '')
    }

    if (lastScroll - scroll < 0 && !hidden) { // Check if the user is scrolling down
        if (count > 5) { // Check if the user has been scrolling down for awhile
            // Hide the navbar
            hidden = true
            $('#navbar').css('top', '-70px')
        } else {
            count += 1
        }
    } else if (lastScroll - scroll > 0) { // Check if the user is scrolling up
        // Show the navbar
        count = 0
        hidden = false
        $('#navbar').css('top', '0px')
    }

    lastScroll = scroll
}

function experienceHandler(tag) {
    /*
    Handles the tabs of the experience section.

    Parameters:
        tag: The tab name
    */
    var tabs = ['volunteer', 'skills', 'coursework'] // All of the tab names
    activeButton = tag // Set the active button to the given tag

    for (var i = 0; i < tabs.length; i++) { // Iterate over each tab name
        var currentTab = tabs[i]
        var activeTab = currentTab == tag
        var color = activeTab ? '#a6e22e' : '#575757' // The color is green if the ith tab is the active tab. Grey otherwise

        $('#' + currentTab + 'Button').css({
            'color': color,
            'border-left': '2px solid ' + color.toString()
        })

        $('#' + currentTab + 'Container').css('display', activeTab ? 'inline' : 'none') // Shows the active container and hides the others.
    }
}

function experienceHover(tag, over) {
    /*
    Handles hovering for the experience tabs. CSS hovering doesn't work after color is changed
    with JQuery.

    Parameters:
        tag: The tab name
        over: Boolean. True if the mouse is currently hovering. False otherwise.
    */
    var color = over || tag == activeButton ? '#a6e22e' : '#575757' // Color is green if the mouse is hovered or if this tab is the active tab. Grey otherwise.

    // Set the text and line to color
    $('#' + tag + 'Button').css({
        'color': color,
        'border-left': '2px solid ' + color.toString()
    })
}

$(document).ready(function () {
    //Set up Navbar listeners
    $('#learnMore').on('click', function () { navHandler('aboutMe') })
    $('#navAboutMe').on('click', function () { navHandler('aboutMe') })
    $('#navEducation').on('click', function () { navHandler('education') })
    $('#navExperience').on('click', function () { navHandler('experience') })
    $('#navProjects').on('click', function () { navHandler('projects') })
    $('#navbarDetector').mouseover(peekNav)

    //Set up experience listeners
    $('#volunteerButton').on('click', function () { experienceHandler('volunteer') })
    $('#volunteerButton').mouseover(function () { experienceHover('volunteer', true) })
    $('#volunteerButton').mouseleave(function () { experienceHover('volunteer', false) })
    $('#skillsButton').on('click', function () { experienceHandler('skills') })
    $('#skillsButton').mouseover(function () { experienceHover('skills', true) })
    $('#skillsButton').mouseleave(function () { experienceHover('skills', false) })
    $('#courseworkButton').on('click', function () { experienceHandler('coursework') })
    $('#courseworkButton').mouseover(function () { experienceHover('coursework', true) })
    $('#courseworkButton').mouseleave(function () { experienceHover('coursework', false) })
    experienceHandler('volunteer') //Set the starting tab to the volunteer tab

    resize()
    introAnimation()
})

$(window).resize(resize)
$(window).scroll(navbarHandler)
