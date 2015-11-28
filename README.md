# Postwendend

Simple helper to redirect a user to a new Page via `POST`-Request.

## How does it work?

Basically it just generates a `<form>` on the fly, adds the data via `<input type="hidden"/>` and submits the form.

## Options

The follwing options are allowed

 - destination (string, required): The destination to where the user gets redirected to
 - data (object, optional): The data to be sent along
 - newWindow (boolean, optional): Whether to open the redirect in a new Tab/Window. (use this with care as most Browsers will block this as a Popup)
 - doc (document, optional): The document object to use, will fallback to the global `document` if not supplied with anything else

## Usage

The most simple of uses would look like this:
```javascript
import postwendend from 'postwendend';

postwendend('http://example.com');
```

And an example with some data on the way:
```javascript
import postwendend from 'postwendend';

postwendend('http://example.com', {
    foo: 'bar' 
});
```
