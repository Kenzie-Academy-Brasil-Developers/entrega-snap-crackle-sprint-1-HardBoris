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


function multiplos5(v) {
    let fiv = new Array(v)
    
    for (let i = 0; i <= v; i++) {

        if (i % 2 !== 0 && i % 5 === 0) {
            fiv[i] = "SnapCrackle"
            
        } else if (i % 2 !== 0) {
            fiv[i] = "Snap"
        } else if (i % 2 === 0 && i % 5 === 0) {
            fiv[i] = "Crackle"
        } else {
            fiv[i] = i
        }
    }
    return fiv
}

console.log(multiplos5())