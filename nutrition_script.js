var modal = document.getElementById('mealDetailsScreen');

var btn = document.getElementById('mealDetailsTrigger');

var closeBtn = document.getElementById('closeModal');

btn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
