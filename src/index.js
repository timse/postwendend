export default (destination, data, newWindow, doc)=> {
    if (!doc) {
        if (typeof document === 'undefined') {
            return; //nothing to do here
        }
        doc = document;
    }

    const form = doc.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', destination);
    if (newWindow) {
        form.setAttribute('target', '_blank');
    }
    doc.body.appendChild(form);

    if (data) {
        Object.keys(data).forEach((key)=> {
            const d = data[key];
            const input = doc.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', key);
            input.setAttribute('value', d);
            form.appendChild(input);
        });
    }

    form.submit();
}
