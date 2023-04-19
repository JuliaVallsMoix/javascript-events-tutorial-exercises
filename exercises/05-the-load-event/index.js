// your function goes here

/* My code, which is not working:

function loadListener () {
    document.querySelector('body').load
    loadListener = alert('loading finished...')
} */

/* Solution according to official solution, which is not working as well:

document.body.onload = () => {
    console.log('loading finished!');
}

*/

document.body.onload = () => {
    alert('loading finished!');
}
