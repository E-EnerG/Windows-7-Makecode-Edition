namespace SpriteKind {
    export const Icon = SpriteKind.create()
    export const TextBar = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const Password_Textbox = SpriteKind.create()
    export const Password_Button = SpriteKind.create()
    export const Loading_Animation = SpriteKind.create()
    export const Shutdown_Button = SpriteKind.create()
    export const SwitchUser_Button = SpriteKind.create()
}
function bootAnimation () {
    startupKeyText.destroy()
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    pause(1000)
    microsoftText = textsprite.create("Microsoft Corporation", 0, 1)
    microsoftText.setPosition(78, 111)
    startingWindowsText = textsprite.create("Starting Windows", 0, 1)
    startingWindowsText.setPosition(77, 93)
    windowsLogo = sprites.create(img`
        . . . . . . f f f f . . . . . . . 
        . . . . f f b b d d f . . . . . . 
        . . . f b d 1 1 1 1 1 f . f f . . 
        . . . . f f d d d 1 1 d f 1 b f . 
        . . . . . . f f f d 1 1 f 1 d f . 
        . . . . . f d d f f 1 1 d f 1 1 f 
        . . . f f 1 1 1 b f 1 1 d f 1 1 f 
        . . f d d d 1 1 d b f 1 1 b 1 1 f 
        . . . f f f d 1 1 d f 1 1 b 1 d f 
        . . . . . . f f 1 1 b 1 1 d 1 d f 
        . . . . . . . f b 1 b 1 1 d 1 b f 
        . . . . . . . f b 1 d 1 1 1 1 b f 
        . . . f f f f f d 1 1 1 1 d b f . 
        . f f d d d 1 1 1 1 1 1 d f f . . 
        f 1 1 1 1 1 1 1 1 d d b f . . . . 
        . f f f d d b b f f f f . . . . . 
        . . . . f f f f . . . . . . . . . 
        `, SpriteKind.Icon)
    animationInterval = randint(95, 120)
    animation.runImageAnimation(
    windowsLogo,
    [img`
        ...................
        .......ffff........
        .....ffbbddf.......
        ....fbd11111f.ff...
        .....ffddd11df1bf..
        .......fffd11f1df..
        ......fddff11df11f.
        ....ff111bf11df11f.
        ...fddd11dbf11b11f.
        ....fffd11df11b1df.
        .......ff11b11d1df.
        ........fb1b11d1bf.
        ........fb1d1111bf.
        ....fffffd1111dbf..
        ..ffddd111111dff...
        .f11111111ddbf.....
        ..fffddbbffff......
        .....ffff8888......
        ...................
        `,img`
        ...................
        .......ffff........
        .....ffbbddf.......
        ....fbd11111f.ff...
        .....ffddd11df1bf..
        .......fffd11f1df..
        ......fddff11df11f.
        ....ff111bf11df11f.
        ...fddd11dbf11b11f.
        ....fffd11df11b1df.
        .......ff11b11d1df.
        ........fb1b11d1bf.
        ........fb1d1111bf.
        ....fffffd1111dbf..
        ..ffddd111111dff...
        .f11111111ddbf8....
        ..fffddbbffff8.....
        .....ffff8888......
        ...................
        `,img`
        ...................
        .......ffff........
        .....ffbbddf.......
        ....fbd11111f.ff...
        .....ffddd11df1bf..
        .......fffd11f1df..
        ......fddff11df11f.
        ....ff111bf11df11f.
        ...fddd11dbf11b11f.
        ....fffd11df11b1df.
        .......ff11b11d1df.
        ........fb1b11d1bf.
        ........fb1d1111bf.
        ....fffffd1111dbf..
        ..ffddd111111dff...
        .f11111111ddbf8....
        ..fffddbbffff8.....
        .....ffff8888......
        .....8888..........
        `,img`
        ...................
        .......ffff........
        .....ffbbddf.......
        ....fbd11111f.ff...
        .....ffddd11df1bf..
        .......fffd11f1df..
        ......fddff11df11f.
        ....ff111bf11df11f.
        ...fddd11dbf11b11f.
        ....fffd11df11b1df.
        .......ff11b11d1df.
        ........fb1b11d1bf.
        ........fb1d1111bf.
        ....fffffd1111dbf8.
        ..ffddd111111dff8..
        .f11111111ddbf88...
        ..fffddbbffff8.....
        .....ffff8888......
        .....8888..........
        `,img`
        ...................
        .......ffff........
        .....ffbbddf.......
        ....fbd11111f.ff...
        .....ffddd11df1bf..
        .......fffd11f1df..
        ......fddff11df11f.
        ....ff111bf11df11f.
        ...fddd11dbf11b11f.
        ....fffd11df11b1df.
        .......ff11b11d1df.
        ........fb1b11d1bf.
        ........fb1d1111bf.
        ....fffffd1111dbf8.
        ..ffddd111111dff8..
        .f11111111ddbf88...
        ..fffddbbffff8.....
        ..888ffff8888......
        .....8888..........
        `,img`
        ...................
        .......ffff........
        .....ffbbddf.......
        ....fbd11111f.ff...
        .....ffddd11df1bf..
        .......fffd11f1df..
        ......fddff11df11f.
        ....ff111bf11df11f.
        ...fddd11dbf11b11f.
        ....fffd11df11b1df.
        .......ff11b11d1df8
        ........fb1b11d1bf8
        ........fb1d1111bf8
        ....fffffd1111dbf8.
        .8ffddd111111dff8..
        8f11111111ddbf88...
        .8fffddbbffff8.....
        ..888ffff6668......
        .....8888..........
        `,img`
        ...................
        .......ffff........
        .....ffbbddf.......
        ....fbd11111f.ff...
        .....ffddd11df1bf..
        .......fffd11f1df..
        ......fddff11df11f8
        ....ff111bf11df11f8
        ...fddd11dbf11b11f8
        ....fffd11df11b1df8
        .......ff11b11d1df8
        ........fb1b11d1bf8
        ....8888fb1d1111bf8
        ..88fffffd1111dbf8.
        .8ffddd111111dff8..
        8f11111111ddbf68...
        .8fffddbbffff6.....
        ..888ffff6666......
        .....8888..........
        `,img`
        ...................
        .......ffff........
        .....ffbbddf.......
        ....fbd11111f.ff8..
        .....ffddd11df1bf8.
        .......fffd11f1df8.
        ......fddff11df11f8
        ....ff111bf11df11f8
        ...fddd11dbf11b11f8
        ....fffd11df11b1df8
        .....88ff11b11d1df8
        .......8fb1b11d1bf8
        ....8888fb1d1111bf8
        ..88fffffd1111dbf8.
        .8ffddd111111dff8..
        8f11111111ddbf66...
        .8fffddbbffff6.....
        ..888ffff6666......
        .....8666..........
        `,img`
        ...................
        .......ffff........
        .....ffbbddf..88...
        ....fbd11111f8ff8..
        .....ffddd11df1bf8.
        .......fffd11f1df8.
        ......fddff11df11f8
        ....ff111bf11df11f8
        ...fddd11dbf11b11f8
        ...8fffd11df11b1df8
        ....888ff11b11d1df8
        .......8fb1b11d1bf8
        ....8888fb1d1111bf8
        ..88fffffd1111dbf6.
        .8ffddd111111dff6..
        8f11111111ddbf66...
        .8fffddbbffff6.....
        ..886ffff6666......
        .....6666..........
        `,img`
        ...................
        .......ffff8.......
        .....ffbbddf8.88...
        ....fbd11111f8ff8..
        .....ffddd11df1bf8.
        .......fffd11f1df8.
        ....88fddff11df11f8
        ...8ff111bf11df11f8
        ..8fddd11dbf11b11f8
        ...8fffd11df11b1df8
        ....888ff11b11d1df6
        .......8fb1b11d1bf6
        ....8888fb1d1111bf6
        ..88fffffd1111dbf6.
        .8ffddd111111dff6..
        8f11111111ddbf66...
        .6fffddbbffff6.....
        ..666ffff9996......
        .....6666..........
        `,img`
        ...................
        .......ffff8.......
        .....ffbbddf8.88...
        ....fbd11111f8ff8..
        .....ffddd11df1bf8.
        .......fffd11f1df8.
        ....88fddff11df11f8
        ...8ff111bf11df11f6
        ..8fddd11dbf11b11f6
        ...8fffd11df11b1df6
        ....888ff11b11d1df6
        .......8fb1b11d1bf6
        ....8888fb1d1111bf6
        ..66fffffd1111dbf6.
        .6ffddd111111dff6..
        6f11111111ddbf96...
        .6fffddbbffff9.....
        ..666ffff9999......
        .....6666..........
        `,img`
        .......8888........
        ......8ffff8.......
        .....ffbbddf8.88...
        ....fbd11111f8ff8..
        ....8ffddd11df1bf6.
        .....88fffd11f1df6.
        ....88fddff11df11f6
        ...8ff111bf11df11f6
        ..8fddd11dbf11b11f6
        ...8fffd11df11b1df6
        ....888ff11b11d1df6
        .......6fb1b11d1bf6
        ....6666fb1d1111bf6
        ..66fffffd1111dbf6.
        .6ffddd111111dff9..
        6f11111111ddbf99...
        .6fffddbbffff9.....
        ..666ffff9999......
        .....9999..........
        `,img`
        .......8888........
        .....88ffff8.......
        ....8ffbbddf8.66...
        ...8fbd11111f8ff6..
        ....8ffddd11df1bf6.
        .....88fffd11f1df6.
        ....88fddff11df11f6
        ...8ff111bf11df11f6
        ..8fddd11dbf11b11f6
        ...8fffd11df11b1df9
        ....666ff11b11d1df9
        .......6fb1b11d1bf9
        ....6666fb1d1111bf9
        ..66fffffd1111dbf9.
        .6ffddd111111dff9..
        6f11111111ddbf99...
        .9fffddbbffff9.....
        ..999ffff9999......
        .....9999..........
        `,img`
        .......8888........
        .....88ffff8.......
        ....8ffbbddf8.66...
        ...8fbd11111f8ff6..
        ....8ffddd11df1bf9.
        .....88fffd11f1df9.
        ....88fddff11df11f9
        ...8ff111bf11df11f9
        ..8fddd11dbf11b11f9
        ...8fffd11df11b1df9
        ....666ff11b11d1df9
        .......6fb1b11d1bf9
        ....6666fb1d1111bf9
        ..99fffffd1111dbf9.
        .9ffddd111111dff9..
        9f11111111ddbf99...
        .9fffddbbffff9.....
        ..999ffff9999......
        .....9999..........
        `,img`
        .......8888........
        .....88ffff6.......
        ....8ffbbddf6.99...
        ...8fbd11111f6ff9..
        ....8ffddd11df1bf9.
        .....66fffd11f1df9.
        ....66fddff11df11f9
        ...6ff111bf11df11f9
        ..6fddd11dbf11b11f9
        ...6fffd11df11b1df9
        ....666ff11b11d1df9
        .......9fb1b11d1bf9
        ....9999fb1d1111bf9
        ..99fffffd1111dbf9.
        .9ffddd111111dff9..
        9f11111111ddbf99...
        .9fffddbbffff9.....
        ..999ffff9999......
        .....9999..........
        `,img`
        .......6666........
        .....66ffff9.......
        ....6ffbbddf9.99...
        ...6fbd11111f9ff9..
        ....6ffddd11df1bf9.
        .....66fffd11f1df9.
        ....66fddff11df11f9
        ...6ff111bf11df11f9
        ..6fddd11dbf11b11f9
        ...9fffd11df11b1df9
        ....999ff11b11d1df9
        .......9fb1b11d1bf9
        ....9999fb1d1111bf9
        ..99fffffd1111dbf9.
        .9ffddd111111dff9..
        9f11111111ddbf99...
        .9fffddbbffff9.....
        ..999ffff9999......
        .....9999..........
        `,img`
        .......6999........
        .....66ffff9.......
        ....6ffbbddf9.99...
        ...6fbd11111f9ff9..
        ....6ffddd11df1bf9.
        .....66fffd11f1df9.
        ....99fddff11df11f9
        ...9ff111bf11df11f9
        ..9fddd11dbf11b11f9
        ...9fffd11df11b1df9
        ....999ff11b11d1df9
        .......9fb1b11d1bf9
        ....9999fb1d1111bf9
        ..99fffffd1111dbf9.
        .9ffddd111111dff9..
        9f11111111ddbf99...
        .9fffddbbffff9.....
        ..999ffff9999......
        .....9999..........
        `,img`
        .......6999........
        .....66ffff9.......
        ....6ffbbddf9.99...
        ...9fbd11111f9ff9..
        ....9ffddd11df1bf9.
        .....99fffd11f1df9.
        ....99fddff11df11f9
        ...9ff111bf11df11f9
        ..9fddd11dbf11b11f9
        ...9fffd11df11b1df9
        ....999ff11b11d1df9
        .......9fb1b11d1bf9
        ....9999fb1d1111bf9
        ..99fffffd1111dbf9.
        .9ffddd111111dff9..
        9f11111111ddbf99...
        .9fffddbbffff9.....
        ..999ffff9999......
        .....9999..........
        `,img`
        .......9999........
        .....99ffff9.......
        ....9ffbbddf9.99...
        ...9fbd11111f9ff9..
        ....9ffddd11df1bf9.
        .....99fffd11f1df9.
        ....99fddff11df11f9
        ...9ff111bf11df11f9
        ..9fddd11dbf11b11f9
        ...9fffd11df11b1df9
        ....999ff11b11d1df9
        .......9fb1b11d1bf9
        ....9999fb1d1111bf9
        ..99fffffd1111dbf9.
        .9ffddd111111dff9..
        9f11111111ddbf99...
        .9fffddbbffff9.....
        ..999ffff9999......
        .....9999..........
        `],
    animationInterval,
    false
    )
    pause(animationInterval * 20 + randint(1300, 2400))
    animation.runImageAnimation(
    windowsLogo,
    [img`
        .......9999........
        .....99ffff9.......
        ....9ffbbddf9.99...
        ...9fbd11111f9ff9..
        ....9ffddd11df1bf9.
        .....99fffd11f1df9.
        ....99fddff11df11f9
        ...9ff111bf11df11f9
        ..9fddd11dbf11b11f9
        ...9fffd11df11b1df9
        ....999ff11b11d1df9
        .......9fb1b11d1bf9
        ....9999fb1d1111bf9
        ..99fffffd1111dbf9.
        .9ffddd111111dff9..
        9f11111111ddbf99...
        .9fffddbbffff9.....
        ..999ffff9999......
        .....9999..........
        `,img`
        .......6666........
        .....66ffff6.......
        ....6ffbbddf6.66...
        ...6fbd11111f6ff6..
        ....6ffddd11df1bf6.
        .....66fffd11f1df6.
        ....66fddff11df11f6
        ...6ff111bf11df11f6
        ..6fddd11dbf11b11f6
        ...6fffd11df11b1df6
        ....666ff11b11d1df6
        .......6fb1b11d1bf6
        ....6666fb1d1111bf6
        ..66fffffd1111dbf6.
        .6ffddd111111dff6..
        6f11111111ddbf66...
        .6fffddbbffff6.....
        ..666ffff6666......
        .....6666..........
        `],
    600,
    true
    )
    pause(randint(1000, 6000))
    microsoftText.destroy()
    startingWindowsText.destroy()
    windowsLogo.destroy()
    cursor = sprites.create(img`
        c c . . . . . . 
        c 1 c . . . . . 
        c 1 1 c . . . . 
        c 1 1 1 c . . . 
        c 1 1 1 1 c . . 
        c 1 1 1 1 1 c . 
        c 1 1 1 1 1 1 c 
        c 1 1 1 1 c c c 
        c 1 1 1 1 c . . 
        c 1 c c 1 1 c . 
        c c . . c 1 1 c 
        . . . . c 1 1 c 
        . . . . . c c . 
        `, SpriteKind.Player)
    cursor.setStayInScreen(true)
    controller.moveSprite(cursor, 100, 100)
    pause(2000)
    cursorPosX = cursor.x
    cursorPosY = cursor.y
    lockScreen()
}
function desktop () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Password_Button, function (sprite, otherSprite) {
    if (passwordEntered == 1 && passwordLength >= requiredPasswordLength) {
        cursor.say("Continue", 100)
        if (pressCooldown == 0) {
            if (controller.A.isPressed()) {
                passwordLoadingScreen()
                pressCooldown = 1
                pause(750)
                pressCooldown = 0
            }
        }
    }
})
function lockScreen () {
    console.logValue("pass", password)
    cursor.destroy()
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    userIcon = sprites.create(img`
        ffffffffffffffffffffffffffffffffffff
        f1111111111199999999999999966666666f
        f1ffffffffffffffffffffffffffffffff6f
        f1f999999999999999999999999999999f6f
        f1f999999999999999999999999999999f6f
        f9f999999999999999999999999999999f6f
        f9f9999999999ffffffffff9999999999f6f
        f9f999999999f1111199966f999999999f6f
        f9f999999999f1ffffffff6f999999999f6f
        f9f999999999f9f999999f6f999999999f6f
        f9f999999999f9f999999f6f999999999f6f
        f9f999999999f6f999999f8f999999999f6f
        f9f999999999f6f999999f8f999999999f6f
        f9f999999999f6ffffffff8f999999999f6f
        f6f999999999f6ffffffff8f999999999f8f
        f6f999999999f6688888888f999999999f8f
        f6f999999999ffffffffffff999999999f8f
        f6f999999999ffffffffffff999999999f8f
        f6f9999999999f1f9966f8f9999999999f8f
        f6f9999999ffffffffffffffff9999999f8f
        f6f999999f1111111999996666f999999f8f
        f6f999999f1ffffffffffffff6f999999f8f
        f6f999999f9f999999999999f8f999999f8f
        f6f999999f9f999999999999f8f999999f8f
        f6f999999f9ffffffffffffff8f999999f8f
        f6f999999f9666668888888888f999999f8f
        f6f999999ffffffffffffffffff999999f8f
        f6f999999ffffffffffffffffff999999f8f
        f6f999999999999999999999999999999f8f
        f6f999999999999999999999999999999f8f
        f6f999999999999999999999999999999f8f
        f6ffffffffffffffffffffffffffffffff8f
        f6ffffffffffffffffffffffffffffffff8f
        f6666666666688888888888888888888888f
        ffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Icon)
    userIcon.setPosition(80, 53)
    usernameText = textsprite.create(username, 0, 1)
    usernameText.setMaxFontHeight(9)
    usernameText.setPosition(80, 76)
    passwordField = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffff
        f1111111119999999999999966666666666666666888888f
        f1ffffffffffffffffffffffffffffffffffffffffffff8f
        f1f999999999999999999999999999999999999999999f8f
        f1f999999999999999999999999999999999999999999f8f
        f1f999999999999999999999999999999999999999999f8f
        f9f999999999999999999999999999999999999999999f8f
        f9f999999999999999999999999999999999999999999f8f
        f9f999999999999999999999999999999999999999999f8f
        f9f999999999999999999999999999999999999999999f8f
        f9f999999999999999999999999999999999999999999f8f
        f9ffffffffffffffffffffffffffffffffffffffffffff8f
        f9ffffffffffffffffffffffffffffffffffffffffffff8f
        f9999999966666666666688888888888888888888888888f
        ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Password_Textbox)
    passwordField.setPosition(80, 86)
    logInButton = sprites.create(assets.image`myImage2`, SpriteKind.Password_Button)
    logInButton.setPosition(104, 87)
    switchuserButton = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f11111111111111111111999999999999999999999966666666666666666666666666f
        f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f
        f9f9999999999999999999999999999999999999999999999999999999999999999f6f
        f9f9999999999999999999999999999999999999999999999999999999999999999f6f
        f9f9999999999999999999999999999999999999999999999999999999999999999f8f
        f9f9999999999999999999999999999999999999999999999999999999999999999f8f
        f9f9999999999999999999999999999999999999999999999999999999999999999f8f
        f9f9999999999999999999999999999999999999999999999999999999999999999f8f
        f9f9999999999999999999999999999999999999999999999999999999999999999f8f
        f9f9999999999999999999999999999999999999999999999999999999999999999f8f
        f9f9999999999999999999999999999999999999999999999999999999999999999f8f
        f6f9999999999999999999999999999999999999999999999999999999999999999f8f
        f6f9999999999999999999999999999999999999999999999999999999999999999f8f
        f6f9999999999999999999999999999999999999999999999999999999999999999f8f
        f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f66666666666666666666666666666666666888888888888888888888888888888888f
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.SwitchUser_Button)
    switchuserButton.setPosition(83, 102)
    switchuserButtonText = textsprite.create("Switch user", 0, 1)
    switchuserButtonText.setPosition(78, 101)
    cursor = sprites.create(img`
        f f . . . . . . 
        f 1 f . . . . . 
        f 1 1 f . . . . 
        f 1 1 1 f . . . 
        f 1 1 1 1 f . . 
        f 1 1 1 1 1 f . 
        f 1 1 1 1 1 1 f 
        f 1 1 1 1 f f f 
        f 1 1 1 1 f . . 
        f 1 f f 1 1 f . 
        f f . . f 1 1 f 
        . . . . f 1 1 f 
        . . . . . f f . 
        `, SpriteKind.Player)
    cursor.setPosition(cursorPosX, cursorPosY)
    controller.moveSprite(cursor, 100, 100)
    cursor.setFlag(SpriteFlag.StayInScreen, true)
    firstPasswordInput = 1
    pressCooldown = 0
}
function bootloader () {
    if (bootSuccess == 1) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffff2f2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffff2f2f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff2fff2f2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff2fffff2f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff22222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffff22f2fffff22f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffff2ff2f2fff22f2f2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffff2ffff2f2f2ff2f2f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff2ffffff2f2ffff2f2f2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        startupKeyText.destroy()
        makeBootText = textsprite.create("MakeBOOT", 0, 1)
        makeBootText.setPosition(45, 14)
        pause(500)
        controllerText = textsprite.create("Controller:", 0, 1)
        controllerText.setPosition(37, 29)
        graphicsText = textsprite.create("Graphics:", 0, 1)
        graphicsText.setPosition(32, 66)
        for (let index = 0; index < 1; index++) {
            controllerStatus = textsprite.create("Loading drivers.", 0, 5)
            controllerStatus.setPosition(100, 43)
            pause(100)
            controllerStatus.destroy()
            controllerStatus = textsprite.create("Loading drivers..", 0, 5)
            controllerStatus.setPosition(100, 43)
            pause(100)
            controllerStatus.destroy()
            controllerStatus = textsprite.create("Loading drivers...", 0, 5)
            controllerStatus.setPosition(100, 43)
            pause(400)
            controllerStatus.destroy()
        }
        controllerStatus = textsprite.create("Ready", 0, 7)
        controllerStatus.setPosition(74, 43)
        for (let index = 0; index < 1; index++) {
            graphicsStatus = textsprite.create("Loading drivers.", 0, 5)
            graphicsStatus.setPosition(94, 81)
            pause(100)
            graphicsStatus.destroy()
            graphicsStatus = textsprite.create("Loading drivers..", 0, 5)
            graphicsStatus.setPosition(94, 81)
            pause(100)
            graphicsStatus.destroy()
            graphicsStatus = textsprite.create("Loading drivers...", 0, 5)
            graphicsStatus.setPosition(94, 81)
            pause(100)
            graphicsStatus.destroy()
        }
        graphicsStatus = textsprite.create("Ready", 0, 7)
        graphicsStatus.setPosition(74, 81)
        pause(200)
        windowsBootManager()
    } else {
    	
    }
}
function windowsBootManager () {
    bootAnimation()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.SwitchUser_Button, function (sprite, otherSprite) {
    cursor.say("Switch user", 100)
    if (pressCooldown == 0) {
        if (controller.A.isPressed()) {
            pressCooldown = 1
            pause(750)
            pressCooldown = 0
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (allowBoot == 1) {
        power2 = 1
        windowsBootManager()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Password_Textbox, function (sprite, otherSprite) {
    cursor.say("Enter password", 100)
    if (pressCooldown == 0) {
        if (controller.A.isPressed()) {
            if (firstPasswordInput == 1) {
                passwordInput = game.askForString("Enter Password", 4)
                cursorPosX = cursor.x
                cursorPosY = cursor.y
                if (passwordInput.isEmpty() || passwordInput == "    ") {
                    passwordLength = 0
                    passwordText = textsprite.create("", 0, 0)
                } else {
                    cursor.z = 100
                    passwordLength = passwordInput.length
                    passwordText = textsprite.create(passwordInput, 0, 1)
                    passwordText.setPosition(80, 86)
                    firstPasswordInput = 0
                }
            } else {
                passwordText.destroy()
                passwordInput = game.askForString("Enter Password", 4)
                cursorPosX = cursor.x
                cursorPosY = cursor.y
                if (passwordInput.isEmpty()) {
                    passwordLength = 0
                    textSprite = textsprite.create("", 0, 0)
                } else {
                    passwordText.destroy()
                    cursor.z = 100
                    passwordLength = passwordInput.length
                    passwordText = textsprite.create(passwordInput, 0, 1)
                    passwordText.setPosition(80, 86)
                }
            }
            if (passwordLength >= requiredPasswordLength) {
                passwordEntered = 1
                logInButton.destroy()
                logInButton = sprites.create(assets.image`myImage0`, SpriteKind.Password_Button)
                logInButton.setPosition(104, 87)
                cursor.say("Continue", 100)
            } else {
                logInButton.destroy()
                logInButton = sprites.create(assets.image`myImage2`, SpriteKind.Password_Button)
                logInButton.setPosition(104, 87)
                logInButton.z = 0
                cursor.destroy()
                cursor = sprites.create(img`
                    f f . . . . . . 
                    f 1 f . . . . . 
                    f 1 1 f . . . . 
                    f 1 1 1 f . . . 
                    f 1 1 1 1 f . . 
                    f 1 1 1 1 1 f . 
                    f 1 1 1 1 1 1 f 
                    f 1 1 1 1 f f f 
                    f 1 1 1 1 f . . 
                    f 1 f f 1 1 f . 
                    f f . . f 1 1 f 
                    . . . . f 1 1 f 
                    . . . . . f f . 
                    `, SpriteKind.Player)
                cursor.setPosition(cursorPosX, cursorPosY)
                controller.moveSprite(cursor)
            }
            pressCooldown = 1
            pause(750)
            pressCooldown = 0
        }
    }
})
function passwordLoadingScreen () {
    cursor.destroy()
    userIcon.destroy()
    passwordField.destroy()
    logInButton.destroy()
    passwordText.destroy()
    usernameText.destroy()
    switchuserButton.destroy()
    switchuserButtonText.destroy()
    welcomeText = textsprite.create("Welcome", 0, 1)
    welcomeText.setMaxFontHeight(4)
    welcomeText.setPosition(85, 61)
    loadingCircle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Loading_Animation)
    loadingCircle.setPosition(50, 60)
    animation.runImageAnimation(
    loadingCircle,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 1 8 . . . . . . 8 6 8 . . 
        . . 6 8 9 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 1 6 . . . . . . . . 8 6 8 . 
        . . 6 1 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 1 6 . . . . . . . . 8 6 8 . 
        . 6 1 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 1 6 . . . . . . . . 8 6 8 . 
        . 6 1 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 1 6 . . . . . . . . 8 6 8 . 
        . 6 1 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 1 6 . . . . . . 8 6 8 . . 
        . 6 1 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 1 9 6 . . . . 8 8 6 8 . . 
        . . 6 1 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 1 9 6 6 6 8 6 6 8 . . . 
        . . 6 1 9 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 1 1 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 1 9 9 9 8 8 . . . . 
        . . . 6 9 1 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 1 1 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 1 1 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 1 1 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 1 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 9 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 9 9 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 9 8 . . . 
        . . 6 9 6 6 . . . . 8 8 9 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 9 8 . . 
        . . 6 9 6 . . . . . . 8 9 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 9 8 . . 
        . 6 9 6 . . . . . . . . 8 9 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 9 8 . 
        . 6 9 6 . . . . . . . . 8 9 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 9 8 . 
        . 6 9 6 . . . . . . . . 8 9 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 9 8 . 
        . 6 9 6 . . . . . . . . 8 9 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 9 8 . 
        . . 6 9 8 . . . . . . 8 9 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 9 8 . . 
        . . 6 8 6 8 . . . . 8 6 9 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 9 9 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 9 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 9 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 9 9 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 9 6 8 . . . 
        . . . . 8 8 6 6 6 9 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 9 9 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 9 9 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 9 9 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 6 9 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 9 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 6 8 . . . . 8 6 6 8 . . 
        . . . 8 9 9 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . 6 6 9 9 9 9 8 8 . . . . 
        . . . 6 9 9 6 6 6 8 6 6 8 . . . 
        . . 6 9 6 6 . . . . 8 8 6 8 . . 
        . . 6 9 6 . . . . . . 8 6 8 . . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . 6 9 6 . . . . . . . . 8 6 8 . 
        . . 6 9 8 . . . . . . 8 6 8 . . 
        . . 6 8 9 8 . . . . 8 6 6 8 . . 
        . . . 8 9 6 8 8 8 8 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    55,
    true
    )
    pause(randint(3000, 10000))
    if (passwordInput == password) {
        color.startFade(color.originalPalette, color.Black, 500)
        color.pauseUntilFadeDone()
        color.startFade(color.Black, color.originalPalette, 500)
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Half))
        pause(100)
        music.playTone(740, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Whole))
        desktop()
    } else {
        welcomeText.destroy()
        loadingCircle.destroy()
        passwordErrorText = textsprite.create("Password incorrect", 0, 2)
        passwordErrorText.setPosition(80, 23)
        passwordEntered = 0
        lockScreen()
    }
}
let passwordErrorText: TextSprite = null
let loadingCircle: Sprite = null
let welcomeText: TextSprite = null
let textSprite: TextSprite = null
let passwordText: Sprite = null
let passwordInput = ""
let allowBoot = 0
let graphicsStatus: TextSprite = null
let controllerStatus: TextSprite = null
let graphicsText: TextSprite = null
let controllerText: TextSprite = null
let makeBootText: TextSprite = null
let firstPasswordInput = 0
let switchuserButtonText: Sprite = null
let switchuserButton: Sprite = null
let logInButton: Sprite = null
let passwordField: Sprite = null
let usernameText: TextSprite = null
let userIcon: Sprite = null
let pressCooldown = 0
let passwordLength = 0
let cursorPosY = 0
let cursorPosX = 0
let cursor: Sprite = null
let animationInterval = 0
let windowsLogo: Sprite = null
let startingWindowsText: TextSprite = null
let microsoftText: TextSprite = null
let bootSuccess = 0
let gDriversBootTime = 0
let cDriversBootTime = 0
let passwordEntered = 0
let requiredPasswordLength = 0
let password = ""
let username = ""
let startupKeyText: Sprite = null
let power2 = 0
power2 = 0
scene.setBackgroundImage(assets.image`bg_0`)
startupKeyText = textsprite.create("Press     to startup")
startupKeyText.setPosition(69, 11)
username = "defaultuser0"
password = "1234"
requiredPasswordLength = 4
passwordEntered = 0
let cDrivers = 1
let gDrivers = 1
if ((cDrivers && gDrivers) == 0) {
    cDriversBootTime = randint(4, 6)
    gDriversBootTime = randint(4, 6)
    bootSuccess = 0
} else {
    cDriversBootTime = randint(2, 4)
    gDriversBootTime = randint(2, 4)
    bootSuccess = 1
}
forever(function () {
    if (power2 == 0) {
        allowBoot = 1
    } else {
        allowBoot = 0
    }
})
