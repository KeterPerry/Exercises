const body = document.querySelector("body");
body.style.height = "100vh";
body.style.backgroundColor = "rgba(255,255,255,0.)";

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.innerText = "checkbox";
body.appendChild(checkbox);

const div = document.createElement("div");
body.appendChild(div);

checkbox.addEventListener("click", function (e) {
  const img = document.createElement("img");
  div.appendChild(img);

  if (e.target.checked === true) img.src = "./OFFbulb.jpg";
  else div.innerHTML = "";
});

/// e= checkbox- input
// e.target - type
//checked -
