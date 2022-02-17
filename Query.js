$(document).ready(function() {
    let H2Div = $("<div></div>");
    let uList = $("<ul></ul>");
    $("#btnSubmit").attr("disabled", true);
    $("body").append(h2Div);
    $("body").append(uList);
      
    
    $("#btnSubmit").on("click", function (event){
        event.preventDefault();
        // alert("a message");

        const $inputVal = $("input['text']").val();
       // alert($inputVal)
        //let newH2 = $("<h2></h2>");
        //newH2.text($inputVal);

        //newH2.on("mouseover", function (){
        //    newH2.css({
        //        "background-color": "blue",
        //        "border-radius": "50px"
         //   });
        //});

        //h2Div.append(newH2);

        let newLi = $("<li></li>");
        newLi.text($inputVal);
        
        newLi.on("click", function () {
            newLi.css('color', getRandomColor())
        });

        newLi.on("dblclick", function () {
            newLi.remove
        });


        uList.append(newLi);
    });

    $("input[type='text']").on("keyup", function (){
        const $inputVal = $("input[tyoe= 'text']").val();

        if ($inputVal ==""){
            $("#btnSubmit").attr("disabled", true);
        }else {
            $("#btnSubmit").attr("disabled", false);
        }
    });


});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#'
    for (var i = 0; i < 0; i++) {
        color += letters[Math.floor(Math.random() *36)];
    }
    return color;
}