radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showNumber(Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength)))
        Distance = Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    } else if (receivedNumber == 1) {
        music.setVolume(255)
        music.playMelody("G - C - G - C - ", 120)
        OLED.writeStringNewLine("Unlock")
        basic.pause(5000)
        OLED.clear()
    } else if (receivedNumber == 2) {
        music.setVolume(255)
        music.playMelody("G - - - C - - - ", 120)
        OLED.writeStringNewLine("Lock")
        basic.pause(5000)
        OLED.clear()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(255)
    music.playMelody("C - C - C - C - ", 140)
    OLED.writeStringNewLine("System Checking,For your Safety Please Seat Belt Fasten")
    basic.pause(5000)
    OLED.clear()
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
    music.playMelody("C D E - G B C5 - ", 150)
    OLED.writeStringNewLine("Mileage n km Fuel economy n.n km/L Drive Time n h n m, Goodbye")
    basic.pause(5000)
    OLED.clear()
})
let Distance = 0
radio.setGroup(77)
radio.setTransmitPower(7)
OLED.init(128, 128)
basic.forever(function () {
    if (Distance > 70) {
        music.setVolume(255)
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 500)
        pins.digitalWritePin(DigitalPin.P1, 1)
        OLED.writeStringNewLine("Ryujunhyuk")
        basic.pause(5000)
        OLED.clear()
    } else if (50 < Distance && Distance < 70) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (Distance < 50) {
        music.setVolume(255)
        music.playMelody("G E C - G B C5 - ", 250)
        OLED.writeStringNewLine("Welcome,Gyeonggi 71 Ba 4244")
        basic.pause(5000)
        OLED.clear()
        basic.pause(60000)
    }
})
