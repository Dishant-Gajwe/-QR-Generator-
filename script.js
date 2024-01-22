document.addEventListener('DOMContentLoaded', function () {
    const imgBox = document.getElementById("imgBox");
    const qrImage = document.getElementById("qrImage");
    const qrText = document.getElementById("qrText");

    function generateQR() {
        if (qrText.value.trim().length > 0) {
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value.trim());
            imgBox.classList.add("show-img");
        } else {
            qrText.classList.add('error');
            setTimeout(() => {
                qrText.classList.remove('error');
            }, 1000);
        }
    }

    // Trigger generateQR on button click
    document.querySelector('button').addEventListener('click', generateQR);

    // Trigger generateQR on Enter key press in the input field
    qrText.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            generateQR();
        }
    });
});