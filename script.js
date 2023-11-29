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
    if (event.Code !== "KeyA" && event.Code !== "KeyB" && event.Code !== "KeyC" && event.Code !== "KeyD" && event.Code !== "KeyE" && event.Code !== "KeyF" && event.Code !== "Digit0" && event.Code !== "Digit1"  && event.Code !== "Digit2" && event.Code !== "Digit3" && event.Code !== "Digit4" && event.Code !== "Digit5" && event.Code !== "Digit6" && event.Code !== "Digit7" && event.Code !== "Digit8" && event.Code !== "Digit9") {
        In.value=In.value.substring(0,In.value.Length-1)
    }
});
