radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # # .
            . . # . .
            . . . . .
            `)
    } else {
    	
    }
})
radio.setGroup(137)
