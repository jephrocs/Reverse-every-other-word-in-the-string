reverse = (st) => {
    var str = st.replace(/,/g, "q9x")
    let arrStr = str.split(" ");
    var empArr = []
    for (var i = 0; i < arrStr.length; i++) {
        if (i % 2 === 0) {
            let norStr = arrStr[i];
            empArr.push(norStr)
        } else {
            let revStr = arrStr[i].split("").reverse().join("")
            empArr.push(revStr)
        }
    } const newStr = empArr.toString().replace(/,/g, " ").replace(/q9x/g, ",")
    if (newStr === '   ') {
        return ''
    }
    return newStr
}