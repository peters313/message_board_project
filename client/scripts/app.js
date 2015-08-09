$(document).ready(function(){
    $('#inputForm').submit(function(event){
        event.preventDefault();
        var formData = $('#inputForm').serialize();
        $.ajax({
            type: "POST",
            url: "/things",
            data: formData,
            success: function(data){
                console.log(data);
                getData();
            }
        });
    });
    function getData(){
        $.ajax({
            type:"GET",
            url: "/things",
            success: function(data){
                console.log(data);
                appendData(data);
            }
        });
    }
    function appendData(data){
        $("#container").empty();
        for(var i = 0; i < data.length; i++){
            $("#container").append("<div></div>");
            var $el = $("#container").children().last();
            $el.append("<p>" + data[i].name + "</p>");
            $el.append("<p>" + data[i].message + "</p>");
            $el.append("<p>" + data[i].date + "</p>");
            //$el.append("<button data-data='" + data[i]._id + "'>DELETE</button>");

        }
    }
});