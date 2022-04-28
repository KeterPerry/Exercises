// Listen to paste on the document
document.addEventListener("paste", function(e) {
    // if the target is a text input
    if (e.target.type === "text") {
     let data = e.clipboardData.getData('Text');
     // split clipboard text into single characters
     data = data.split('');
     // find all other text inputs
     [].forEach.call(document.querySelectorAll("input[type=text]"), (node, index) => {
        // And set input value to the relative character
        node.value = data[index];
      });
    }
  });
