function createArrRandom() {
    let arrRandom = [];
    for (let i = 0; i < 100; i++) {
        let randomNumber = Math.ceil(Math.random() * 100);
        arrRandom.push(randomNumber);
    }
    return arrRandom;
}

function xsmb() {
    let inputNumber = prompt("Nhập vào số bạn đoán!");
    let inputMoney = prompt("Nhập vào tiền cược!")
    for (let i = 0; i < createArrRandom().length; i++) {
        if (createArrRandom()[i] === inputNumber) {
            alert("Bạn đã đoán đúng! và nhận được " + (inputMoney * 80));
            break;
        } else {
            alert("Mất tiền rồi");
            break;
        }
    }
}

xsmb();
