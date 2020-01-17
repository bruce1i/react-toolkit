function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'Hello World!'

    console.log('I get called from print.js!');

    return element;
}

document.body.appendChild(component());
