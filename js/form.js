(function() {
  var form = document.getElementsByClassName('petition-form')[0];
  form.addEventListener('submit', function submitForm(e) {
    e.preventDefault();
    var formData = new FormData(form);
    var req = new XMLHttpRequest();

    req.open(form.getAttribute('method'), form.getAttribute('action'));
    req.send(formData);
  });
})();