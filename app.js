function temperatureChecking() {
    let temp = +document.querySelector("#temp").value;
    if (temp > 30) {
        document.querySelector("#result").innerHTML = `The Temperature you entered is ${temp}, and it's Hot`
    } else if (temp > 25) {
        document.querySelector("#result").innerHTML = `The Temperature you entered is ${temp}, and it's Normal`
    } else if (temp > 20) {
        document.querySelector("#result").innerHTML = `The Temperature you entered is ${temp}, and it's Pleasant`
    } else if (temp > 15) {
        document.querySelector("#result").innerHTML = `The Temperature you entered is ${temp}, and probably you would need a Jacket`
    }else if (temp > 10){
    document.querySelector("#result").innerHTML = `The Temperature you entered is ${temp}, and definitely you would need a Jacket`
    }else if (temp > 5){
    document.querySelector("#result").innerHTML = `The Temperature you entered is ${temp}, and definitely you would need a double Jacket`
    }else {
    document.querySelector("#result").innerHTML = `The Temperature you entered is ${temp}, and it's very Cold`
    }
}