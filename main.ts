/**
 * This is the main file for your project.
 *
 * Create images, tilemaps, animations, and songs using the
 * asset explorer in VS Code. You can reference those assets
 * using the tagged templates on the assets namespace:
 *
 *     assets.image`myImageName`
 *     assets.tilemap`myTilemapName`
 *     assets.tile`myTileName`
 *     assets.animation`myAnimationName`
 *     assets.song`mySongName`
 *
 * New to MakeCode Arcade? Try creating a new project using one
 * of the templates to learn about Sprites, Tilemaps, Animations,
 * and more! Or check out the reference docs here:
 *
 * https://arcade.makecode.com/reference
 */

// food test
// let imgpizza = assets.image`imgpizza`
// let imgicrecream = assets.image`imgicecream`
// let imghamburger = assets.image`imghamburger`
// let imgdesktop = assets.image`imgdesktop`

// let desktop = sprites.create(assets.image`imgdesktop`)

// controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
//     let num = Math.randomRange(1, 6)
//     sprites.destroyAllSpritesOfKind(SpriteKind.Food)
//     if (num < 3) {
//         let pizza = sprites.create(assets.image`imgpizza`, SpriteKind.Food)
//         pizza.setPosition(30, 40)
//         desktop.say("pizza")
//     } else if (num < 5) {
//         let iceCream = sprites.create(
//             assets.image`imgicecream`,
//             SpriteKind.Food
//         )
//         iceCream.setPosition(30, 40)
//         desktop.say("ice cream")
//     } else {
//         let hamburger = sprites.create(
//             assets.image`imghamburger`,
//             SpriteKind.Food
//         )
//         hamburger.setPosition(30, 40)
//         desktop.say("hamburger")
//     }
// })

// config --local user.name myGithub
// config --local user.email myGithub@mail

// -----

// dash mechanic

// let projectile: Sprite = null
// let direction = 0
// let movingLeft = false
// // let prevSpeed = 0
// let dashing = false
// controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
//     movingLeft = true
// })
// controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
//     movingLeft = false
// })
// controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
//     if (!(dashing)) {
//         dashing = true
//         // prevSpeed = hero.vx
//         controller.moveSprite(hero, 0, 0)
//         if (movingLeft) {
//             direction = -1
//         } else {
//             direction = 1
//         }
//         hero.setVelocity(direction * 200, 0)
//         for (let index = 0; index <= 3; index++) {
//             timer.background(function () {
//                 projectile = sprites.createProjectileFromSprite(hero.image, hero, 0 - direction * 5, 0)
//                 projectile.lifespan = 40
//             })
//             pause(20)
//         }
//         timer.after(50, function () {
//             // hero.vx = prevSpeed
//             hero.vx = 0
//             controller.moveSprite(hero, 50, 0)
//             dashing = false
//         })
//     }
// })

// variables
let hero = sprites.create(assets.image`heroBase0`, SpriteKind.Player)
let gravity = 500
let heroJumpHeight = 20
let heroJumpVelocity = 0 - Math.sqrt(2 * (gravity * heroJumpHeight))
let doubleJump = true
let jumpNum = 0
let dashAfterImage: Sprite = null
let dashDirection = 0
let isDashing = false
let isUpPressed = false
let isDownPressed = false
let isFacingLeft = characterAnimations.matchesRule(hero, Predicate.FacingLeft)
let isFacingRight = characterAnimations.matchesRule(hero, Predicate.FacingRight)
hero.ay = gravity

scene.cameraFollowSprite(hero)

// maps
tiles.loadMap(tiles.createSmallMap(assets.tilemap`levelTest`))
hero.setPosition(90, 101)

// controls
controller.moveSprite(hero, 50, 0)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
    }
    if (jumpNum < 2) {
        jumpNum++
        hero.vy = heroJumpVelocity
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (hero.vy < 0) {
        hero.vy = 0
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!isDashing) {
        isDashing = true
        controller.moveSprite(hero, 0, 0)
        if (isFacingRight && !isUpPressed && !isDownPressed) {
            hero.setVelocity(1 * 200, 0)
        } else if (isFacingLeft && !isUpPressed && !isDownPressed) {
            hero.setVelocity(-1 * 200, 0)
        } else if (isUpPressed && !isDownPressed) {
            hero.setVelocity(0, 1 * 200)
        } else if (!isUpPressed && isDownPressed) {
            hero.setVelocity(0, -1 * 200)
        }
        /* {
            if (isFacingLeft) {
                dashDirection = -1
            } else if (isFacingRight) {
                dashDirection = 1
            }
        } */

        hero.setVelocity(dashDirection * 200, 0)

        timer.after(100, function () {
            hero.vx = 0
            hero.vy = 0
            controller.moveSprite(hero, 50, 0)
            isDashing = false
        })
    }
})
function makeDashAfterImage() {
    for (let index = 0; index <= 3; index++) {
        timer.background(function () {
            dashAfterImage = sprites.createProjectileFromSprite(
                hero.image,
                hero,
                0 - dashDirection * 5,
                0
            )
            dashAfterImage.lifespan = 40
        })
        pause(20)
    }
}
function defineDashX() {
    if (isDownPressed || isUpPressed) {
        dashDirection = 0
    } else {
        if (isFacingLeft) {
            dashDirection = -1
        } else if (isFacingRight) {
            dashDirection = 1
        }
    }
    return dashDirection
}
function defineDashY() {}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    isUpPressed = true
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    isUpPressed = false
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    isDownPressed = true
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    isDownPressed = false
})

// test

// animations
// idle right
characterAnimations.loopFrames(
    hero,
    [
        assets.image`heroIdle0`,
        assets.image`heroIdle1`,
        assets.image`heroIdle2`,
        assets.image`heroIdle3`,
        assets.image`heroIdle4`,
    ],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
)
// idle left
characterAnimations.loopFrames(
    hero,
    [
        assets.image`heroIdleRev0`,
        assets.image`heroIdleRev1`,
        assets.image`heroIdleRev2`,
        assets.image`heroIdleRev3`,
        assets.image`heroIdleRev4`,
    ],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
)
// moving right
characterAnimations.loopFrames(
    hero,
    [
        assets.image`heroMoving0`,
        assets.image`heroMoving1`,
        assets.image`heroMoving2`,
        assets.image`heroMoving4`,
        assets.image`heroMoving5`,
        assets.image`heroMoving6`,
        assets.image`heroMoving7`,
        assets.image`heroMoving8`,
    ],
    100,
    characterAnimations.rule(
        Predicate.Moving,
        Predicate.FacingRight,
        Predicate.HittingWallDown
    )
)
// moving left
characterAnimations.loopFrames(
    hero,
    [
        assets.image`heroMovingRev0`,
        assets.image`heroMovingRev1`,
        assets.image`heroMovingRev2`,
        assets.image`heroMovingRev4`,
        assets.image`heroMovingRev5`,
        assets.image`heroMovingRev6`,
        assets.image`heroMovingRev7`,
        assets.image`heroMovingRev8`,
    ],
    100,
    characterAnimations.rule(
        Predicate.Moving,
        Predicate.FacingLeft,
        Predicate.HittingWallDown
    )
)
// jumping right

characterAnimations.runFrames(
    hero,
    [
        assets.image`heroMoving2`,
        assets.image`heroMoving4`,
        assets.image`heroMoving5`,
    ],
    50,
    characterAnimations.rule(Predicate.FacingRight)
)

// jumping left

characterAnimations.runFrames(
    hero,
    [
        assets.image`heroMovingRev2`,
        assets.image`heroMovingRev4`,
        assets.image`heroMovingRev5`,
    ],
    50,
    characterAnimations.rule(Predicate.FacingLeft)
)

// rising
// if (inAir) {

// }

// descending
// if (hero.vy > 0) {
//     characterAnimations.loopFrames(
//         hero,
//         [assets.image`heroRising0`, assets.image`heroRising1`],
//         100,
//         characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
//     )
// } else if (hero.vy < 0) {
//     characterAnimations.runFrames(
//         hero,
//         [assets.image`heroRising0`, assets.image`heroRising1`],
//         100,
//         characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
//     )
// }

// updates
game.onUpdate(() => {
    // Code in this function will run once per frame. MakeCode
    // Arcade games run at 30 FPS
    // console.log(hero.vy)
    // if (hero.vy < 0) {
    //     hero.say("rising")
    // } else if (hero.vy > 0) {
    //     hero.say("descending")
    // }
    // if (hero.isHittingTile(CollisionDirection.Bottom) === false) {
    //     if (controller.right.isPressed) {
    //         hero.say("right")
    //     } else if (controller.left.isPressed) {
    //         hero.say("left")
    //     }
    // }
    // hero.ax = 0
    // hero.say("hitting ground")
    // if (!hero.isHittingTile(CollisionDirection.Bottom)) {
    //     if (controller.right.isPressed()) {
    //         hero.say("air pressing right")
    //         hero.ax = 0 - 10
    //     } else if (controller.left.isPressed()) {
    //         hero.say("air pressing left")
    //         hero.ax = 10
    //     }
    // } else if (hero.isHittingTile(CollisionDirection.Bottom)) {
    // }
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        jumpNum = 0
    }
})

let pixs = [img`1`, img`1`, img`1`, img`1`, img`1`]
let x = 16
pixs.forEach(function (img) {
    let sprt = sprites.create(img)
    sprt.setPosition(x+=16, 16)
})
