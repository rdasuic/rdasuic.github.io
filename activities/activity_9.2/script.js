mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('header.mdc-top-app-bar'));
const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
document.querySelector(".mdc-top-app-bar__navigation-icon").addEventListener("click", (e) => {
    drawer.open = !drawer.open;
});

const hideAllDivs = () => {
    document.querySelectorAll('.view').forEach((view) => {
        view.style.display = 'none';
    })
}
hideAllDivs();
document.querySelectorAll('.mdc-list-item').forEach((item) => {
    item.addEventListener('click', (ev) => {
        console.log(ev.target);
    });
});
