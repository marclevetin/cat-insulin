$(document).ready(function() {
  console.log('dosages.js loaded')
  $(".delete-dosage").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax(`/api/dosages/${id}`, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted id: ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
