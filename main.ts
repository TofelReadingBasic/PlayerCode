input.onButtonPressed(Button.A, function () {
    radio.sendString("+")
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("-")
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
radio.setGroup(255)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendString("-")
    basic.pause(100)
})
basic.forever(function () {
    radio.sendString("-")
    basic.pause(100)
})
basic.forever(function () {
    radio.sendString("-")
    basic.pause(100)
})
basic.forever(function () {
    radio.sendString("-")
    basic.pause(100)
})
basic.forever(function () {
    radio.sendString("-")
    basic.pause(100)
})
basic.forever(function () {
    radio.sendString("-")
    basic.pause(100)
})
basic.forever(function () {
    radio.sendString("-")
    basic.pause(100)
})
basic.forever(function () {
    radio.sendString("-")
    basic.pause(100)
})
basic.forever(function () {
    radio.sendString("-")
    basic.pause(100)
})
basic.forever(function () {
    radio.sendString("-")
    basic.pause(100)
})
basic.forever(function () {
    radio.sendString("-")
    basic.pause(100)
})
/**
 * 이거 절대 폭1탄 코드 아님
 */
basic.forever(function () {
    radio.sendString("-")
    basic.pause(100)
})
