$(document).ready(function () {
    $('#contact-form').validate({
        rules: {
            name: {
                minlength: 1,
                required: true,

            },
            email: {
                required: true,
                email: true
            },
            subject: {
                minlength: 1,
                required: true
            },
            comments: {
                minlength: 1,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function (element) {
            element.addClass('valid').closest('.form-group').removeClass('has-error').addClass('has-success');
        }
    });
});
