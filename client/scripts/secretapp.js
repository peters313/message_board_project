$(document).ready(function(){
    $("#container").on('click', 'button', function(){
        //var $el = $(this);
        $.ajax({
            type: "DELETE",
            url: "/things/" + $(this).data("data"),
            success: function(){
                console.log("He's dead, Jim");
            },
            error: function(xhr, status){
                alert("Error: ", status);
            },
            complete: function(){
                console.log("Delete Complete!");
            }
        });
        $(this).parent().remove();
    }); getData();
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

function appendData(data) {
    $("#container").empty();
    for (var i = 0; i < data.length; i++) {
        $("#container").append("<div></div>");
        var $el = $("#container").children().last();
        $el.append("<p>" + data[i].name + "</p>");
        $el.append("<p>" + data[i].message + "</p>");
        $el.append("<p>" + data[i].date + "</p>");
        $el.append("<button data-data='" + data[i]._id + "'>DELETE</button>");
    }
}