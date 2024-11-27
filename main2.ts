
// //
// // variables
// //
// let gravity = 500


// let hero = {
//     sprite: sprites.create(assets.image`heroBase0`, SpriteKind.Player),
//     jumpHeight: 20,
//     doubleJump: true,
//     jumpNum: 0,
//     dashAfterImage: sprites.create(img`.`),
//     dashDirection: 0,
//     isDashing: false,
//     isUpPressed: false,
//     isDownPressed: false,
//     jumpVelocity: 0,
//     isFacingLeft: false,
//     isFacingRight: false,
// }
// // hero.dashAfterImage =  Sprite:null
// hero.sprite.ay = gravity
// hero.jumpVelocity = 0 - Math.sqrt(2 * (gravity * hero.jumpHeight))
// hero.isFacingLeft = characterAnimations.matchesRule(
//     hero.sprite,
//     Predicate.FacingLeft
// )
// hero.isFacingRight = characterAnimations.matchesRule(
//     hero.sprite,
//     Predicate.FacingRight
// )



// // camera follow sprite
// scene.cameraFollowSprite(hero.sprite)
// // load maps
// tiles.loadMap(tiles.createSmallMap(assets.tilemap`levelTest`))
// hero.sprite.setPosition(90, 101)

// //
// // functions
// //
// function jump() {}
// /* function makeDashAfterImage() {
//     for (let index = 0; index <= 3; index++) {
//         timer.background(function () {
//             hero.
// hero.dashAfterImage = sprites.createProjectileFromSprite(
//                 hero.sprite.image,
//                 hero.sprite,
//                 0 - hero.
//                 hero.dashDirection * 5,
//                 0
//             )
//             hero.
// hero.dashAfterImage.lifespan = 40
//         })
//         pause(20)
//     }
// }
// function defineDashX() {
//     if (hero.isDownPressed || hero.isUpPressed) {
//         hero.dashDirection = 0
//     } else {
//         if (hero.isFacingLeft) {
//             hero.dashDirection = -1
//         } else if (hero.
//             hero.isFacingRight) {
//                 hero.
//                 hero.dashDirection = 1
//         }
//     }
//     return hero.
//     hero.dashDirection
// }
// function defineDashY() {}
//  */
// //
// // misc
// //
// // define gravity


// // dash mechanic

// controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
//     if (!(hero.isDashing)) {
//         hero.isDashing = true
//         // prevSpeed = hero.vx
//         controller.moveSprite(hero.sprite, 0, 0)
//         if (hero.isFacingLeft) {
//             hero.dashDirection = -1
//         } else {
//             hero.dashDirection = 1
//         }
//         hero.sprite.setVelocity(hero.dashDirection * 200, 0)
//         for (let index = 0; index <= 3; index++) {
//             timer.background(function () {
//                 hero.dashAfterImage = sprites.createProjectileFromSprite(hero.sprite.image, hero.sprite, 0 - hero.dashDirection * 5, 0)
//                 hero.dashAfterImage.lifespan = 40
//             })
//             pause(20)
//         }
//         timer.after(50, function () {
//             // hero.vx = prevSpeed
//             hero.sprite.vx = 0
//             controller.moveSprite(hero.sprite, 50, 0)
//             hero.isDashing = false
//         })
//     }
// })

// /* let projectile: Sprite = null
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
// }) */







// //
// // controls
// //
// controller.moveSprite(hero.sprite, 50, 0)
// controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
//     if (hero.sprite.isHittingTile(CollisionDirection.Bottom)) {
//     }
//     if (hero.jumpNum < 2) {
//         hero.jumpNum++
//         hero.sprite.vy = hero.jumpVelocity
//     }
// })
// controller.A.onEvent(ControllerButtonEvent.Released, function () {
//     if (hero.sprite.vy < 0) {
//         hero.sprite.vy = 0
//     }
// })
// // controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
// //     if (!hero.isDashing) {
// //         hero.isDashing = true
// //         controller.moveSprite(hero.sprite, 0, 0)
// //         if (hero.isFacingRight && !hero.isUpPressed && !hero.isDownPressed) {
// //             hero.sprite.setVelocity(1 * 200, 0)
// //         } else if (
// //             hero.isFacingLeft &&
// //             !hero.isUpPressed &&
// //             !hero.isDownPressed
// //         ) {
// //             hero.sprite.setVelocity(-1 * 200, 0)
// //         } else if (hero.isUpPressed && !hero.isDownPressed) {
// //             hero.sprite.setVelocity(0, 1 * 200)
// //         } else if (!hero.isUpPressed && hero.isDownPressed) {
// //             hero.sprite.setVelocity(0, -1 * 200)
// //         }
// //         /* {
// //             if (isFacingLeft) {
// //                 dashDirection = -1
// //             } else if (isFacingRight) {
// //                 dashDirection = 1
// //             }
// //         } */

// //         hero.sprite.setVelocity(hero.dashDirection * 200, 0)

// //         timer.after(100, function () {
// //             hero.sprite.vx = 0
// //             hero.sprite.vy = 0
// //             controller.moveSprite(hero.sprite, 50, 0)
// //             hero.isDashing = false
// //         })
// //     }
// // })
// // controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
// //     hero.isUpPressed = true
// // })
// // controller.up.onEvent(ControllerButtonEvent.Released, function () {
// //     hero.isUpPressed = false
// // })
// // controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
// //     hero.isDownPressed = true
// // })
// // controller.down.onEvent(ControllerButtonEvent.Released, function () {
// //     hero.isDownPressed = false
// // })

// // controller.menu.onEvent(ControllerButtonEvent.Pressed, () => {})

// //
// // animations
// //
// // idle right
// characterAnimations.loopFrames(
//     hero.sprite,
//     [
//         assets.image`heroIdle0`,
//         assets.image`heroIdle1`,
//         assets.image`heroIdle2`,
//         assets.image`heroIdle3`,
//         assets.image`heroIdle4`,
//     ],
//     100,
//     characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
// )
// // idle left
// characterAnimations.loopFrames(
//     hero.sprite,
//     [
//         assets.image`heroIdleRev0`,
//         assets.image`heroIdleRev1`,
//         assets.image`heroIdleRev2`,
//         assets.image`heroIdleRev3`,
//         assets.image`heroIdleRev4`,
//     ],
//     100,
//     characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
// )
// // moving right
// characterAnimations.loopFrames(
//     hero.sprite,
//     [
//         assets.image`heroMoving0`,
//         assets.image`heroMoving1`,
//         assets.image`heroMoving2`,
//         assets.image`heroMoving4`,
//         assets.image`heroMoving5`,
//         assets.image`heroMoving6`,
//         assets.image`heroMoving7`,
//         assets.image`heroMoving8`,
//     ],
//     100,
//     characterAnimations.rule(
//         Predicate.Moving,
//         Predicate.FacingRight,
//         Predicate.HittingWallDown
//     )
// )
// // moving left
// characterAnimations.loopFrames(
//     hero.sprite,
//     [
//         assets.image`heroMovingRev0`,
//         assets.image`heroMovingRev1`,
//         assets.image`heroMovingRev2`,
//         assets.image`heroMovingRev4`,
//         assets.image`heroMovingRev5`,
//         assets.image`heroMovingRev6`,
//         assets.image`heroMovingRev7`,
//         assets.image`heroMovingRev8`,
//     ],
//     100,
//     characterAnimations.rule(
//         Predicate.Moving,
//         Predicate.FacingLeft,
//         Predicate.HittingWallDown
//     )
// )
// // jumping right

// characterAnimations.runFrames(
//     hero.sprite,
//     [
//         assets.image`heroMoving2`,
//         assets.image`heroMoving4`,
//         assets.image`heroMoving5`,
//     ],
//     50,
//     characterAnimations.rule(Predicate.FacingRight)
// )

// // jumping left

// characterAnimations.runFrames(
//     hero.sprite,
//     [
//         assets.image`heroMovingRev2`,
//         assets.image`heroMovingRev4`,
//         assets.image`heroMovingRev5`,
//     ],
//     50,
//     characterAnimations.rule(Predicate.FacingLeft)
// )
// //
// // on update
// //
// game.onUpdate(() => {
//     if (hero.sprite.isHittingTile(CollisionDirection.Bottom)) {
//         hero.jumpNum = 0
//     }
//     if (hero.isFacingLeft) {
//         hero.sprite.say("left")
//     } else {
//         hero.sprite.say("right")
//     }
// })

// // config --local user.name myGithub
// // config --local user.email myGithub@mail

