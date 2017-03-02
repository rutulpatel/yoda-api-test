$(function() {
    $(".text_process").click(function() {
        $.ajax({
            url: 'https://yoda.p.mashape.com/yoda?sentence=', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method
            data: { sentence: $("#yoda_input").val() }, // Additional parameters here
            datatype: 'json',
            success: function(data) {
                $("#output").html(data);
            },
            error: function(err) {
                alert(err);
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "8bW7q6Wqb9mshtrKoMUiaPpqghCYp1ZfvAmjsnEcGPbIqsOqpd"); // Enter here your Mashape key
            }
        });
    });
});