$(document).ready(function () {
  createGrid();

  getNumbers();
});

function createGrid() {
  for (i = 0; i < 36; i++) {
    $(".container").append('<div class="block"></div>');
  }
}

function getNumbers() {
  $(".block").click(function () {
    var blockClicked = $(this);
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (number) {
        var results = number.response;

        if (results < 5) {
          blockClicked.html(number.response).addClass("numbers-yellow");
        } else {
          blockClicked.html(number.response).addClass("numbers-green");
        }
      },
      error: function (error) {
        alert("There was an error. " + errore);
      },
    });
  });
}
