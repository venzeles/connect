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

    const detailMenu = document.querySelector('.detail_menu');
    const wrapCol = document.querySelector('.detail_menu_wrap_columns');
    let press = false;
    let clientX = 0;
    let start = 1;
    detailMenu.addEventListener('click', () => {
        console.log('click');
    });
    detailMenu.addEventListener('mousedown', () => {
        console.log('mousedown');
        press = true;
    });
    detailMenu.addEventListener('mouseup', () => {
        console.log('mouseup');
        press = false;
    });
    detailMenu.addEventListener('mousemove', () => {
        console.log('mousemove');
        if (press) {
            console.log(wrapCol);
        }
    });
    detailMenu.addEventListener('touchstart', (e) => {
        clientX = e.touches[0].clientX;
        press = true;
    });
    detailMenu.addEventListener('touchend', (e) => {
        clientX = e.changedTouches[0].clientX - clientX;
        press = false;
        if (clientX > 0 && clientX !== 0 && start !== 1) {
            start = start - 1;
        } else if (clientX < 0 && clientX !== 0 && start !== 5) {
            start = start + 1;
        }
        wrapCol.style.left = `-${204 * (start - 1)}px`;
    });
});
