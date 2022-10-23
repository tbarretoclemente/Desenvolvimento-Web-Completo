// 

function* testeGeneretors(){
    console.log(`Teste 1`);
    yield console.log(`Teste 2`);
    console.log(`Teste 3`);

    return `Teste 4`;
}

let funcGenerator = testeGeneretors(); //objeto iterator
console.log(funcGenerator);
funcGenerator.next();