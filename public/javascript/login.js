window.addEventListener('load', () => {
    $("form.login").submit((event) => {
        event.preventDefault();
        const formData = {
            "email": $("input#email-login").val(),
            "password": $("input#password-login").val()
        };
        $.ajax({
            type: "POST",
            url: "/api/user/login",
            "data": formData,
            "encode": true,
            success: (response) => {
                if (response.success === true) {
                    window.location.assign("/documents");
                } else {
                    showLoginError();
                }
            },
            error: (err) => {
                console.log(err);
                showLoginError();
            }
        });
    });
    const showLoginError = () => {
        const messageListItem = $("li#message");
        $("div.messages").show();
        messageListItem.empty();
        messageListItem.text("Login failed, please try again");
    };
});
