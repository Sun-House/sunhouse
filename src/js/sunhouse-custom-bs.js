// Inicia Popper Tooltips
//$(document).ready(function () {
    //const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    //const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//});

// Inicia Popper - Tooltips e Popovers
//document.addEventListener('DOMContentLoaded', function () {
$(document).ready(function () {
    const triggerList = document.querySelectorAll('[data-bs-toggle="tooltip"], [data-bs-toggle="popover"]');

    if (triggerList.length > 0) {
        const tooltipAndPopoverList = [...triggerList].map(triggerEl => {
            if (triggerEl.getAttribute('data-bs-toggle') === 'tooltip') {
                return new bootstrap.Tooltip(triggerEl);
            } else if (triggerEl.getAttribute('data-bs-toggle') === 'popover') {
                return new bootstrap.Popover(triggerEl);
            }
        });
    }
});