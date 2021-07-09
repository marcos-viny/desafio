(function() {
    var $html = document.querySelector('nav');
    var $btn = document.querySelector('.a1');
    $btn.addEventListener('click', function() {
        $html.classList.toggle('nav');
    })
})()