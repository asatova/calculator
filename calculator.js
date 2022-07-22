function update(val){
    document.querySelector('input').value = val;
}
function append(val){
    document.querySelector('input').value += val;
}
function calc(){
    const v = document.querySelector("input").value;
    const f = new Function('return ' + v);
    update(f().toString());
}