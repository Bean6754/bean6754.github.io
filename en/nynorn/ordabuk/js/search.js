let data_a = JSON.parse(a);
let data_f = JSON.parse(f);
let data_h = JSON.parse(h);
let data_n = JSON.parse(n);
let data_o = JSON.parse(o);

function search_words() {
  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  // A
  let x_a = document.querySelector('#list-holder-a');
  x_a.innerHTML = "";
  // F
  let x_f = document.querySelector('#list-holder-f');
  x_f.innerHTML = "";
  // H
  let x_h = document.querySelector('#list-holder-h');
  x_h.innerHTML = "";
  // N
  let x_n = document.querySelector('#list-holder-n');
  x_n.innerHTML ="";
  // O
  let x_o = document.querySelector('#list-holder-o');
  x_o.innerHTML ="";

  // A
  for (i = 0; i < data_a.length; i++) {
    let obj_a = data_a[i];

    if (obj_a.Name.toLowerCase().includes(input)) {
      const elem_a = document.createElement("li");
      elem_a.innerHTML = `${obj_a.Name} (<span style="color:#0e0;">${obj_a.Gender}</span>) - ${obj_a.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_a.Examples}</span>)</span>`;
      x_a.appendChild(elem_a);
    }
  }
  
  // F
  for (i = 0; i < data_f.length; i++) {
    let obj_f = data_f[i];

    if (obj_f.Name.toLowerCase().includes(input)) {
      const elem_f = document.createElement("li");
      elem_f.innerHTML = `${obj_f.Name} (<span style="color:#0e0;">${obj_f.Gender}</span>) - ${obj_f.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_f.Examples}</span>)</span>`;
      x_f.appendChild(elem_f);
    }
  }
  
  // H
  for (i = 0; i < data_h.length; i++) {
    let obj_h = data_h[i];

    if (obj_h.Name.toLowerCase().includes(input)) {
      const elem_h = document.createElement("li");
      elem_h.innerHTML = `${obj_h.Name} (<span style="color:#0e0;">${obj_h.Gender}</span>) - ${obj_h.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_h.Examples}</span>)</span>`;
      x_h.appendChild(elem_h);
    }
  }
  
  // N
  for (i = 0; i < data_n.length; i++) {
    let obj_n = data_n[i];

    if (obj_n.Name.toLowerCase().includes(input)) {
      const elem_n = document.createElement("li");
      elem_n.innerHTML = `${obj_n.Name} (<span style="color:#0e0;">${obj_n.Gender}</span>) - ${obj_n.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_n.Examples}</span>)</span>`;
      x_n.appendChild(elem_n);
    }
  }
  
  // O
  for (i = 0; i < data_o.length; i++) {
    let obj_o = data_o[i];

    if (obj_o.Name.toLowerCase().includes(input)) {
      const elem_o = document.createElement("li");
      elem_o.innerHTML = `${obj_o.Name} (<span style="color:#0e0;">${obj_o.Gender}</span>) - ${obj_o.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_o.Examples}</span>)</span>`;
      x_o.appendChild(elem_o);
    }
  }
}
