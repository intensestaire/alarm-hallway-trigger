music.play(music.stringPlayable("C5 B A G F A B A ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("B C5 A G F C5 B C5 ", 120), music.PlaybackMode.UntilDone)
basic.pause(1000)
let ambient_sound = input.soundLevel() + 25
basic.forever(function () {
    if (input.soundLevel() > ambient_sound) {
        for (let index = 0; index < 4; index++) {
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            music.play(music.createSoundExpression(WaveShape.Sine, 3000, 3000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
        pins.servoWritePin(AnalogPin.P0, 180)
        ambient_sound = 10000
    }
})
