$(function () {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#burger").val().trim()
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            location.reload();
        })
    })

    $(".change-status").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr("data-id");
        // console.log(id);

        $.ajax("/api/burgers/" + id,{
            type: "PUT",
            data: id
        }).then(function(){
            location.reload();
        })
    })

    // $(".delete-burger").on("click", function(event){
    //     event.preventDefault();
    //     var id = $(this).attr("data-id");
    //     $.ajax("/api/burgers/" + id, {
    //         type: "DELETE",
    //         data: id
    //     }).then(function(){
    //         location.reload();
    //     })
    // })
})