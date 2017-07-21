(function() {
  var modal = document.getElementsByClassName('success-modal')[0];
  var button = document.getElementsByClassName('form-button')[0];
  var span = document.getElementsByClassName('modal-close')[0]

  button.onclick = function() {
    modal.classList.remove("hidden");
  }

  span.onclick = function() {
    modal.classList.add("hidden");
  }

  var form = document.getElementsByClassName('petition-form')[0];
  form.addEventListener('submit', function submitForm(e) {
    e.preventDefault();
    var formData = new FormData(form);
    var req = new XMLHttpRequest();

    req.open(form.getAttribute('method'), form.getAttribute('action'));
    req.send(formData);
  });
})();