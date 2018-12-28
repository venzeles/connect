document.addEventListener('DOMContentLoaded', function () {
    const show = document.querySelector('.m_menu');
    const hide = document.querySelector('#m_menu');
    const menu = document.querySelector('.m_wrap_menu');
    show.addEventListener('click', function () {
        menu.style.display = 'block';
    });
    hide.addEventListener('click', function () {
        menu.style.display = 'none';
    });
});
