controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (10 <= info.score()) {
        power2 += 1
        game.showLongText("You bought one extra click!", DialogLayout.Right)
        info.changeScoreBy(-10)
    } else {
        game.showLongText("You don't have enought clicks to buy a power!", DialogLayout.Bottom)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(power2)
    mySprite.startEffect(effects.spray, 100)
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
let power2 = 0
let mySprite: Sprite = null
scene.setBackgroundColor(11)
info.startCountdown(10)
game.splash("Press (A) to earn clicks!")
mySprite = sprites.create(img`
    .........bbbbb................
    ........bb111bb...............
    .......b1111111b..............
    ......bb1111111bb....bbb......
    ...bbbbd11111111bbbbbb1bb.....
    ..bb111dd111111111111111b.....
    .bb111111111111111111111b.....
    .b1111111111111111d11111bb....
    bb111111111111111d1111111bb...
    b111111111111111d111111111bb..
    bb111111111111111d111111111bb.
    .bbb11ddd111111111d11111111bb.
    ...bbbbbd1111111111bbb11bbbb..
    .......bb11111111bbb.bbbb.....
    ........bbb11111bb............
    ..........bbbbbbb.............
    `, SpriteKind.Player)
power2 = 1
