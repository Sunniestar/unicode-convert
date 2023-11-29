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
In.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        out.value=uni(In.value)
    }
});
