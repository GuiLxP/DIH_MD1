function calcular(arr) {
    if (!arr || arr.length === 0) {
        console.log('Não é possível calcular!');
        return;
    }
    let min = arr[0];
    let max = arr[0];
    Math.max(...arr)
    for(let i=0; i < arr.length; i++) {
        if ( arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        console.log('min', min);
        console.log('max', max);
        
    }
}
const entrada = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
calcular(entrada)