$(document).ready(function () {
    var checkU = false;
    var User = new Array();
    var Pass = new Array();
    $('#button1').click(function () {
        event.preventDefault();
        var url = "login.html";
        location.replace(url);
    });
    $('#button').click(function () {
        var tendangky = $('#username').val();
            if (tendangky == "") {
                checkU = false;
            alert("Tài khoản không được để trống");
                event.preventDefault();
        }
            else{
                checkU=true;
            }
        // if (checkU==true) {
        //     var matkhau = $('#pass').val();
        //     var matkhau1 = $('#pass1').val();
        //     if (matkhau == matkhau1) {
        //         alert("Đăng ký thành công");
        //         event.preventDefault();
        //         var url = "login.html";
        //         location.replace(url);
        //         User.push(tendangky);
        //         export{};
        //         Pass.push(matkhau);
        //     } else {
        //         alert("Mật khẩu nhập lại không chính xác");
        //     }
        // }
    });
});