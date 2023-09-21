document.addEventListener("DOMContentLoaded", function () {
  const fetchDataButton = document.getElementById("fetchData");
  const dataContainer = document.getElementById("dataContainer");

  fetchDataButton.addEventListener("click", function () {
    dataContainer.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");
          postElement.innerHTML = `
                        <h2>${item.title}</h2>
                        <p>${item.body}</p>
                    `;
          dataContainer.appendChild(postElement);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        dataContainer.innerHTML =
          "<p>An error occurred while fetching data.</p>";
      });
  });
});
