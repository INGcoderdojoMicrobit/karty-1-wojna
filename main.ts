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
    los_karta2 = kupka2.shift()
    reka2.push(los_karta2)
    doDisplay(1)
    doMove()
    pause(100)
})
function doCzysc () {
    for (let value of sprites.allOfKind(SpriteKind.player1)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.player2)) {
        value.destroy()
    }
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
        mySprite.setPosition(107, 40)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
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
        mySprite.setPosition(58, 40)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
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
        mySprite.setPosition(80, 60)
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
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `, SpriteKind.player1)
        karta1.setPosition(18, 18 + index * 10)
        karta1.z = index
        if (index % 2 == 1) {
            karta1.setImage(img`
                f777777777777777777777777777777f
                77111111111111111111111111111177
                71111111111111111111111111111117
                71188787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71111111111111111111111111111117
                77111111111111111111111111111177
                f777777777777777777777777777777f
                `)
        } else {
            karta1.setImage(lista_kart_obrazy[reka1[index]])
        }
        karta1 = sprites.create(img`
            4 4 4 . . 4 4 4 4 4 . . . . . . 
            4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
            b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
            . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
            . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
            b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
            c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
            c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
            c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
            . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
            . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
            . . c 4 4 d 4 4 4 4 4 d d 5 d c 
            . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
            . . . . c c b 4 4 4 b b 4 5 4 4 
            . . . . . . c c c c c c b b 4 . 
            `, SpriteKind.player2)
        karta1.setPosition(131, 18 + index * 10)
        karta1.z = index
        if (index % 2 == 1) {
            karta1.setImage(img`
                f777777777777777777777777777777f
                77111111111111111111111111111177
                71111111111111111111111111111117
                71188787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71178787878787878787878787878117
                71187878787878787878787878787117
                71111111111111111111111111111117
                77111111111111111111111111111177
                f777777777777777777777777777777f
                `)
        } else {
            karta1.setImage(lista_kart_obrazy[reka2[index]])
        }
        pause(1000)
    }
}
let karta1: Sprite = null
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
let mySprite: Sprite = null
mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
let myShoe = playingCards.createShoeSimple(DeckType.Poker, 1, 0)
mySprite.say("Press A for next card", 2000)
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
