console.log("%c[scripts/app.js] Loaded", "background:orange; padding:10px");

function sayHello() {
    console.log("Hello");
}

$('button').on('click', sayHello());