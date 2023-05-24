for (let index = 0; index <= 2; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showString("" + (3 - index))
}
music.playTone(392, music.beat(BeatFraction.Whole))
basic.showString("Go")
