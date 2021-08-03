input.onButtonPressed(Button.A, function () {
    radio.sendString("P1FULL")
})
radio.onReceivedString(function (receivedString) {
    if ("P1FULL".compare(receivedString) == 0) {
        led.plot(1, 1)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
    } else if ("P1EMPTY".compare(receivedString) == 0) {
        led.unplot(1, 1)
        led.unplot(1, 2)
        led.unplot(1, 3)
        led.unplot(0, 1)
        led.unplot(0, 2)
        led.unplot(0, 3)
    } else if ("P2FULL".compare(receivedString) == 0) {
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
    } else if ("P2EMPTY".compare(receivedString) == 0) {
        led.unplot(3, 1)
        led.unplot(3, 2)
        led.unplot(3, 3)
        led.unplot(4, 1)
        led.unplot(4, 2)
        led.unplot(4, 3)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("P2FULL")
})
radio.setGroup(179)
