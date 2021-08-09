function snapCrackle(maxValue) {
    let cad = ""
    for (let i = 1; i <= maxValue; i++) {
        cad = cad
        cad = cad + i
        
    }
    return cad
}

console.assert(snapCrackle(10) === "12345678910", "algo está errado")