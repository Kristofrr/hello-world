if (localStorage.getItem("setup") === null) {
  let title = prompt("What is the title of the bookmark?", "Gmail");
  document.getElementById("title").innerHTML = title;
  let favIcon = prompt("What is the link to the desired favicon?", "https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico")
  document.getElementById("favIcon").attributes.href = favIcon;
  localStorage.setItem("setup", "false");
} else {
  document.getElementById("video").attributes.autoplay = "true";
  document.getElementById("video").attributes.muted = "true";
}

document
  .getElementById("video")
  .setAttribute(
    "style",
    "position: absolute; top: 0px; left: 0px; width: " +
      (window.innerWidth - 2) +
      "px; height: " +
      (window.innerHeight - 2) +
      "px; border: 1px solid #000000"
  );
