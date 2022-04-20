let data_a = JSON.parse(a);

function search_words_a() {
  let input_a = document.getElementById('searchbar').value;
  input_a = input_a.toLowerCase();
  let x_a = document.querySelector('#list-holder-a');
  x_a.innerHTML = "";

  for (i = 0; i < data_a.length; i++) {
    let obj_a = data_a[i];

    if (obj_a.Name.toLowerCase().includes(input_a)) {
      const elem_a = document.createElement("li");
      elem_a.innerHTML = `${obj_a.Name} (<span style="color:#0e0;">${obj_a.Gender}</span>) - ${obj_a.Definition} <span style="font-size:14px;">(<span style="color:#777;">${obj_a.Examples}</span>)</span>`;
      x_a.appendChild(elem_a);
    }
  }
}
