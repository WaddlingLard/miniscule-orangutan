window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    console.log(hello);

    let button = document.getElementById("pushed")
    if (button == null) {

    } else {
        button.addEventListener("click", clickHelper)
    }
}

function clickHelper() {
    let message = 'nothing selected!'

    const radioBtns = document.getElementsByName('choice');
    for (let button of radioBtns) {
        if (button.checked)
            message = button.value
    }

    alert(message)
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}
