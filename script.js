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
    if (In.value.length<=1){
			In.value='0x'
		}
        out.value=uni(In.value)
    });

    In.addEventListener('change', (event) => {
        const thisTarget = event.target;
        if (In.value.length<=1){
			In.value='0x'
		}
        out.value=uni(In.value)
    });
In.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.code !== "KeyA" && event.code !== "KeyB" && event.code !== "KeyC" && event.code !== "KeyD" && event.code !== "KeyE" && event.code !== "KeyF" && event.code !== "Digit0" && event.code !== "Digit1"  && event.code !== "Digit2" && event.code !== "Digit3" && event.code !== "Digit4" && event.code !== "Digit5" && event.code !== "Digit6" && event.code !== "Digit7" && event.code !== "Digit8" && event.code !== "Digit9" && event.code !== "Backspace" && event.code !== "KeyX") {
        In.value=In.value.substring(0,In.value.length-1)
    }
});
