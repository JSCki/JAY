window.onload = function() {
    const progress = document.querySelector('.progress');
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            window.location.href = "home.html"; // Redirect to home.html after 3 seconds
        } else {
            width++;
            progress.style.width = width + '%';
        }
    }, 25); // 3 seconds for 100%, 3000ms / 100 = 30ms per 1%
}