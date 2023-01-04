document.getElementById("button1").addEventListener("click", validateInput1);

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateInput1 () {
    var email = document.getElementById('input1').value;

    if (email.match(mailformat)) {
        document.getElementById('warning1').style.display = "none";        
    }else {
        document.getElementById('warning1').style.display = "block";
    }

}