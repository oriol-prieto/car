basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(70, 70)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(15, 90)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(90, 15)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        # # . # #
        # # . # #
        `)
})
