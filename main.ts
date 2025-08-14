basic.forever(function () {
    // 明るさが20以下、かつデジタルで1が出力された場合LED全点灯
    if (input.lightLevel() <= 20 && pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(30000)
    } else {
        // 条件に当てはまらない場合はLEDを消す
        basic.clearScreen()
    }
})
