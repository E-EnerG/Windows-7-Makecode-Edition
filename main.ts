namespace SpriteKind {
    export const Icon = SpriteKind.create()
    export const TextBar = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const Password_Textbox = SpriteKind.create()
    export const Password_Button = SpriteKind.create()
    export const Loading_Animation = SpriteKind.create()
    export const Shutdown_Button = SpriteKind.create()
    export const SwitchUser_Button = SpriteKind.create()
    export const Cursor = SpriteKind.create()
    export const Cursor_bottom = SpriteKind.create()
    export const Menu = SpriteKind.create()
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
    cursorTop = sprites.create(img`
        . f f f f f f . . . 
        f 1 1 1 9 9 6 f . . 
        f 1 f f f 6 6 f . . 
        f 1 f f 6 f f . . . 
        f 9 f 6 f 6 f . . . 
        f 9 6 f 6 f 8 f . . 
        f 6 6 f f 8 f 8 f . 
        . f f . . f 8 f 8 f 
        . . . . . . f 8 8 f 
        . . . . . . . f f . 
        `, SpriteKind.Cursor)
    cursorTop.setStayInScreen(true)
    controller.moveSprite(cursorTop, 100, 100)
    pause(2000)
    cursorPosX = cursorTop.x
    cursorPosY = cursorTop.y
    lockScreen()
}
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.Button, function (sprite, otherSprite) {
    if (otherSprite == powerButton) {
        cursorTop.say("Power", 100)
        if (powerMenuOpen == false) {
            if (pressCooldown == 0) {
                if (controller.A.isPressed()) {
                    powerMenu = sprites.create(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffff
                        f1111111111111111111111999999999999999999999999f
                        f1ffffffffffffffffffffffffffffffffffffffffffff9f
                        f1f999999999999999999999999999999999999999999f9f
                        f1f9fffff999999999999999999999999999999999999f9f
                        f9f9f691f999999999999999999999999999999999999f9f
                        f9f9fff9f999999999999999999999999999999999999f6f
                        f9f9fff6f999999999999999999999999999999999999f6f
                        f9f9f886f999999999999999999999999999999999999f6f
                        f9f9fffff999999999999999999999999999999999999f6f
                        f9f999999999999999999999999999999999999999999f6f
                        f9ffffffffffffffffffffffffffffffffffffffffffff6f
                        f9ffffffffffffffffffffffffffffffffffffffffffff6f
                        f9999999999999999999999999999999996666666666666f
                        f9ffffffffffffffffffffffffffffffffffffffffffff6f
                        f9f999999999999999999999999999999999999999999f6f
                        f6f9ffffff99999999999999999999999999999999999f6f
                        f6f9f1966f99999999999999999999999999999999999f6f
                        f6f9f9ff6f99999999999999999999999999999999999f6f
                        f6f9f6ff8f99999999999999999999999999999999999f6f
                        f6f9f8f88f99999999999999999999999999999999999f8f
                        f6f9ffffff99999999999999999999999999999999999f8f
                        f6f999999999999999999999999999999999999999999f8f
                        f6ffffffffffffffffffffffffffffffffffffffffffff8f
                        f6ffffffffffffffffffffffffffffffffffffffffffff8f
                        f6666688888888888888888888888888888888888888888f
                        f6ffffffffffffffffffffffffffffffffffffffffffff8f
                        f6f999999999999999999999999999999999999999999f8f
                        f6f9ffff9999999999999999999999999999999999999f8f
                        f8f9f19f9999999999999999999999999999999999999f8f
                        f8f9f96f9999999999999999999999999999999999999f8f
                        f8f9f68f9999999999999999999999999999999999999f8f
                        f8f9f88f9999999999999999999999999999999999999f8f
                        f8f9ffff9999999999999999999999999999999999999f8f
                        f8f999999999999999999999999999999999999999999f8f
                        f8ffffffffffffffffffffffffffffffffffffffffffff8f
                        f8ffffffffffffffffffffffffffffffffffffffffffff8f
                        f8888888888888888888888888888888888888888888888f
                        ffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffff
                        `, SpriteKind.Menu)
                    powerMenu.setPosition(powerButton.x + powerButton.width / 2 - powerMenu.width / 2, powerButton.y - (powerButton.height / 2 + (powerMenu.height / 2 - 1)))
                    pressCooldown = 1
                    pause(500)
                    pressCooldown = 0
                    powerMenuOpen = true
                }
            }
        } else if (powerMenuOpen == true) {
            if (pressCooldown == 0) {
                powerMenu.destroy()
                pressCooldown = 1
                pause(500)
                pressCooldown = 0
                powerMenuOpen = false
            }
        }
    } else if (otherSprite == networkButton) {
        cursorTop.say("Radio", 100)
    } else if (otherSprite == soundMixerButton) {
        cursorTop.say("Volume", 100)
    }
})
function desktop () {
	
}
function lockScreen () {
    cursorTop.destroy()
    scene.setBackgroundImage(img`
        9999999999999999bbbbbb66666666b777777777777777777777777777777777777d7669999999999999999999999999bbbbbb66666666b777777777777777777777777777777777777d766999999999
        999999999999999997bbbbbbbbbbbbb7777777777777777777777777777777777777666999999999999999999999999997bbbbbbbbbbbbb7777777777777777777777777777777777777666999999999
        99999999999999999997bbbbbbbbbbb677777777777777777777777777777777777666799999999999999999999999999997bbbbbbbbbbb6777777777777777777777777777777777776667999999999
        9999999999999999999997bbbbbbbbb66777777777777777777777777777777777666699999999999999999999999999999997bbbbbbbbb6677777777777777777777777777777777766669999999999
        9999999999999999999999999999999667777777777777777777777777777777766669999999999999999999999999999999999999999996677777777777777777777777777777777666699999999999
        9999999999999999999999999999999766777777777777777777777777777777666699999999999999999999999999999999999999999997667777777777777777777777777777776666999999999999
        9999999999999999dddd99ddddd9999966677777777777777777777777777766666999999999999999999999999999999999999999999999666777777777777777777777777777666669999999999999
        9999999999999999d11dddd1d1ddddddd66667777777777777777777777766666699999999999999999999999999999999999dddddddddddd66667777777777777777777777766666699999999999999
        9999999999999999d111dd11d11ddddddd6666666777777777777777766666667999999999999999999999999999999999dddddddddddddddd6666666777777777777777766666667999999999999999
        999999999dddd9ddd111d111d111dddd1ddddddd66666666666666666666667999999999999999999999999999999999dddddddddddddddddddd66666666666666666666666666799999999999999999
        999999999d11ddddd111d111d1111dd11dddd11d666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd666666666666666666666679999999999999999999
        999999999d111dddd1111d1111111d111ddd111dd6666666666666666799999999999999999999999999999999999dddddddddddddddddddddddddddd666666666666666679999999999999999999999
        999999999d1111dddd111d1111111111ddd1111dddddd77779999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddd77779999999999999999999999999999999
        999999999d11111ddd11111111111111dd11111ddddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddd7779999999999999999999999999999999
        999999999d11111ddd1111111111d11ddd1111ddddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777ddddddddddddddd799999999999999999999999999999999
        999999999dd11111ddd1111dd11dddddd11111ddddddddd799999999999999999b6666666667999999999999997dddddddddddddddddd7777777ddddddddddd799999999999999999b66666666679999
        9999999999d111111dd11ddd5ddddddd11111dd7dddddd7999999999999999999bb666666666667999999999997ddddddddddddddddddd7777777777dddddd7999999999999999999bb6666666666679
        79999ddd99dd111111ddd5d555dddddd1111ddd7ddddd799999999999999999997b6666666666666799999999997dddddddddddddddddddd777777777777d799999999999999999997b6666666666666
        66999d11ddddd111ddddd55555d5dddd111ddddd1111d99999999999966b7999997b6666666666666699999999977ddddddddddddddddddddd7799977777799999999999966b7999997b666666666666
        66699d1111dddd11d11dd5555555dd11d1ddddd1111dd9999999999966666679999bb6666666666666699999999977dddddddddddddddddddddd7999999999999999999966666679999bb66666666666
        666799d1111ddddddd111dd555511111ddddd11111dd9999999999966666666b9997b666666666666667999999999777ddddddddddddddddd777799999999999999999966666666b9997b66666666666
        666699dd11111ddddd11111d5d11111dddd111111dd9999999999966666666666b99bb666666666666669999999999777777777777777777777799999999999999999966666666666b99bb6666666666
        6666977ddd11111dddd11111d11111ddd11111dddd999999999996666666666666677b6666666666666697777669999977777777777777777999999999999999999996666666666666677b6666666666
        667777777dddd1111ddd11ddddd11dd1111ddddddd9999999999966666666666666666666666666666777777776999999999999999999999999999999999999999999666666666666666666666666666
        7777777111111ddddddddd11111ddddddddd111111d999999999676666666666666666666666666777777777776999999999999966799999999999999999999999996766666666666666666666666667
        77777771111111111dddd1111111dddd11111111177999999999b76666666666666666666666677777777777776799999999996677dd799999999999999ddddd99dddd66666666666666666666666777
        777777777111111dddddddd111dddddddd111117779999999999b676666666666666666666677777777777777776999999996677777d7799999999999ddd1d1dddd11d76666666666666666666677777
        77777777777777dd7d11ddddddddd111dddddd779999999999997b77666666666666666666777777777777777776799999667777777dd7999999ddd99dd11d11dd111d77666666666666666666777777
        777777777ddddd771111d111dddd11111177dddd7799999999999bb77666666666666666677777777777777777776999667777777777d7dddd99d1dddd111d111d111ddd7dddd6666666666667777777
        77777777ddddd7711111d1111ddd711111177dddd7799999999997bb7776666666666666777777777777777777776666777777777777d7d11dd9d11dd1111d111d111ddddd11d6666666666677777777
        7777777ddddd7711111dd11111dd77111111777777999999999999bbb677666666666667777777777777777777776677777777777777d7d111ddd111d1111111d1111dddd111d6666666666777777777
        777777777ddd711111d7dd1111ddd67d11111d99999999999999999bbb6666666666666777777777777777777777777777777777777dd6d1111ddd1111111111d111dddd1111d6666666666777777777
        777777777777d111dd777d11111d7669ddddd9999999999999999999bbbbbb66666666b777777777777777777777777777777777777d76d11111dd11111111111111ddd11111db66666666b777777777
        7777777777777ddd777777d1111d666999999999999999999999999997bbbbbbbbbbbbb777777777777777777777777777777777777766dd1111ddd11d1111111111ddd11111dbbbbbbbbbb777777777
        77777777777777777777777d111d66799999999999999999999999999997bbbbbbbbbbb677777777777777777777777777777777777666dd11111dddddd11dd1111ddd11111ddbbbbbbbbbb677777777
        777777777777777777777777ddd66699999999999999999999999999999997bbbbbbbbb6677777777777777777777777777777777766669dd11111ddddddd5ddd11dd111111d97bbbbbbbbb667777777
        7777777777777777777777777666699999999999999999999999999999999999999999966777777777777777777777777777777776dddd9ddd1111dddddd555d5ddd111111dd99ddd999999667777777
        777777777777777777777777666699999999999999999999999999999999999999999997667777777777777777777777777777776d1111ddddd111dddd5d55555ddddd111ddddd11d999999766777777
        777777777777777777777766666999999999999999999999999999999999999999999999666777777777777777777777777777666dd1111ddddd1d11dd5555555dd11d11dddd1111d999999966677777
        7777777777777777777766666699999999999999999999999999999999999dddddddddddd666677777777777777777777777666666dd11111ddddd111115555dd111ddddddd1111dddddddddd6666777
        6777777777777777766666667999999999999999999999999999999999dddddddddddddddd666666677777777777777776666666799dd111111dddd11111d5d11111ddddd11111dddddddddddd666666
        66666666666666666666667999999999999999999999999999999999dddddddddddddddddddd66666666666666666666666666799999dddd11111ddd11111d11111dddd11111dddddddddddddddd6666
        666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd666666666666666666666679999999ddddddd1111dd11ddddd11ddd1111dddd777dddddddddddddd66
        d6666666666666666799999999999999999999999999999999999dddddddddddddddddddddddddddd66666666666666667999999999d111111ddddddddd11111ddddddddd1111117dddddddddddddddd
        ddddd77779999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddd777799999999999999999977111111111dddd1111111dddd11111111117dddddddddddddddd
        dddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddd777999999999999999999977711111dddddddd111dddddddd11111177ddddddddddddddddd
        ddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777ddddddddddddddd7999999999999999999999977dddddd111ddddddddd11d7dd77777dddddd77777dddddddd
        ddddddd799999999999999999b6666666667999999999999997dddddddddddddddddd7777777ddddddddddd799999999999999999b6677dddd77111111dddd111d111177ddddddddddddd7777777dddd
        dddddd7999999999999999999bb666666666667999999999997ddddddddddddddddddd7777777777dddddd7999999999999999999bb77dddd771111117ddd1111d1111177ddddddddddddd7777777777
        7777d799999999999999999997b6666666666666799999999997dddddddddddddddddddd777777777777d799999999999999999997b677777711111177dd11111dd1111177dddddddddddddd77777777
        7777799999999999966b7999997b6666666666666699999999977ddddddddddddddddddddd7799977777799999999999966b7999997b6666d11111d766dd1111dd9d111117dddddddddddddddd779997
        999999999999999966666679999bb6666666666666699999999977dddddddddddddddddddddd7999999999999999999966666679999bb6666ddddd6666d11111d999dd111ddddddddddddddddddd7999
        99999999999999966666666b9997b666666666666667999999999777ddddddddddddddddd777799999999999999999966666666b9997b6666666666666d1111d999997ddddddddddddddddddd7777999
        9999999999999966666666666b99bb666666666666669999999999777777777777777777777799999999999999999966666666666b99bb666666666666d111d999999977777777777777777777779999
        99999999999996666666666666677b6666666666666697777669999977777777777777777999999999999999999996666666666666677b6666666666666ddd7776699999777777777777777779999999
        9999999999999666666666666666666666666666667777777769999999999999999999999999999999999999999996666666666666666666666666666677777777699999999999999999999999999999
        9999999999996766666666666666666666666667777777777769999999999999667999999999999999999999999967666666666666666666666666677777777777699999999999996679999999999999
        999999999999b76666666666666666666666677777777777776799999999996677dd799999999999999999999999b76666666666666666666666677777777777776799999999996677dd799999999999
        999999999999b676666666666666666666677777777777777776999999996677777d779999999999999999999999b676666666666666666666677777777777777776999999996677777d779999999999
        9999999999997b77666666666666666666777777777777777776799999667777777dd799999999999999999999997b77666666666666666666777777777777777776799999667777777dd79999999999
        9999999999999bb77666666666666666677777777777777777776999667777777777d769999999999999999999999bb77666666666666666677777777777777777776999667777777777d76999999999
        99999999999997bb7776666666666666777777777777777777776666777777777777d7699999999999999999999997bb7776666666666666777777777777777777776666777777777777d76999999999
        99999999999999bbb677666666666667777777777777777777776677777777777777d7699999999999999999999999bbb677666666666667777777777777777777776677777777777777d76999999999
        999999999999999bbb6666666666666777777777777777777777777777777777777dd66999999999999999999999999bbb6666666666666777777777777777777777777777777777777dd66999999999
        9999999999999999bbbbbb66666666b777777777777777777777777777777777777d7669999999999999999999999999bbbbbb66666666b777777777777777777777777777777777777d766999999999
        999999999999999997bbbbbbbbbbbbb7777777777777777777777777777777777777666999999999999999999999999997bbbbbbbbbbbbb7777777777777777777777777777777777777666999999999
        99999999999999999997bbbbbbbbbbb677777777777777777777777777777777777666799999999999999999999999999997bbbbbbbbbbb6777777777777777777777777777777777776667999999999
        9999999999999999999997bbbbbbbbb66777777777777777777777777777777777666699999999999999999999999999999997bbbbbbbbb6677777777777777777777777777777777766669999999999
        9999999999999999999999999999999667777777777777777777777777777777766669999999999999999999999999999999999999999996677777777777777777777777777777777666699999999999
        9999999999999999999999999999999766777777777777777777777777777777666699999999999999999999999999999999999999999997667777777777777777777777777777776666999999999999
        9999999999999999999999999999999966677777777777777777777777777766666999999999999999999999999999999999999999999999666777777777777777777777777777666669999999999999
        999999999999999999999dddddddddddd66667777777777777777777777766666699999999999999999999999999999999999dddddddddddd66667777777777777777777777766666699999999999999
        999999999999999999dddddddddddddddd6666666777777777777777766666667999999999999999999999999999999999dddddddddddddddd6666666777777777777777766666667999999999999999
        9999999999999999dddddddddddddddddddd666666666666666666666666667999999999999999999999999999999999dddddddddddddddddddd66666666666666666666666666799999999999999999
        99999999999999dddddddddddddddddddddddd66666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd666666666666666666666679999999999999999999
        9999999999999dddddddddddddddddddddddddddd6666666666666666799999999999999999999999999999999999dddddddddddddddddddddddddddd666666666666666679999999999999999999999
        999999999999ddddddddddddddddddddddddddddddddd77779999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddd77779999999999999999999999999999999
        99999999999ddddddddddddddddddddddddddddddddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddd7779999999999999999999999999999999
        99999999999dddddddddddddddd77777ddddddddddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777ddddddddddddddd799999999999999999999999999999999
        99999999997dddddddddddddddddd7777777ddddddddddd799999999999999999b6666666667999999999999997dddddddddddddddddd7777777ddddddddddd799999999999999999b66666666679999
        99999999997ddddddddddddddddddd7777777777dddddd7999999999999999999bb666666666667999999999997ddddddddddddddddddd7777777777dddddd7999999999999999999bb6666666666679
        799999999997dddddddddddddddddddd777777777777d799999999999999999997b6666666666666799999999997dddddddddddddddddddd777777777777d799999999999999999997b6666666666666
        6699999999977ddddddddddddddddddddd7799977777799999999999966b7999997b6666666666666699999999977ddddddddddddddddddddd7799977777799999999999966b7999997b666666666666
        66699999999977dddddddddddddddddddddd7999999999999999999966666679999bb6666666666666699999999977dddddddddddddddddddddd7999999999999999999966666679999bb66666666666
        6667999999999777ddddddddddddddddd777799999999999999999966666666b9997b666666666666667999999999777ddddddddddddddddd777799999999999999999966666666b9997b66666666666
        66669999999999777777777777777777777799999999999999999966666666666b99bb666666666666669999999999777777777777777777777799999999999999999966666666666b99bb6666666666
        666697777669999977777777777777777999999999999999999996666666666666677b6666666666666697777669999977777777777777777999999999999999999996666666666666677b6666666666
        6677777777699999999999999999999999999999999999999999966666666666666666666666666666777777776999999999999999999999999999999999999999999666666666666666666666666666
        7777777777699999999999996679999999dddd99ddddd9999999676666666666666666666666666777777777776999999999999966799999999999999999999999996766666666666666666666666667
        77777777776799999999996677dd799999d11dddd1d1ddd99999b76666666666666666666666677777777777776799999999996677dd799999999999999999999999b766666666666666666666666777
        777777777776999999996677777d779999d111dd11d11dd99dddb676666666666666666666677777777777777776999999996677777d779999999999999999999999b676666666666666666666677777
        777777777776799999667777777dddd9ddd111d111d111dddd1d7bdddd6666666666666666777777777777777776799999667777777dd799999999999999999999997b77666666666666666666777777
        777777777777699966777777777d11ddddd111d111d1111dd11d9dd11d66666666666666677777777777777777776999667777777777d769999999999999999999999bb7766666666666666667777777
        777777777777666677777777777d111dddd1111d1111111d111ddd111d76666666666666777777777777777777776666777777777777d7699999999999999999999997bb777666666666666677777777
        777777777777667777777777777d1111dddd111d1111111111ddd1111d77666666666667777777777777777777776677777777777777d7699999999999999999999999bbb67766666666666777777777
        777777777777777777777777777d11111ddd11111111111111dd11111d6666666666666777777777777777777777777777777777777dd66999999999999999999999999bbb6666666666666777777777
        777777777777777777777777777d11111ddd1111111111d11ddd1111ddbbbb66666666b777777777777777777777777777777777777d7669999999999999999999999999bbbbbb66666666b777777777
        777777777777777777777777777dd11111ddd1111dd11dddddd11111ddbbbbbbbbbbbbb7777777777777777777777777777777777777666999999999999999999999999997bbbbbbbbbbbbb777777777
        7777777777777777777777777776d111111dd11ddd5ddddddd11111dd997bbbbbbbbbbb677777777777777777777777777777777777666799999999999999999999999999997bbbbbbbbbbb677777777
        77777777777777777777777ddd66dd111111ddd5d555dddddd1111ddd9ddddbbbbbbbbb66777777777777777777777777777777777666699999999999999999999999999999997bbbbbbbbb667777777
        77777777777777777777777d11ddddd111ddddd55555d5dddd111ddddd1111d9999999966777777777777777777777777777777776666999999999999999999999999999999999999999999667777777
        77777777777777777777777d1111dddd11d11dd5555555dd11d1ddddd1111dd9999999976677777777777777777777777777777766669999999999999999999999999999999999999999999766777777
        777777777777777777777766d1111ddddddd111dd555511111ddddd11111dd99999999996667777777777777777777777777776666699999999999999999999999999999999999999999999966677777
        777777777777777777776666dd11111ddddd11111d5d11111dddd111111dddddddddddddd66667777777777777777777777766666699999999999999999999999999999999999dddddddddddd6666777
        6777777777777777766666667ddd11111dddd11111d11111ddd11111dddddddddddddddddd6666666777777777777777766666667999999999999999999999999999999999dddddddddddddddd666666
        666666666666666666666679777dddd1111ddd11ddddd11dd1111ddddddddddddddddddddddd666666666666666666666666667999999999999999999999999999999999dddddddddddddddddddd6666
        6666666666666666666679997111111ddddddddd11111ddddddddd111111dddddddddddddddddd66666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd66
        d6666666666666666799999971111111111dddd1111111dddd11111111177dddddddddddddddddddd6666666666666666799999999999999999999999999999999999ddddddddddddddddddddddddddd
        ddddd7777999999999999999977111111dddddddd111dddddddd11111777ddddddddddddddddddddddddd77779999999999999999999999999999999999999999999dddddddddddddddddddddddddddd
        dddddd77799999999999999999977777dd7d11ddddddddd111dddddd77dddddddddddddddddddddddddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddd
        ddddddd79999999999999999999ddddd771111d111dddd11111177dddd77ddddddd77777ddddddddddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777dddddddd
        ddddddd799999999999999999bddddd7711111d1111ddd711111177dddd77dddddddd7777777ddddddddddd799999999999999999b6666666667999999999999997dddddddddddddddddd7777777dddd
        dddddd7999999999999999999ddddd7711111dd11111dd77111111777777dddddddddd7777777777dddddd7999999999999999999bb666666666667999999999997ddddddddddddddddddd7777777777
        7777d799999999999999999997bddd711111d6dd1111dd997d11111ddddddddddddddddd777777777777d799999999999999999997b6666666666666799999999997dddddddddddddddddddd77777777
        7777799999999999966b7999997b66d111dd666d11111d9999dddddddddddddddddddddddd7799977777799999999999966b7999997b6666666666666699999999977ddddddddddddddddddddd779997
        999999999999999966666679999bb66ddd666666d1111d99999977dddddddddddddddddddddd7999999999999999999966666679999bb6666666666666699999999977dddddddddddddddddddddd7999
        99999999999999966666666b9997b666666666666d111d9999999777ddddddddddddddddd777799999999999999999966666666b9997b666666666666667999999999777ddddddddddddddddd7777999
        9999999999999966666666666b99bb666666666666ddd999999999777777777777777777777799999999999999999966666666666b99bb66666666666666999999999977777777777777777777779999
        99999999999996666666666666677b6666666666666697777669999977777777777777777999999999999999999996666666666666677b66666666666666977776699999777777777777777779999999
        9999999999999666666666666666666666666666667777777769999999999999999999999999999999999999999996666666666666666666666666666677777777699999999999999999999999999999
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
    userIcon.setPosition(80, 50)
    usernameText = textsprite.create(user1Name, 0, 1)
    usernameText.setPosition(80, 72)
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
    passwordField.setPosition(72, 86)
    logInButton = sprites.create(assets.image`myImage2`, SpriteKind.Password_Button)
    logInButton.setPosition(103, 86)
    su_user1Box = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f1111111111111111111199999999999999996666666666666666666666f
        f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f
        f9f999999999999999999999999999999999999999999999999999999f6f
        f9f999fff999999999999999999999999999999999999999999999999f6f
        f9f99f168f99999999999999999999999999999999999999999999999f6f
        f9f99f968f99999999999999999999999999999999999999999999999f6f
        f9f99fffff99999999999999999999999999999999999999999999999f6f
        f9f99fffff99999999999999999999999999999999999999999999999f8f
        f9f999f6f999999999999999999999999999999999999999999999999f8f
        f9f99fffff99999999999999999999999999999999999999999999999f8f
        f9f9f19688f9999999999999999999999999999999999999999999999f8f
        f6f9fffffff9999999999999999999999999999999999999999999999f8f
        f6f9fffffff9999999999999999999999999999999999999999999999f8f
        f6f999999999999999999999999999999999999999999999999999999f8f
        f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f6666666666666666666666666668888888888888888888888888888888f
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.SwitchUser_Button)
    su_user1Box.setPosition(30, 10)
    su_user2Box = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f1111111111111111111199999999999999996666666666666666666666f
        f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f
        f9f666666666666666666666666666666666666666666666666666666f6f
        f9f666fff666666666666666666666666666666666666666666666666f6f
        f9f66f168f66666666666666666666666666666666666666666666666f6f
        f9f66f968f66666666666666666666666666666666666666666666666f6f
        f9f66fffff66666666666666666666666666666666666666666666666f6f
        f9f66fffff66666666666666666666666666666666666666666666666f8f
        f9f666f6f666666666666666666666666666666666666666666666666f8f
        f9f66fffff66666666666666666666666666666666666666666666666f8f
        f9f6f19688f6666666666666666666666666666666666666666666666f8f
        f6f6fffffff6666666666666666666666666666666666666666666666f8f
        f6f6fffffff6666666666666666666666666666666666666666666666f8f
        f6f666666666666666666666666666666666666666666666666666666f8f
        f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f6666666666666666666666666668888888888888888888888888888888f
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.SwitchUser_Button)
    su_user2Box.setPosition(30, 29)
    su_menuUser1 = textsprite.create(user1Name, 0, 1)
    su_menuUser1.setPosition(30, 9)
    su_menuUser2 = textsprite.create(user2Name, 0, 1)
    su_menuUser2.setPosition(30, 28)
    powerButton = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f 1 1 1 1 1 9 9 9 9 9 6 6 6 6 f 
        f 1 f f f f f f f f f f f f 6 f 
        f 1 f 9 9 9 9 9 9 9 9 9 9 f 6 f 
        f 9 f 9 9 9 f f f f 9 9 9 f 8 f 
        f 9 f 9 9 9 f 1 9 f 9 9 9 f 8 f 
        f 6 f 9 9 9 f 9 6 f 9 9 9 f 8 f 
        f 6 f 9 9 9 f 6 8 f 9 9 9 f 8 f 
        f 6 f 9 9 9 f 8 8 f 9 9 9 f 8 f 
        f 6 f 9 9 9 f f f f 9 9 9 f 8 f 
        f 6 f 9 9 9 9 9 9 9 9 9 9 f 8 f 
        f 6 f f f f f f f f f f f f 8 f 
        f 6 f f f f f f f f f f f f 8 f 
        f 6 6 6 6 8 8 8 8 8 8 8 8 8 8 f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Button)
    powerButton.setPosition(152, 112)
    networkButton = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f 1 1 1 1 1 9 9 9 9 9 6 6 6 6 f 
        f 1 f f f f f f f f f f f f 6 f 
        f 1 f 9 9 9 9 9 9 9 9 9 9 f 6 f 
        f 9 f 9 9 f f 9 9 f f 9 9 f 8 f 
        f 9 f 9 f 1 f 9 9 f 9 f 9 f 8 f 
        f 6 f 9 f 8 9 f f 9 8 f 9 f 8 f 
        f 6 f 9 f 8 6 f f 6 8 f 9 f 8 f 
        f 6 f 9 f 6 f 9 9 f 6 f 9 f 8 f 
        f 6 f 9 9 f f 9 9 f f 9 9 f 8 f 
        f 6 f 9 9 9 9 9 9 9 9 9 9 f 8 f 
        f 6 f f f f f f f f f f f f 8 f 
        f 6 f f f f f f f f f f f f 8 f 
        f 6 6 6 6 8 8 8 8 8 8 8 8 8 8 f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Button)
    networkButton.setPosition(137, 112)
    soundMixerButton = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f 1 1 1 1 1 9 9 9 9 9 6 6 6 6 f 
        f 1 f f f f f f f f f f f f 6 f 
        f 1 f 9 9 9 9 9 9 9 9 9 9 f 6 f 
        f 9 f 9 9 9 f f 9 f f 9 9 f 8 f 
        f 9 f 9 9 f 1 f 9 1 9 f 9 f 8 f 
        f 6 f 9 f 6 9 f 9 f 6 f 9 f 8 f 
        f 6 f 9 f 8 6 f 9 f 6 f 9 f 8 f 
        f 6 f 9 9 f 8 f 9 6 8 f 9 f 8 f 
        f 6 f 9 9 9 f f 9 f f 9 9 f 8 f 
        f 6 f 9 9 9 9 9 9 9 9 9 9 f 8 f 
        f 6 f f f f f f f f f f f f 8 f 
        f 6 f f f f f f f f f f f f 8 f 
        f 6 6 6 6 8 8 8 8 8 8 8 8 8 8 f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Button)
    soundMixerButton.setPosition(122, 112)
    cursorTop = sprites.create(img`
        . f f f f f f . . . 
        f 1 1 1 9 9 6 f . . 
        f 1 f f f 6 6 f . . 
        f 1 f f 6 f f . . . 
        f 9 f 6 f 6 f . . . 
        f 9 6 f 6 . . . . . 
        f 6 6 f f . . . . . 
        . f f . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, SpriteKind.Cursor)
    cursorTop.setPosition(cursorPosX, cursorPosY)
    cursorBottom = sprites.create(assets.image`myImage`, SpriteKind.Cursor_bottom)
    controller.moveSprite(cursorTop, 100, 100)
    controller.moveSprite(cursorBottom, 100, 100)
    cursorTop.z = 100
    cursorBottom.z = 100
    cursorTop.setFlag(SpriteFlag.StayInScreen, true)
    cursorBottom.setFlag(SpriteFlag.StayInScreen, true)
    cursorBottom.setPosition(cursorTop.x, cursorTop.y)
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
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.Password_Textbox, function (sprite, otherSprite) {
    cursorTop.say("Enter password", 100)
    if (pressCooldown == 0) {
        if (controller.A.isPressed()) {
            if (firstPasswordInput == 1) {
                passwordInput = game.askForString("Enter Password", 6)
                cursorPosX = cursorTop.x
                cursorPosY = cursorTop.y
                if (passwordInput.isEmpty() || passwordInput.includes("  ")) {
                    passwordLength = 0
                    passwordText = textsprite.create("", 0, 0)
                    passwordText.destroy()
                } else {
                    cursorTop.z = 100
                    passwordLength = passwordInput.length
                    passwordText = textsprite.create(passwordInput, 0, 1)
                    passwordText.setPosition(72, 85)
                    firstPasswordInput = 0
                }
            } else {
                passwordText.destroy()
                passwordInput = game.askForString("Enter Password", 6)
                cursorPosX = cursorTop.x
                cursorPosY = cursorTop.y
                if (passwordInput.isEmpty()) {
                    passwordLength = 0
                    textSprite = textsprite.create("", 0, 0)
                } else {
                    passwordText.destroy()
                    cursorTop.z = 100
                    passwordLength = passwordInput.length
                    passwordText = textsprite.create(passwordInput, 0, 1)
                    passwordText.setPosition(72, 85)
                }
            }
            if (passwordLength >= requiredPasswordLength) {
                passwordEntered = 1
                logInButton.destroy()
                logInButton = sprites.create(assets.image`myImage0`, SpriteKind.Password_Button)
                logInButton.setPosition(103, 86)
                cursorPosX = cursorTop.x
                cursorPosY = cursorTop.y
                cursorTop.destroy()
                cursorBottom.destroy()
                cursorTop = sprites.create(img`
                    . f f f f f f . . . 
                    f 1 1 1 9 9 6 f . . 
                    f 1 f f f 6 6 f . . 
                    f 1 f f 6 f f . . . 
                    f 9 f 6 f 6 f . . . 
                    f 9 6 f 6 . . . . . 
                    f 6 6 f f . . . . . 
                    . f f . . . . . . . 
                    . . . . . . . . . . 
                    . . . . . . . . . . 
                    `, SpriteKind.Cursor)
                cursorTop.setPosition(cursorPosX, cursorPosY)
                cursorBottom = sprites.create(assets.image`myImage`, SpriteKind.Cursor_bottom)
                cursorBottom.setPosition(cursorTop.x, cursorTop.y)
                cursorTop.setStayInScreen(true)
                cursorBottom.setStayInScreen(true)
                cursorTop.z = 100
                cursorBottom.z = 100
                controller.moveSprite(cursorTop, 100, 100)
                controller.moveSprite(cursorBottom, 100, 100)
                cursorTop.say("Enter password", 100)
            } else {
                logInButton.destroy()
                logInButton = sprites.create(assets.image`myImage2`, SpriteKind.Password_Button)
                logInButton.setPosition(103, 86)
                cursorPosX = cursorTop.x
                cursorPosY = cursorTop.y
                cursorTop.destroy()
                cursorBottom.destroy()
                cursorTop = sprites.create(img`
                    . f f f f f f . . . 
                    f 1 1 1 9 9 6 f . . 
                    f 1 f f f 6 6 f . . 
                    f 1 f f 6 f f . . . 
                    f 9 f 6 f 6 f . . . 
                    f 9 6 f 6 . . . . . 
                    f 6 6 f f . . . . . 
                    . f f . . . . . . . 
                    . . . . . . . . . . 
                    . . . . . . . . . . 
                    `, SpriteKind.Cursor)
                cursorTop.setPosition(cursorPosX, cursorPosY)
                cursorBottom = sprites.create(assets.image`myImage`, SpriteKind.Cursor_bottom)
                cursorBottom.setPosition(cursorTop.x, cursorTop.y)
                cursorTop.setStayInScreen(true)
                cursorBottom.setStayInScreen(true)
                controller.moveSprite(cursorTop, 100, 100)
                controller.moveSprite(cursorBottom, 100, 100)
                cursorTop.z = 100
                cursorBottom.z = 100
                cursorTop.say("Enter password", 100)
            }
            pressCooldown = 1
            pause(750)
            pressCooldown = 0
        }
    }
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.SwitchUser_Button, function (sprite, otherSprite) {
    if (otherSprite == su_user1Box) {
        if (pressCooldown == 0) {
            if (controller.A.isPressed()) {
                currentUser = 1
                su_user1Box.setImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    f1111111111111111111199999999999999996666666666666666666666f
                    f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f
                    f9f999999999999999999999999999999999999999999999999999999f6f
                    f9f999fff999999999999999999999999999999999999999999999999f6f
                    f9f99f168f99999999999999999999999999999999999999999999999f6f
                    f9f99f968f99999999999999999999999999999999999999999999999f6f
                    f9f99fffff99999999999999999999999999999999999999999999999f6f
                    f9f99fffff99999999999999999999999999999999999999999999999f8f
                    f9f999f6f999999999999999999999999999999999999999999999999f8f
                    f9f99fffff99999999999999999999999999999999999999999999999f8f
                    f9f9f19688f9999999999999999999999999999999999999999999999f8f
                    f6f9fffffff9999999999999999999999999999999999999999999999f8f
                    f6f9fffffff9999999999999999999999999999999999999999999999f8f
                    f6f999999999999999999999999999999999999999999999999999999f8f
                    f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
                    f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
                    f6666666666666666666666666668888888888888888888888888888888f
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                su_user2Box.setImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    f1111111111111111111199999999999999996666666666666666666666f
                    f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f
                    f9f666666666666666666666666666666666666666666666666666666f6f
                    f9f666fff666666666666666666666666666666666666666666666666f6f
                    f9f66f168f66666666666666666666666666666666666666666666666f6f
                    f9f66f968f66666666666666666666666666666666666666666666666f6f
                    f9f66fffff66666666666666666666666666666666666666666666666f6f
                    f9f66fffff66666666666666666666666666666666666666666666666f8f
                    f9f666f6f666666666666666666666666666666666666666666666666f8f
                    f9f66fffff66666666666666666666666666666666666666666666666f8f
                    f9f6f19688f6666666666666666666666666666666666666666666666f8f
                    f6f6fffffff6666666666666666666666666666666666666666666666f8f
                    f6f6fffffff6666666666666666666666666666666666666666666666f8f
                    f6f666666666666666666666666666666666666666666666666666666f8f
                    f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
                    f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
                    f6666666666666666666666666668888888888888888888888888888888f
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                usernameText.setText(user1Name)
                pressCooldown = 1
                pause(100)
                pressCooldown = 0
            }
        }
    } else if (otherSprite == su_user2Box) {
        if (pressCooldown == 0) {
            if (controller.A.isPressed()) {
                currentUser = 2
                su_user2Box.setImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    f1111111111111111111199999999999999996666666666666666666666f
                    f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f
                    f9f999999999999999999999999999999999999999999999999999999f6f
                    f9f999fff999999999999999999999999999999999999999999999999f6f
                    f9f99f168f99999999999999999999999999999999999999999999999f6f
                    f9f99f968f99999999999999999999999999999999999999999999999f6f
                    f9f99fffff99999999999999999999999999999999999999999999999f6f
                    f9f99fffff99999999999999999999999999999999999999999999999f8f
                    f9f999f6f999999999999999999999999999999999999999999999999f8f
                    f9f99fffff99999999999999999999999999999999999999999999999f8f
                    f9f9f19688f9999999999999999999999999999999999999999999999f8f
                    f6f9fffffff9999999999999999999999999999999999999999999999f8f
                    f6f9fffffff9999999999999999999999999999999999999999999999f8f
                    f6f999999999999999999999999999999999999999999999999999999f8f
                    f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
                    f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
                    f6666666666666666666666666668888888888888888888888888888888f
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                su_user1Box.setImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    f1111111111111111111199999999999999996666666666666666666666f
                    f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f
                    f9f666666666666666666666666666666666666666666666666666666f6f
                    f9f666fff666666666666666666666666666666666666666666666666f6f
                    f9f66f168f66666666666666666666666666666666666666666666666f6f
                    f9f66f968f66666666666666666666666666666666666666666666666f6f
                    f9f66fffff66666666666666666666666666666666666666666666666f6f
                    f9f66fffff66666666666666666666666666666666666666666666666f8f
                    f9f666f6f666666666666666666666666666666666666666666666666f8f
                    f9f66fffff66666666666666666666666666666666666666666666666f8f
                    f9f6f19688f6666666666666666666666666666666666666666666666f8f
                    f6f6fffffff6666666666666666666666666666666666666666666666f8f
                    f6f6fffffff6666666666666666666666666666666666666666666666f8f
                    f6f666666666666666666666666666666666666666666666666666666f8f
                    f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
                    f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
                    f6666666666666666666666666668888888888888888888888888888888f
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                usernameText.setText(user2Name)
                pressCooldown = 1
                pause(100)
                pressCooldown = 0
            }
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (allowBoot == 1) {
        power2 = 1
        windowsBootManager()
    }
})
function passwordLoadingScreen () {
    cursorTop.destroy()
    cursorBottom.destroy()
    userIcon.destroy()
    passwordField.destroy()
    logInButton.destroy()
    passwordText.destroy()
    usernameText.destroy()
    su_user1Box.destroy()
    su_menuUser1.destroy()
    su_user2Box.destroy()
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
    if (currentUser == 1) {
        if (passwordInput == user1Password) {
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
            passwordText = textsprite.create("Wrong", 0, 2)
            passwordText.setPosition(72, 85)
            passwordText.z = 10
            passwordEntered = 0
            lockScreen()
        }
    } else if (currentUser == 2) {
        if (passwordInput == user2Password) {
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
            passwordText = textsprite.create("Wrong", 0, 2)
            passwordText.setPosition(72, 85)
            passwordText.z = 10
            passwordEntered = 0
            lockScreen()
        }
    }
}
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.Password_Button, function (sprite, otherSprite) {
    if (passwordEntered == 1 && passwordLength >= requiredPasswordLength) {
        cursorTop.say("Continue", 100)
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
let loadingCircle: Sprite = null
let welcomeText: TextSprite = null
let allowBoot = 0
let textSprite: TextSprite = null
let passwordText: Sprite = null
let passwordLength = 0
let passwordInput = ""
let graphicsStatus: TextSprite = null
let controllerStatus: TextSprite = null
let graphicsText: TextSprite = null
let controllerText: TextSprite = null
let makeBootText: TextSprite = null
let firstPasswordInput = 0
let cursorBottom: Sprite = null
let su_menuUser2: TextSprite = null
let su_menuUser1: Sprite = null
let su_user2Box: Sprite = null
let su_user1Box: Sprite = null
let logInButton: Sprite = null
let passwordField: Sprite = null
let usernameText: TextSprite = null
let userIcon: Sprite = null
let powerMenu: Sprite = null
let pressCooldown = 0
let soundMixerButton: Sprite = null
let networkButton: Sprite = null
let powerButton: Sprite = null
let cursorPosY = 0
let cursorPosX = 0
let cursorTop: Sprite = null
let animationInterval = 0
let windowsLogo: Sprite = null
let startingWindowsText: TextSprite = null
let microsoftText: TextSprite = null
let bootSuccess = 0
let gDriversBootTime = 0
let cDriversBootTime = 0
let powerMenuOpen = false
let passwordEntered = 0
let requiredPasswordLength = 0
let currentUser = 0
let user2Password = ""
let user1Password = ""
let user2Name = ""
let user1Name = ""
let startupKeyText: Sprite = null
let power2 = 0
power2 = 0
scene.setBackgroundImage(assets.image`bg_0`)
startupKeyText = textsprite.create("Press     to startup")
startupKeyText.setPosition(69, 11)
user1Name = "Admin"
user2Name = "User"
user1Password = "1234"
user2Password = "1111"
currentUser = 1
requiredPasswordLength = 4
passwordEntered = 0
powerMenuOpen = false
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
