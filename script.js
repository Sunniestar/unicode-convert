const uni=function uni(codePt) {
    if (codePt > 0xFFFF) {
        codePt -= 0x10000;
        return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
    }
    else {
        return String.fromCharCode(codePt);
    }
}
const In=document.getElementById('input0'),out=document.getElementById('output');/*,input0value=function value(){
  return In.value
}*/
 In.addEventListener('input', (event) => {
        const thisTarget = event.target;
        out.value=uni(In.value)
    });

    In.addEventListener('change', (event) => {
        const thisTarget = event.target;
        out.value=uni(In.value)
    });
In.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode !== 65 && event.keyCode !== 66 && event.keyCode !== 67 && event.keyCode !== 68 && event.keyCode !== 69 && event.keyCode !== 70 && event.keyCode !== 48 && event.keyCode !== 57 && event.keyCode !== 49 && event.keyCode !== 50 && event.keyCode !== 51 && event.keyCode !== 52 && event.keyCode !== 53 && event.keyCode !== 54 && event.keyCode !== 55 && event.keyCode !== 56) {
        In.value=In.value.substring(0,In.value.Length-1)
    }
});
