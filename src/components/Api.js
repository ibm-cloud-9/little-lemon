function randomSeed(seed) {

    let randomFunction;

    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
  
    randomFunction = function() {
        return (s = s * a % m) / m;
    }

    return randomFunction;
}

export function fetchAPI(date) {

    let times = [''];
    let random = randomSeed(date.getDate())


    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            times.push(i + ':00');
        }
        if(random() < 0.5) {
            times.push(i + ':30');
        }
    }

    return times;

}

export function submitAPI(formData) {
    return true;
}
