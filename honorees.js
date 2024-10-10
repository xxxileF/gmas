document.addEventListener('DOMContentLoaded', function() {
    const expandBtn = document.querySelector('.expand-btn');
    const descriptionContent = document.querySelector('.description-content');

    expandBtn.addEventListener('click', function() {
        descriptionContent.classList.toggle('expanded');
        const isExpanded = descriptionContent.classList.contains('expanded');
        expandBtn.innerHTML = isExpanded ? '<i class="fas fa-caret-up"></i>' : '<i class="fas fa-caret-down"></i>';
        expandBtn.setAttribute('aria-label', isExpanded ? 'Collapse description' : 'Expand description');
    });
});