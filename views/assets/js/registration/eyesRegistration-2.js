// REGISTRATION TOGGLE EYE

// KONFIRM PASSWORD
$(function () {
    $("#toggle_pwd2").click(function () {
        $(this).toggleClass("fa-eye-slash fa-eye ");
        var type = $(this).hasClass("fa-eye") ? "password" : "text";
        $("#txtConfirmPassword").attr("type", type);
    });
})
