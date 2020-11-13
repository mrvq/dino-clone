function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () =>{
    //Mais de uma expressão
    return 'Code here';
}

//funções tambem são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//receber e retornar funções
const controlFNExec = fnParam => allowed =>{
    if(allowed){
        fnParam();
    }
}

const handleFnExecution = controlFNExec(fn);
handleFnExecution(true); //Executa a função fn
handleFnExecution(); //Não executara a função fn 

function controlFNExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}