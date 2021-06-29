

const playButtons = document.getElementsByClassName("play");

for (let btn of playButtons) {
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        console.log(e.target.getAttribute("href"));
    });
}
