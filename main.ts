enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
namespace SpriteKind {
    export const player1 = SpriteKind.create()
    export const player2 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    los_karta1 = kupka1.shift()
    reka1.push(los_karta1)
    status1.say(kupka1.length)
    los_karta2 = kupka2.shift()
    reka2.push(los_karta2)
    status2.say(kupka2.length)
    karta2.setImage(lista_kart_obrazy[los_karta2])
    doDisplay(1)
    doMove()
})
function doCzysc () {
    sprites.destroyAllSpritesOfKind(SpriteKind.player1)
    sprites.destroyAllSpritesOfKind(SpriteKind.player2)
    status1.setImage(img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `)
    status2.setImage(img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `)
    mySprite.setImage(img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `)
}
function doMove () {
    los_karta1 = reka1[reka1.length - 1]
    los_karta2 = reka2[reka2.length - 1]
    if (los_karta1 % 13 + 1 < los_karta2 % 13 + 1) {
        status2.setImage(img`
            f f f f f f f f f f f f f f f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f f 5 5 5 5 5 5 5 5 5 5 f f f 
            f f f f 5 5 5 5 5 5 5 5 f f f f 
            f f f f f f f e e f f f f f f f 
            f f f f f f f e e f f f f f f f 
            f f f f f f f e e f f f f f f f 
            f f f f f f e e e e f f f f f f 
            f f f f f e e e e e e f f f f f 
            f f f f f f f f f f f f f f f f 
            `)
        dlugreka = reka1.length - 1
        for (let index = 0; index <= dlugreka; index++) {
            kupka2.push(reka1.removeAt(0))
        }
        dlugreka = reka2.length - 1
        for (let index = 0; index <= dlugreka; index++) {
            kupka2.push(reka2.removeAt(0))
        }
    } else if (los_karta1 % 13 + 1 > los_karta2 % 13 + 1) {
        status1.setImage(img`
            f f f f f f f f f f f f f f f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f f 5 5 5 5 5 5 5 5 5 5 f f f 
            f f f f 5 5 5 5 5 5 5 5 f f f f 
            f f f f f f f e e f f f f f f f 
            f f f f f f f e e f f f f f f f 
            f f f f f f f e e f f f f f f f 
            f f f f f f e e e e f f f f f f 
            f f f f f e e e e e e f f f f f 
            f f f f f f f f f f f f f f f f 
            `)
        dlugreka = reka1.length - 1
        for (let index = 0; index <= dlugreka; index++) {
            kupka1.push(reka1.removeAt(0))
        }
        dlugreka = reka2.length - 1
        for (let index = 0; index <= dlugreka; index++) {
            kupka1.push(reka2.removeAt(0))
        }
    } else {
        mySprite.setPosition(80, 100)
        mySprite.setImage(img`
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 4 4 4 5 5 4 4 4 2 2 2 . 
            . 2 2 5 5 d 4 5 5 5 4 4 4 4 2 . 
            . 2 4 5 5 5 5 d 5 5 5 4 5 4 2 2 
            . 2 4 d d 5 5 5 5 5 5 d 4 4 4 2 
            2 4 5 5 d 5 5 5 d d d 5 5 5 4 4 
            2 4 5 5 4 4 4 d 5 5 d 5 5 5 4 4 
            4 4 4 4 . . 2 4 5 5 . . 4 4 4 4 
            . . b b b b 2 4 4 2 b b b b . . 
            . b d d d d 2 4 4 2 d d d d b . 
            b d d b b b 2 4 4 2 b b b d d b 
            b d d b b b b b b b b b b d d b 
            b b d 1 1 3 1 1 d 1 d 1 1 d b b 
            . . b b d d 1 1 3 d d 1 b b . . 
            . . 2 2 4 4 4 4 4 4 4 4 2 2 . . 
            . . . 2 2 4 4 4 4 4 2 2 2 . . . 
            `)
        music.bigCrash.play()
        pause(2000)
        doWojna()
    }
    if (kupka1.length == 0) {
        game.over(false)
    } else if (kupka2.length == 0) {
        game.over(true)
    }
}
function doWojna () {
    if (kupka1.length >= 2) {
        reka1.push(kupka1.shift())
        reka1.push(kupka1.shift())
    } else {
        game.over(false)
    }
    if (kupka2.length >= 2) {
        reka2.push(kupka2.shift())
        reka2.push(kupka2.shift())
    } else {
        game.over(true)
    }
    doDisplay(1)
    doMove()
}
function doLosowanie () {
    for (let index = 0; index <= 51; index++) {
        jest_taki = 1
        while (jest_taki == 1) {
            jest_taki = 0
            losuj = randint(0, 51)
            for (let value of kupka1) {
                if (value == losuj) {
                    jest_taki = 1
                }
            }
            for (let value of kupka2) {
                if (value == losuj) {
                    jest_taki = 1
                }
            }
        }
        if (jest_taki == 0) {
            if (index % 2 == 0) {
                kupka1.push(losuj)
            } else {
                kupka2.push(losuj)
            }
        }
    }
}
function doDisplay (gracz: number) {
    doCzysc()
    dlugreka = reka1.length - 1
    for (let index = 0; index <= dlugreka; index++) {
        karta1 = sprites.create(img`
            ...........ccccc66666...........
            ........ccc4444444444666........
            ......cc444444444bb4444466......
            .....cb4444bb4444b5b444444b.....
            ....eb4444b5b44444b44444444b....
            ...ebb44444b4444444444b444446...
            ..eb6bb444444444bb444b5b444446..
            ..e6bb5b44444444b5b444b44bb44e..
            .e66b4b4444444444b4444444b5b44e.
            .e6bb444444444444444444444bb44e.
            eb66b44444bb444444444444444444be
            eb66bb444b5b44444444bb44444444be
            fb666b444bb444444444b5b4444444bf
            fcb666b44444444444444bb444444bcf
            .fbb6666b44444444444444444444bf.
            .efbb66666bb4444444444444444bfe.
            .86fcbb66666bbb44444444444bcc688
            8772effcbbbbbbbbbbbbbbbbcfc22778
            87722222cccccccccccccccc22226678
            f866622222222222222222222276686f
            fef866677766667777776667777fffef
            fbff877768f86777777666776fffffbf
            fbeffeefffeff7766688effeeeefeb6f
            f6bfffeffeeeeeeeeeeeeefeeeeebb6e
            f66ddfffffeeeffeffeeeeeffeedb46e
            .c66ddd4effffffeeeeeffff4ddb46e.
            .fc6b4dddddddddddddddddddb444ee.
            ..ff6bb444444444444444444444ee..
            ....ffbbbb4444444444444444ee....
            ......ffebbbbbb44444444eee......
            .........fffffffcccccee.........
            ................................
            `, SpriteKind.player1)
        karta1.setPosition(18, 18 + index * 10)
        karta1.z = index
        if (index % 2 == 1) {
            karta1.setImage(img`
                77777777777777777777777777777777
                7ffffffffffffffffffffffffffffff7
                7f8888888888888888888888888888f7
                7f8888888888888888888888888888f7
                7f8888888888888888888888888888f7
                7f8888888555555588888888888888f7
                7f8888885888888858888888888888f7
                7f8888885888888858888888888888f7
                7f8888885888888858888888888888f7
                7f8888885888888858885555555888f7
                7f8888885888888858858888888588f7
                7f8888885888888858588888888858f7
                7f8888885888888858588888888858f7
                7f8888888555555588588888888858f7
                7f8888888888888888588888888858f7
                7f8888555555588888588888888858f7
                7f8885888888858888588888888858f7
                7f8858888888885888588888888858f7
                7f8588888888888588858888888588f7
                7f8588888888888588885555555888f7
                7f8588888888888588888888888888f7
                7f8588888888888588888888888888f7
                7f8588888888888588888888888888f7
                7f8588888888888588888888888888f7
                7f8588888888888588888888888888f7
                7f8858888888885888888888888888f7
                7f8885888888858888888888888888f7
                7f8888555555588888888888888888f7
                7f8888888888888888888888888888f7
                7f8888888888888888888888888888f7
                7ffffffffffffffffffffffffffffff7
                77777777777777777777777777777777
                `)
        } else {
            karta1.setImage(lista_kart_obrazy[reka1[index]])
        }
        karta1 = sprites.create(img`
            ...........ccccc66666...........
            ........ccc4444444444666........
            ......cc444444444bb4444466......
            .....cb4444bb4444b5b444444b.....
            ....eb4444b5b44444b44444444b....
            ...ebb44444b4444444444b444446...
            ..eb6bb444444444bb444b5b444446..
            ..e6bb5b44444444b5b444b44bb44e..
            .e66b4b4444444444b4444444b5b44e.
            .e6bb444444444444444444444bb44e.
            eb66b44444bb444444444444444444be
            eb66bb444b5b44444444bb44444444be
            fb666b444bb444444444b5b4444444bf
            fcb666b44444444444444bb444444bcf
            .fbb6666b44444444444444444444bf.
            .efbb66666bb4444444444444444bfe.
            .86fcbb66666bbb44444444444bcc688
            8772effcbbbbbbbbbbbbbbbbcfc22778
            87722222cccccccccccccccc22226678
            f866622222222222222222222276686f
            fef866677766667777776667777fffef
            fbff877768f86777777666776fffffbf
            fbeffeefffeff7766688effeeeefeb6f
            f6bfffeffeeeeeeeeeeeeefeeeeebb6e
            f66ddfffffeeeffeffeeeeeffeedb46e
            .c66ddd4effffffeeeeeffff4ddb46e.
            .fc6b4dddddddddddddddddddb444ee.
            ..ff6bb444444444444444444444ee..
            ....ffbbbb4444444444444444ee....
            ......ffebbbbbb44444444eee......
            .........fffffffcccccee.........
            ................................
            `, SpriteKind.player2)
        karta1.setPosition(141, 18 + index * 10)
        karta1.z = index
        if (index % 2 == 1) {
            karta1.setImage(img`
                77777777777777777777777777777777
                7ffffffffffffffffffffffffffffff7
                7f8888888888888888888888888888f7
                7f8888888888888888888888888888f7
                7f8888888888888888888888888888f7
                7f8888888555555588888888888888f7
                7f8888885888888858888888888888f7
                7f8888885888888858888888888888f7
                7f8888885888888858888888888888f7
                7f8888885888888858885555555888f7
                7f8888885888888858858888888588f7
                7f8888885888888858588888888858f7
                7f8888885888888858588888888858f7
                7f8888888555555588588888888858f7
                7f8888888888888888588888888858f7
                7f8888555555588888588888888858f7
                7f8885888888858888588888888858f7
                7f8858888888885888588888888858f7
                7f8588888888888588858888888588f7
                7f8588888888888588885555555888f7
                7f8588888888888588888888888888f7
                7f8588888888888588888888888888f7
                7f8588888888888588888888888888f7
                7f8588888888888588888888888888f7
                7f8588888888888588888888888888f7
                7f8858888888885888888888888888f7
                7f8885888888858888888888888888f7
                7f8888555555588888888888888888f7
                7f8888888888888888888888888888f7
                7f8888888888888888888888888888f7
                7ffffffffffffffffffffffffffffff7
                77777777777777777777777777777777
                `)
        } else {
            karta1.setImage(lista_kart_obrazy[reka2[index]])
        }
        pause(1000)
    }
}
let losuj = 0
let jest_taki = 0
let dlugreka = 0
let los_karta2 = 0
let los_karta1 = 0
let nextCard: Card = null
let reka2: number[] = []
let reka1: number[] = []
let kupka2: number[] = []
let kupka1: number[] = []
let lista_kart_obrazy: Image[] = []
let karta2: Sprite = null
let status2: Sprite = null
let status1: Sprite = null
let karta1: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let myShoe = playingCards.createShoeSimple(DeckType.Poker, 1, 0)
karta1 = sprites.create(img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    .....cb4444bb4444b5b444444b.....
    ....eb4444b5b44444b44444444b....
    ...ebb44444b4444444444b444446...
    ..eb6bb444444444bb444b5b444446..
    ..e6bb5b44444444b5b444b44bb44e..
    .e66b4b4444444444b4444444b5b44e.
    .e6bb444444444444444444444bb44e.
    eb66b44444bb444444444444444444be
    eb66bb444b5b44444444bb44444444be
    fb666b444bb444444444b5b4444444bf
    fcb666b44444444444444bb444444bcf
    .fbb6666b44444444444444444444bf.
    .efbb66666bb4444444444444444bfe.
    .86fcbb66666bbb44444444444bcc688
    8772effcbbbbbbbbbbbbbbbbcfc22778
    87722222cccccccccccccccc22226678
    f866622222222222222222222276686f
    fef866677766667777776667777fffef
    fbff877768f86777777666776fffffbf
    fbeffeefffeff7766688effeeeefeb6f
    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
    f66ddfffffeeeffeffeeeeeffeedb46e
    .c66ddd4effffffeeeeeffff4ddb46e.
    .fc6b4dddddddddddddddddddb444ee.
    ..ff6bb444444444444444444444ee..
    ....ffbbbb4444444444444444ee....
    ......ffebbbbbb44444444eee......
    .........fffffffcccccee.........
    ................................
    `, SpriteKind.Player)
status1 = sprites.create(img`
    . . . . . . . e e e e . . . . . 
    . . . . . e e 4 5 5 5 e e . . . 
    . . . . e 4 5 6 2 2 7 6 6 e . . 
    . . . e 5 6 6 7 2 2 6 4 4 4 e . 
    . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
    . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
    . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
    e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
    e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
    e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
    e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
    e 5 e c 5 4 5 4 5 5 5 e e . . . 
    e 5 e e 5 5 5 5 5 4 e . . . . . 
    4 5 4 e 5 5 5 5 e e . . . . . . 
    . 4 5 4 5 5 4 e . . . . . . . . 
    . . 4 4 e e e . . . . . . . . . 
    `, SpriteKind.Player)
status2 = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.Player)
karta1.setPosition(18, 18)
status1.setPosition(50, 100)
status2.setPosition(114, 100)
karta2 = sprites.create(img`
    ...........222222ee.............
    .........2233333bbeee...........
    .......2233d1111333bee..........
    ......23ddd111dd1d33eee.........
    .....23d1333d1d33d13bee.........
    ....23d133333d1d33313eee........
    ...2311333333ddd3333dbeee.......
    ..2313333333333ddd33d3e44e......
    ..21d3333333333ddd333db44ee.....
    .2313333333333dd33333db444ee....
    .2dd3333333333d333333d3b444e....
    2311d333333333d333333ddbb444e...
    2d131d33333333d333333d1b6644e...
    2d33dd33333333d333333d1b44444e..
    21333d3333333d3333333d1644664ee.
    21333d333333d33333333d16b64464be
    21333dddd33dd33333333d1646446b6e
    2133333dd11dd33333333d1644b6446e
    e133333d1d31d33333333d1b4446446e
    e1333331d3331333333331d6bb44b6e.
    e1333331dd331b3333333136bb6bb6e.
    e13333331dd1db33333331b6b66bbe..
    edd33333311db3333333dd6bb6bbe...
    e3d3333333d333333333136beebbe...
    .edd3333333d3333333ddbfeebbe....
    .e3dd33333dd3333333d3efeeee.....
    ..e3dd333d1333333dd3bfffff......
    ...e311111ddd333dddbffeef.......
    ....eed1d33d111113befeff........
    ......eeb333dd13beffff..........
    ........eeeefffffee.............
    ................................
    `, SpriteKindLegacy.Player)
karta2.setPosition(141, 18)
karta1.say("Press A for next card", 2000)
lista_kart_obrazy = []
kupka1 = []
kupka2 = []
reka1 = []
reka2 = []
for (let index = 0; index < 52; index++) {
    nextCard = myShoe.nextCard
    lista_kart_obrazy.push(myShoe.getCardImage(nextCard, CardSpriteSize.ThirtyTwoByThirtyTwo))
}
doLosowanie()
game.onUpdateInterval(1000, function () {
	
})
