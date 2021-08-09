function snapCrackle(maxValue) {

    let cad = new Array(maxValue)

    for (let i = 0; i <= maxValue; i++) {

        if (i % 2 !== 0 && i % 5 === 0) {
            cad[i] = "SnapCrackle"
            
        } else if (i % 2 !== 0) {
            cad[i] = "Snap"

        } else if (i % 2 === 0 && i % 5 === 0) {
            cad[i] = "Crackle"

        } else {
            cad[i] = i
        }
    }

    cad.shift()
    return cad.toString()
}


