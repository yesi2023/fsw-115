document
  .getElementById("button")
  .addEventListener("click", function () {
    axios
      .get("http://api.bryanuniversity.edu/irmarodriguez22/list/")
      .then((result) => {
        result.data.forEach(function (e, i) {
          let para = document.createElement("ol");
          document.body.appendChild(para);

          let description = document.createElement("li");
          document.body.appendChild(description);

          para.textContent = result.data[i].name;
          description.textContent = result.data[i].description;

          para.addEventListener("click", function () {
            para.style.textDecoration = "line-through";
          });

          description.addEventListener("click", function () {
            description.style.textDecoration = "line-through";
          });
        });
      });
  })
  .catch((err) => console.log(err));
