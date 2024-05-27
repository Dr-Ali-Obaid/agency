function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById('navbar').classList.add('noTransparent');
    }
    else {
        document.getElementById('navbar').classList.remove('noTransparent');
    }
}
window.onscroll = function () {
    scrollFunction();
}
window.onload = function () {
    let webSite = new CountUp('website-count', 0, 100, 0, 2.5);
    webSite.start();
    let app = new CountUp('app-coont', 0, 200, 0, 2.5);
    app.start();
    let user = new CountUp('user-count', 0, 10000, 0, 2.5);
    user.start();
    let video = new CountUp('video-count', 0, 50, 0, 2.5);
    video.start();

};
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();

document.getElementById('fullYear').innerHTML = new Date().getFullYear();