
$('#form').on('submit', submitForm);

var submitForm = function (ev) {
    alert('submit вызван');
    ev.preventDefault();
    var form = $(ev.target);

    var request = ajaxForm(form);

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            console.log("!!!!!!");
            form.append('<p class="success">' + mes + '</p>');
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
        console.log("Request failed: " + textStatus);
    });
};

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();
    console.log(data);

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });
};


