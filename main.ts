let red_val = 0
let green_val = 0
let blue_val = 0
let led4_val = 0
basic.forever(function () {
    red_val = randint(0, 255)
    green_val = randint(0, 255)
    blue_val = randint(0, 255)
    led4_val = randint(0, 255)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED1), red_val)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED2), green_val)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED3), blue_val)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED4), led4_val)
    basic.pause(200)
    basic.showNumber(Rover.Ultrasonic())
})
