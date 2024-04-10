$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "root" && pwd == "root") {
        $('#h').text("欢迎回来！");
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "login.html";
        }, 4000);
    } else {
        alert("用户名或密码不正确！");
    }
});
