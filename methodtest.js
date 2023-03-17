const idInput = document.getElementById("id");
const nameInput = document.getElementById("article_name");
const bodyInput = document.getElementById("article_body");
const dateOutput = document.getElementById("article_date");
const postBtn = document.getElementById("postBtn");
const getBtn = document.getElementById("getBtn");
const putBtn = document.getElementById("putBtn");
const deleteBtn = document.getElementById("deleteBtn");
const responseOutput = document.getElementById("response");

postBtn.addEventListener("click", postArticle);
getBtn.addEventListener("click", getArticle);
/* putBtn.addEventListener("click", putArticle);
deleteBtn.addEventListener("click", deleteArticle); */

// helper functions
function getFormData() {
  return {
    id: idInput.value,
    name: nameInput.value,
    body: bodyInput.value,
    date: new Date(),
  };
}

// output
function setOutput(response) {
  console.log(response);
  responseOutput.innerHTML = `<pre>${JSON.stringify(
    response.json(),
    null,
    2,
  )}</pre>`;
}

// POST
function postArticle() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(getFormData()),
  };
  fetch("https://httpbin.org/post", options)
    .then((response) => setOutput(response))
    .catch((error) => console.log(error));
}

// GET
function getArticle() {
  const options = {
    method: "GET",
  };

  fetch("https://httpbin.org/get", options)
    .then((response) => setOutput(response))
    .catch((error) => console.log(error));
}

// PUT
function putArticle() {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(getFormData()),
  };
  fetch("https://httpbin.org/put", options)
    .then((response) => setOutput(response))
    .catch((error) => console.log(error));
}

// DELETE
function deleteArticle() {
  const options = {
    method: "DELETE",
  };
  fetch("https://httpbin.org/delete", options)
    .then((response) => setOutput(response))
    .catch((error) => console.log(error));
}
