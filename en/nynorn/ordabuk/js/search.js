let data = JSON.parse(a+n);

function search_words() {
  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  let x = document.querySelector('#list-holder-a');
  x.innerHTML = "";

  for (i = 0; i < data.length; i++) {
    let obj = data[i];

    if (obj.Name.toLowerCase().includes(input)) {
      const elem = document.createElement("li");
      elem.innerHTML = `${obj.Name} (<span style="color:#0e0;">${obj.Gender}</span>) - ${obj.Definition} <span style="font-size:14px;">(<span style="color:#777;">${obj.Examples}</span>)</span>`;
      x.appendChild(elem);
    }
  }
}
