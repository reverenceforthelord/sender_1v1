input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    radio.sendString("A")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("C")
    radio.sendString("C")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    radio.sendString("B")
})
let acc_y = 0
let acc_x = 0
basic.showString("S")
radio.setGroup(1)
let snv_x = 10
let snv_y = 10
let pre_x = 0
let pre_y = 0
basic.forever(function () {
    acc_x = input.acceleration(Dimension.X)
    acc_y = input.acceleration(Dimension.Y)
    if (Math.abs(acc_x - pre_x) > snv_x) {
        radio.sendValue("x", acc_x)
    }
    if (Math.abs(acc_y - pre_y) > snv_y) {
        radio.sendValue("y", acc_y)
    }
    pre_x = acc_x
    pre_y = acc_y
})
