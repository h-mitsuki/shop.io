document.addEventListener("DOMContentLoaded", function () {
/* ここから記述します。 */
const header=document.querySelector("#header");
const togglebtn=document.querySelector(".toggle-btn");

togglebtn.addEventListener("click",function() {
    header.classList.toggle("open");
});

});
