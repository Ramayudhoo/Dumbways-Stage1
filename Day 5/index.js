document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#projectForm");
  const CardsContainer = document.getElementById("projectCards");

  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  renderProjects();

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

    let imageURL = "";
    if (imageInput.files[0]) {
      imageURL = URL.createObjectURL(imageInput.files[0]);
    }

    const projectData = {
      projectName,
      description,
      startDate,
      endDate,
      technologies,
      imageURL,
    };

    projects.push(projectData);
    saveToLocal();
    renderProjects();
    form.reset();
  });

  function saveToLocal() {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function renderProjects() {
    CardsContainer.innerHTML = "";

    projects.forEach((p, index) => {
      const card = `
        <div class="col-md-4">
          <div class="card shadow">
            <img src="${
              p.imageURL
            }" class="card-img-top" style="height:220px;object-fit:cover;">
            <div class="card-body">
              <h5 class="card-title">${p.projectName}</h5>
              <p class="text-muted">${p.startDate} → ${p.endDate}</p>
              <p><strong>Tech:</strong> ${p.technologies.join(", ")}</p>

              <button class="btn btn-info mb-2" onclick="showDetail(${index})">Detail</button>
              <button class="btn btn-danger" onclick="deleteCard(${index})">Delete</button>
            </div>
          </div>
        </div>
      `;
      CardsContainer.innerHTML += card;
    });
  }

  window.deleteCard = function (index) {
    projects.splice(index, 1);
    saveToLocal();
    renderProjects();
  };

  // SHOW DETAIL MODAL
  window.showDetail = function (index) {
    const project = projects[index];
    document.getElementById("modalTitle").innerText = project.projectName;
    document.getElementById("modalBody").innerHTML = `
      <img src="${
        project.imageURL
      }" class="img-fluid mb-3" style="object-fit:cover;">
      <p><strong>Description:</strong> ${project.description}</p>
      <p><strong>Start Date:</strong> ${project.startDate}</p>
      <p><strong>End Date:</strong> ${project.endDate}</p>
      <p><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>
    `;
    const myModal = new bootstrap.Modal(document.getElementById("detailModal"));
    myModal.show();
  };
});
