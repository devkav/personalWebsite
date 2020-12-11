function sleep(ms) {
    /*
    Pauses the program for a given amount of time

    Parameters:
        ms: The amount of time to pause for (in milliseconds)
    */
    return new Promise(resolve => setTimeout(resolve, ms))
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

$(document).ready(introAnimation)