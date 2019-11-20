var modal = document.getElementById('myModal');
document.addEventListener('click', function(event) {
    var id = event.target.dataset.toggleId;
    if (!id) return;
    modal.hidden = !modal.hidden;
  });
  var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
    modal.hidden = !modal.hidden;
}