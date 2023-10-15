const registerFormHandler = async (event) => {
    event.preventDefault();

    const username = $('#newUsername').val().trim();
    const password = $('#newPassword').val().trim();
    const passwordConfirm = $('#newPasswordVerify').val().trim();

    if (username && password) {
        const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password, passwordConfirm }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            const errorMessage = await response.json();
            alert(errorMessage.message);
        }
    }
};

if ($('#register')) {
    $('#register').on('click', registerFormHandler);
};