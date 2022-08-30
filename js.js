let btn = document.getElementById('open-modal');
let modal = document.querySelector('.modal');


btn.addEventListener('click', () => modal.style.display='flex');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}