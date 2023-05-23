let result = 0
input.onGesture(Gesture.Shake, function () {
    result = randint(0, 2)
    music.playMelody("A - A B - - A G ", 170)
    if (result == 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            `)
    } else {
        if (result == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
        } else {
            basic.showLeds(`
                # # . # #
                # # . # #
                . # . # .
                . . # . .
                . # . # .
                `)
        }
    }
})
basic.forever(function () {
	
})
