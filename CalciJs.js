let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value +=num;
}
function Calculate(){
    //outputScreen.value = eval(outputScreen.value);
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Invalid Expression")
        
    }
}
    function Clear(){
        outputScreen.value = "";
    }
    function del(){
        outputScreen.value = outputScreen.value.slice(0,-1);
    }