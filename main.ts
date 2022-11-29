radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showNumber(Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength)))
        Distance = Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    }
})
let Distance = 0
radio.setGroup(77)
radio.setTransmitPower(7)
OLED.init(128, 128)
basic.forever(function () {
    radio.sendNumber(0)
    if (Distance > 70) {
        music.setVolume(123)
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 40)
        pins.digitalWritePin(DigitalPin.P1, 1)
        OLED.writeStringNewLine("Welcome,Gyeonggi 71 Ba 4344")
        basic.pause(5000)
        OLED.clear()
    } else if (50 < Distance && Distance < 70) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (Distance < 50) {
        music.setVolume(123)
        music.playMelody("G E C - G B C5 - ", 250)
        OLED.writeStringNewLine("Welcome,Gyeonggi 71 Ba 4344")
        basic.pause(5000)
        OLED.clear()
    }
})
