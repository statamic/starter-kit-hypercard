document.addEventListener('alpine:init', () => {
    Alpine.data('journal', () => ({
        init() {
            for (const table of this.$el.querySelectorAll('.prose table')) {
                const scrollArea = document.createElement('div');

                scrollArea.className = 'table-scroll';
                scrollArea.tabIndex = 0;
                scrollArea.setAttribute('role', 'region');
                scrollArea.setAttribute('aria-label', table.caption?.textContent || 'Table');
                table.replaceWith(scrollArea);
                scrollArea.append(table);
            }
        },

        handleKey(event) {
            if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.defaultPrevented) {
                return;
            }

            if (event.target.closest('input, textarea, select, [contenteditable], .table-scroll, pre, audio, video')) {
                return;
            }

            const selector = {
                ArrowLeft: '[data-card-previous]',
                ArrowRight: '[data-card-next]',
            }[event.key];

            if (!selector) {
                return;
            }

            const link = this.$el.querySelector(selector);

            if (link) {
                event.preventDefault();
                window.location.assign(link.href);
            }
        },
    }));
});
