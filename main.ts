input.onButtonPressed(Button.A, function () {
    player1 = randint(0, 10)
    basic.showNumber(player1)
    if (player1 > player2) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
    } else if (player1 < player2) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . #
            # # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    player2 = randint(0, 10)
    basic.showNumber(player2)
})
let player2 = 0
let player1 = 0
player1 = 0
player2 = 0
