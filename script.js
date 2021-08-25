function snapCrackle(maxValue){
let lista = []
    for (let i = 1; i <= maxValue; i++) {
        if(i % 2 === 1){
            lista.push('Snap')
        }else if(i % 5 === 0){
            lista.push('Crackle')
        }
        if(i % 2 === 1 && i % 5 === 0){
            lista.push('SnapCrackle')
        }
        if(!(i % 2 === 1 && i % 5 === 0)){
            lista.push(i)
        } 
     
    }     
    return lista.join(', ')
}

console.log(snapCrackle(15))

