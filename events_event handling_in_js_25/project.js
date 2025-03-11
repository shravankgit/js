let fn = document.getElementById("fullname")
fn.addEventListener('keyup', change)
function change(evnt) {
    console.log(evnt)
    if (event.key == 'a') {
        alert("a not allowed")
    }
    fn.style.backgroundColor = "red"
}