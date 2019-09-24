checkPhoneNumberOfViettel();

function checkPhoneNumberOfViettel() {
    let regex = /^0[3][6-9][0-9]{7}$|086[0-9]{7}$|09[678][0-9]{7}$/;
    let inputPhoneNumber = prompt("input phone number");
    if (regex.test(inputPhoneNumber)) {
        alert("is Viettel Phone Number");
    } else {
        alert("is not Viettel Phone Number")
    }
}
