let obj = {
    person: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
}

function countNumberOfKeys(obj) {
    // your code here
    const keys = Object.keys(obj)
    return keys.length;

}
console.log(countNumberOfKeys(obj))
