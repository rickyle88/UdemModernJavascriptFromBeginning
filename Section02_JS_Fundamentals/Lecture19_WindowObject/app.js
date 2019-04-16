// WINDOW METHOD - OBJECT - PROPERTIES

//Alert
// window.alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//     console.log('YES');
// }else{
//     console.log('NO');
// }

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Outter height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll point
val = window.scrollY;
val = window.scrollX;

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;   //To get get query string from url ?id=1&name=ABC&member=standar

// Redirect
// window.location.href = 'https://google.com';

// Reload
// window.location.reload();

// History Object
// window.history.go(-1);

val = window.history.length;

////////////////////////////////////////////////////////////////////////
// Navigator Object
val = window.navigator;

val = window.navigator.appVersion;

val = window.navigator.geolocation;

// Type of browser
val = window.navigator.userAgent;

// OS
val = window.navigator.platform;

val = window.navigator.vendor;

val = window.navigator.vendor;
////////////////////////////////////////////////////////////////////////

console.log(val);