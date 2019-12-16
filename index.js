function onTabClick(event) {
 
  if (event.target.parentElement.classList.contains("tab")) {
    let activeTabs = document.querySelectorAll(".active");
    activeTabs.forEach(tab => {
      tab.classList.remove("active");
    });

    event.target.parentElement.classList.add("active");
    document
      .getElementById(event.target.href.split("#")[1])
      .classList.add("active");
  }
}

const element = document.getElementById("tabs");
element.addEventListener("click", onTabClick);
