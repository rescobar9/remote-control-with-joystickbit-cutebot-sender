radio.setGroup(1)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("F")
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("B")
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("R")
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("L")
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("S")
    }
})
