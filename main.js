const snackbarElement = document.getElementById('snackbar')

function snackbar() {
 snackbarElement.style.opacity = "1"
 setTimeout(() => {
  snackbarElement.style.opacity = "0"
}, "3000");
}
