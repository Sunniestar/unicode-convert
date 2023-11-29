const uni=function uni(codePt) {
    if (codePt > 0xFFFF) {
        codePt -= 0x10000;
        return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
    }
    else {
        return String.fromCharCode(codePt);
    }
}
const input0=document.getElementById('input0'),output0=document.getElementById('output'),input0value=function value(){
  return document.getElementById('input0').value
}
document.getElementById("input0").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        output.value=uni(input0value())
    }
});
