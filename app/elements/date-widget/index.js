(function() {
    // prepare variable
    var now = Date.now();

    class DateWidget extends HTMLElement {

        // Fires when an instance of the element is created.
        createdCallback() {
            var self = this;
            if (!this.dataset.store) {
                console.error("need a vm");
            }
            
            if (!window[this.dataset.store]) {
                console.error("need a vm");
            }
            self.store = window[this.dataset.store];
            console.dir(this.store);

            this.innerHTML = `
                <div class="container" zl-datawidget>
                    ${self.store.now / 10000}
                </div>
            `;
        };
        // Fires when an instance was inserted into the document.
        attachedCallback() {

        };
        // Fires when an attribute was added, removed, or updated.
        attributeChangedCallback(attrName, oldVal, newVal) {

        };
    }
    document.registerElement('date-widget', DateWidget);
})();