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

    const detailMenu = document.querySelector('.detail_menu')
    if (detailMenu) {
        const wrapCol = document.querySelector('.detail_menu_wrap_columns');
        let clientX = 0;
        let start = 1;
        detailMenu.addEventListener('mousedown', (e) => {
            clientX = e.clientX;
        });
        detailMenu.addEventListener('mouseup', (e) => {
            clientX = e.clientX - clientX;
            if (clientX > 0 && clientX !== 0 && start !== 1) {
                start = start - 1;
            } else if (clientX < 0 && clientX !== 0 && start !== 5) {
                start = start + 1;
            }
            wrapCol.style.left = `-${204 * (start - 1)}px`;
        });
        detailMenu.addEventListener('touchstart', (e) => {
            clientX = e.touches[0].clientX;
        });
        detailMenu.addEventListener('touchend', (e) => {
            clientX = e.changedTouches[0].clientX - clientX;
            if (clientX > 0 && clientX !== 0 && start !== 1) {
                start = start - 1;
            } else if (clientX < 0 && clientX !== 0 && start !== 5) {
                start = start + 1;
            }
            wrapCol.style.left = `-${204 * (start - 1)}px`;
        });
    }
});
