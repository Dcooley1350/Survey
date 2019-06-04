$(document).ready(function() {
  $("#blank-form form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var ageInput = $("input#age").val();
    var dob = $("#born").val();
    var favoriteColor =$("input#color").val();
    var favoriteMusic =$("input#music").val();
    var favoriteFood =$("input#food").val();
    var favoriteSeason =$("#season").val();
    var favoriteFlavor = $("input:radio[name=flavor]:checked").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".age").text(ageInput);
    $(".dob").text(dob);
    $(".color").text(favoriteColor);
    $(".music").text(favoriteMusic);
    $(".food").text(favoriteFood);
    $(".season").text(favoriteSeason);
    $(".flavor").text(favoriteFlavor)

    $("#return-info").show;

    event.preventDefault();
  })
})