const desktop_folder_div = document.querySelectorAll(".desktop-folder-div");

desktop_folder_div.forEach((folder) => {
  folder.addEventListener("click", () => {
    let span_elem = folder.querySelector("span");
    console.log(span_elem.innerText);
  });
});
