document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const projectName = document.getElementById("Projectname").value.trim();
    const description = document.getElementById("Description").value.trim();
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const imageInput = document.getElementById("formFile");

    const technologies = [];
    if (document.getElementById("tech1").checked) technologies.push("Node.js");
    if (document.getElementById("tech2").checked) technologies.push("React.js");
    if (document.getElementById("tech3").checked) technologies.push("Next.js");
    if (document.getElementById("tech4").checked)
      technologies.push("TypeScript");

    console.log({
      projectName,
      startDate,
      endDate,
      description,
      technologies,
      image: imageInput.files[0],
    });
  });
});
const gotoContact = document.getElementById("gotoContact");
if (gotoContact) {
  gotoContact.addEventListener("click", function () {
    window.location.href = "./contact.html";
    console.log("Button clicked!");
  });
}

const gotoProject = document.getElementById("gotoProject");
if (gotoProject) {
  gotoProject.addEventListener("click", function () {
    window.location.href = "./MyProject.html";
    console.log("Button clicked!");
  });
}

const gotoHome = document.getElementById("gotoHome");
if (gotoHome) {
  gotoHome.addEventListener("click", function () {
    window.location.href = "./index.html";
    console.log("Button clicked!");
  });
}
