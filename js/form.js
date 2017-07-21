(function() {
  var modal = document.getElementsByClassName("success-modal")[0];
  var button = document.getElementsByClassName("form-button")[0];
  var span = document.getElementsByClassName("modal-close")[0]

  span.onclick = function() {
    modal.classList.add("hidden");
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.add("hidden");
    }
  }

  var form = document.getElementsByClassName("petition-form")[0];
  form.addEventListener("submit", function submitForm(e) {
    e.preventDefault();
    var formData = new FormData(form);
    var req = new XMLHttpRequest();

    req.addEventListener("load", function(event) {
      modal.classList.remove("hidden");
    });

    req.open(form.getAttribute("method"), form.getAttribute("action"));
    req.send(formData);
  });
})();