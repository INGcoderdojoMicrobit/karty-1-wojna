enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    los_karta1 = randint(0, 51)
    karta1.say(los_karta1 % 13 + 1)
    los_karta2 = randint(0, 51)
    karta2.say(los_karta2 % 13 + 1)
    karta1.setImage(lista_kart_obrazy[los_karta1])
    karta2.setImage(lista_kart_obrazy[los_karta2])
    if (los_karta1 % 13 + 1 < los_karta2 % 13 + 1) {
        mySprite.setPosition(141, 60)
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
    } else if (los_karta1 % 13 + 1 > los_karta2 % 13 + 1) {
        mySprite.setPosition(18, 60)
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
    }
})
let los_karta2 = 0
let los_karta1 = 0
let nextCard: Card = null
let lista_kart_obrazy: Image[] = []
let karta2: Sprite = null
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
karta1.setPosition(18, 18)
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
karta1.say("Press A for next card")
lista_kart_obrazy = []
for (let index = 0; index < 52; index++) {
    nextCard = myShoe.nextCard
    lista_kart_obrazy.push(myShoe.getCardImage(nextCard, CardSpriteSize.ThirtyTwoByThirtyTwo))
}
