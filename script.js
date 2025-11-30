function downloadGame() {
    window.location.href = "https://drive.google.com/file/d/1dGkqlfRFcKa80TqAa6qLqlC-6AZcHClU/view?usp=sharing";
}
document.getElementById("profilePic").onclick = function(){
  let menu = document.getElementById("profileMenu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
};
