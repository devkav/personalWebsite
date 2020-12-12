function sleep(ms) {
    /*
    Pauses the program for a given amount of time

    Parameters:
        ms: The amount of time to pause for (in milliseconds)
    */
    return new Promise(resolve => setTimeout(resolve, ms))
}

function pixelfy(number) {
    /*
    Converts a number into a string and adds "px" to the end. 
    Example: 200 -> "200px"

    Parameters:
        number: The number being converted
    */
    return number.toString() + 'px'
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
    console.log(1)
    $('#homeButton').css('top', pixelfy(($(window).height() / 2) + $('#textbox404').height()))
    center('#homeButton')
}

async function introAnimation() {
    var text = 'Page Not Found'
    $('#cursor').css('display', 'inline')
    $('#subtext').text('')

    await sleep(250); // Don't play the animation immediately

    // "Type" out the text
    for (var i = 0; i < text.length + 1; i++) {
        await sleep(80);
        $('#subtext').text(text.substring(0, i))
        $('#cursor').css('left', $('#subtext').width() - $('#subtext').position().left)
    }

    cursor(); // Start the cursor animation
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

$(document).ready(function() {
    resize()
    introAnimation()
})

$(window).resize(resize)