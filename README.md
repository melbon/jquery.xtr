# jquery.xtr
This plugin translate your page client side without page refresh. 
## Install
```javascript
<script src="jquery.min.js"></script>
<script src="../jquery.xtr.min.js"></script>
```
or 
```javascript
bower install xtr
```
## Usage
1. add **xtr** attribute or **data-xtr-key="\<translation\>"** to your elements
```html
<div xtr>Welcome</div>
```
or
``` html
<div data-xtr-key="<translation key>">Good Bye</div>
```
2. create translation object
```javascript
var <translations> = {
    "Welcome": {
        de: "Willkommen",
        fr: "Bienvenue",
        es: "Bienvenido"
    },
    "bye": {
        de: "Auf Wiedersehen",
        fr: "Au revoir",
        es: "Adi?s"
    }
};
```
3. init plugin
```javascript
$('body').xtr({t: <translations>});
```
## Configuration
#### default
default init language
```javascript
default: "en"
options: string
```
#### lang
translate to after init
```javascript
default: "en"
options: string
```
#### regExp
escaped special characters
```javascript
default:  {
            '': /\s/g,
            '_': /[&<>"'`\/=]/g
          }
options: object
```
## Methods
#### lang()
change new language
```javascript
$('body').data('plugin_xtr').lang(<languge>);
```
### lang('reset')
set default language
```javascript
$('body').data('plugin_xtr').lang('reset');
```
## Demo
<a href="https://codepen.io/mel/full/vJNEML" target="_blank">codepen.io/mel/full/vJNEML</a>
## License
@author Mario Vidov <br />
@url <a href="http://vidov.it" target="_blank">www.vidov.it</a> <br />
@twitter  <a href="http://twitter.com/MarioVidov" target="_blank">MarioVidov</a> <br />
MIT license
