let RadioGroup = 0
let Received = 0
radio.onReceivedNumber(function (receivedNumber) {
    Received = receivedNumber
})
Received = 0
RadioGroup = 0
radio.setGroup(RadioGroup)
basic.showNumber(RadioGroup)
basic.pause(1000)
basic.clearScreen()
custom.motorTrimSet(gigglebotWhichTurnDirection.Right, 5)
basic.forever(function () {
    if (Received == 0) {
        custom.stop()
    } else if (Received == 1) {
        custom.setSpeed(gigglebotWhichMotor.Both, gigglebotWhichSpeed.Normal)
        custom.driveStraight(gigglebotWhichDriveDirection.Forward)
    } else if (Received == 2) {
        custom.setSpeed(gigglebotWhichMotor.Both, gigglebotWhichSpeed.Slowest)
        custom.driveStraight(gigglebotWhichDriveDirection.Backward)
    } else if (Received == 3) {
        custom.setSpeed(gigglebotWhichMotor.Both, gigglebotWhichSpeed.Slower)
        custom.steer(30, gigglebotWhichTurnDirection.Right)
    } else if (Received == 4) {
        custom.setSpeed(gigglebotWhichMotor.Both, gigglebotWhichSpeed.Slower)
        custom.steer(30, gigglebotWhichTurnDirection.Left)
    } else if (Received == 5) {
        custom.setSpeed(gigglebotWhichMotor.Both, gigglebotWhichSpeed.Slowest)
        custom.gigglebotSpin(gigglebotWhichTurnDirection.Right)
    } else if (Received == 6) {
        custom.setSpeed(gigglebotWhichMotor.Both, gigglebotWhichSpeed.Slowest)
        custom.gigglebotSpin(gigglebotWhichTurnDirection.Left)
    }
})
