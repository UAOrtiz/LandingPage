
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('title') // Extract info from data-* attributes
    var image = button.data('img')
    var description = button.data('description')
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.image')[0].src = image
    modal.find('.description')[0].innerText = description
    modal.find('.modal-body input').val(recipient)
  })


  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("mainNav").classList.add('navbar-shinky');
  } else {
    document.getElementById("mainNav").classList.remove('navbar-shinky');
  }
}


