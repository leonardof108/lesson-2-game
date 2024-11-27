/* CONSTANTS */
const GRAVITY = 500

/* VARIABLES */

/* OBJECTS */
const hero = {
    sprite: sprites.create(assets.image`heroBase0`, SpriteKind.Player),
    jumpHeight: 20,
    doubleJump: true,
    jumpNum: 0,
    dashAfterImage: sprites.create(img`.`),
    dashDirection: 0,
    isDashing: false,
    isUpPressed: false,
    isDownPressed: false,
    jumpVelocity: 0,
    isFacingLeft: false,
    isFacingRight: false,
}

hero.sprite.ay = GRAVITY
hero.jumpVelocity = 0 - Math.sqrt(2 * (GRAVITY * hero.jumpHeight))

/* FUNCTIONS */

/* MISC */
game.onUpdate(() => {
    if (hero.sprite.isHittingTile(CollisionDirection.Bottom)) {
        hero.jumpNum = 0
    }
})

// camera follow sprite
scene.cameraFollowSprite(hero.sprite)

// load maps
tiles.loadMap(tiles.createSmallMap(assets.tilemap`levelTest`))
hero.sprite.setPosition(90, 101)

/* CONTROLS */
controller.moveSprite(hero.sprite, 50, 0)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero.sprite.isHittingTile(CollisionDirection.Bottom)) {
    }
    if (hero.jumpNum < 2) {
        hero.jumpNum++
        hero.sprite.vy = hero.jumpVelocity
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (hero.sprite.vy < 0) {
        hero.sprite.vy = 0
    }
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!hero.isDashing) {
        hero.isDashing = true
        // prevSpeed = hero.vx
        controller.moveSprite(hero.sprite, 0, 0)
        if (hero.isFacingLeft) {
            hero.dashDirection = -1
        } else {
            hero.dashDirection = 1
        }
        hero.sprite.setVelocity(hero.dashDirection * 200, 0)
        for (let index = 0; index <= 3; index++) {
            timer.background(function () {
                hero.dashAfterImage = sprites.createProjectileFromSprite(
                    hero.sprite.image,
                    hero.sprite,
                    0 - hero.dashDirection * 5,
                    0
                )
                hero.dashAfterImage.lifespan = 40
            })
            pause(20)
        }
        timer.after(50, function () {
            // hero.vx = prevSpeed
            hero.sprite.vx = 0
            controller.moveSprite(hero.sprite, 50, 0)
            hero.isDashing = false
        })
    }
})

/* ANIMATIONS */
characterAnimations.loopFrames(
    hero.sprite,
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
    hero.sprite,
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
    hero.sprite,
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
    hero.sprite,
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
    hero.sprite,
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
    hero.sprite,
    [
        assets.image`heroMovingRev2`,
        assets.image`heroMovingRev4`,
        assets.image`heroMovingRev5`,
    ],
    50,
    characterAnimations.rule(Predicate.FacingLeft)
)
hero.isFacingLeft = characterAnimations.matchesRule(
    hero.sprite,
    Predicate.FacingLeft
)
hero.isFacingRight = characterAnimations.matchesRule(
    hero.sprite,
    Predicate.FacingRight
)
