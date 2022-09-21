let degree = 0
basic.forever(function () {
    degree = input.compassHeading()
    if (degree < 45) {
        basic.showString("N")
    } else if (degree < 135) {
        basic.showString("W")
    } else if (degree < 225) {
        basic.showString("N")
    } else if (degree < 315) {
        basic.showString("E")
    } else if (input.isGesture(Gesture.FreeFall)) {
        basic.showString("CAUTION")
    } else if (input.logoIsPressed()) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    }
})
