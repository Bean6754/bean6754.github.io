let data_a = JSON.parse(a);
let data_b = JSON.parse(b);
let data_d = JSON.parse(d);
let data_f = JSON.parse(f);
let data_h = JSON.parse(h);
let data_i = JSON.parse(i);
let data_n = JSON.parse(n);
let data_o = JSON.parse(o);
let data_r = JSON.parse(r);
let data_s = JSON.parse(s);
let data_t = JSON.parse(t);
let data_aa = JSON.parse(aa);

function search_words() {
  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  // A
  let x_a = document.querySelector('#list-holder-a');
  x_a.innerHTML = "";
  // B
  let x_b = document.querySelector('#list-holder-b');
  x_b.innerHTML = "";
  // D
  let x_d = document.querySelector('#list-holder-d');
  x_d.innerHTML = "";
  // F
  let x_f = document.querySelector('#list-holder-f');
  x_f.innerHTML = "";
  // H
  let x_h = document.querySelector('#list-holder-h');
  x_h.innerHTML = "";
  // I
  let x_i = document.querySelector('#list-holder-i');
  x_i.innerHTML = "";
  // N
  let x_n = document.querySelector('#list-holder-n');
  x_n.innerHTML = "";
  // O
  let x_o = document.querySelector('#list-holder-o');
  x_o.innerHTML = "";
  // R
  let x_r = document.querySelector('#list-holder-r');
  x_r.innerHTML = "";
  // S
  let x_s = document.querySelector('#list-holder-s');
  x_s.innerHTML = "";
  // T
  let x_t = document.querySelector('#list-holder-t');
  x_t.innerHTML = "";
  // Å
  let x_aa = document.querySelector('#list-holder-aa');
  x_aa.innerHTML = "";

  // A
  for (iVar = 0; iVar < data_a.length; iVar++) {
    let obj_a = data_a[iVar];

    if (obj_a.Name.toLowerCase().includes(input)) {
      const elem_a = document.createElement("li");
      elem_a.innerHTML = `${obj_a.Name} (<span style="color:#0e0;">${obj_a.Gender}</span>) - ${obj_a.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_a.Examples}</span>)</span>`;
      x_a.appendChild(elem_a);
    }
  }
  // B
  for (iVar = 0; iVar < data_b.length; iVar++) {
    let obj_b = data_b[iVar];

    if (obj_b.Name.toLowerCase().includes(input)) {
      const elem_b = document.createElement("li");
      elem_b.innerHTML = `${obj_b.Name} (<span style="color:#0e0;">${obj_b.Gender}</span>) - ${obj_b.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_b.Examples}</span>)</span>`;
      x_b.appendChild(elem_b);
    }
  }
  // D
  for (iVar = 0; iVar < data_d.length; iVar++) {
    let obj_d = data_d[iVar];

    if (obj_d.Name.toLowerCase().includes(input)) {
      const elem_d = document.createElement("li");
      elem_d.innerHTML = `${obj_d.Name} (<span style="color:#0e0;">${obj_d.Gender}</span>) - ${obj_d.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_d.Examples}</span>)</span>`;
      x_d.appendChild(elem_d);
    }
  }
  
  // F
  for (iVar = 0; iVar < data_f.length; iVar++) {
    let obj_f = data_f[iVar];

    if (obj_f.Name.toLowerCase().includes(input)) {
      const elem_f = document.createElement("li");
      elem_f.innerHTML = `${obj_f.Name} (<span style="color:#0e0;">${obj_f.Gender}</span>) - ${obj_f.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_f.Examples}</span>)</span>`;
      x_f.appendChild(elem_f);
    }
  }
  
  // H
  for (iVar = 0; iVar < data_h.length; iVar++) {
    let obj_h = data_h[iVar];

    if (obj_h.Name.toLowerCase().includes(input)) {
      const elem_h = document.createElement("li");
      elem_h.innerHTML = `${obj_h.Name} (<span style="color:#0e0;">${obj_h.Gender}</span>) - ${obj_h.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_h.Examples}</span>)</span>`;
      x_h.appendChild(elem_h);
    }
  }
  
  // I
  for (iVar = 0; iVar < data_i.length; iVar++) {
    let obj_i = data_i[iVar];

    if (obj_i.Name.toLowerCase().includes(input)) {
      const elem_i = document.createElement("li");
      elem_i.innerHTML = `${obj_i.Name} (<span style="color:#0e0;">${obj_i.Gender}</span>) - ${obj_i.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_i.Examples}</span>)</span>`;
      x_i.appendChild(elem_i);
    }
  }
  
  // N
  for (iVar = 0; iVar < data_n.length; iVar++) {
    let obj_n = data_n[iVar];

    if (obj_n.Name.toLowerCase().includes(input)) {
      const elem_n = document.createElement("li");
      elem_n.innerHTML = `${obj_n.Name} (<span style="color:#0e0;">${obj_n.Gender}</span>) - ${obj_n.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_n.Examples}</span>)</span>`;
      x_n.appendChild(elem_n);
    }
  }
  
  // O
  for (iVar = 0; iVar < data_o.length; iVar++) {
    let obj_o = data_o[iVar];

    if (obj_o.Name.toLowerCase().includes(input)) {
      const elem_o = document.createElement("li");
      elem_o.innerHTML = `${obj_o.Name} (<span style="color:#0e0;">${obj_o.Gender}</span>) - ${obj_o.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_o.Examples}</span>)</span>`;
      x_o.appendChild(elem_o);
    }
  }
  
  // R
  for (iVar = 0; iVar < data_r.length; iVar++) {
    let obj_r = data_r[iVar];

    if (obj_r.Name.toLowerCase().includes(input)) {
      const elem_r = document.createElement("li");
      elem_r.innerHTML = `${obj_r.Name} (<span style="color:#0e0;">${obj_r.Gender}</span>) - ${obj_r.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_r.Examples}</span>)</span>`;
      x_r.appendChild(elem_r);
    }
  }
  
  // S
  for (iVar = 0; iVar < data_s.length; iVar++) {
    let obj_s = data_s[iVar];

    if (obj_s.Name.toLowerCase().includes(input)) {
      const elem_s = document.createElement("li");
      elem_s.innerHTML = `${obj_s.Name} (<span style="color:#0e0;">${obj_s.Gender}</span>) - ${obj_s.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_s.Examples}</span>)</span>`;
      x_s.appendChild(elem_s);
    }
  }
  
  // T
  for (iVar = 0; iVar < data_t.length; iVar++) {
    let obj_t = data_t[iVar];

    if (obj_t.Name.toLowerCase().includes(input)) {
      const elem_t = document.createElement("li");
      elem_t.innerHTML = `${obj_t.Name} (<span style="color:#0e0;">${obj_t.Gender}</span>) - ${obj_t.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_t.Examples}</span>)</span>`;
      x_t.appendChild(elem_t);
    }
  }
  
  // Å
  for (iVar = 0; iVar < data_aa.length; iVar++) {
    let obj_aa = data_aa[iVar];

    if (obj_aa.Name.toLowerCase().includes(input)) {
      const elem_aa = document.createElement("li");
      elem_aa.innerHTML = `${obj_aa.Name} (<span style="color:#0e0;">${obj_aa.Gender}</span>) - ${obj_aa.Definition} <span style="font-size:14px;">(<span style="color:#ccc;">${obj_aa.Examples}</span>)</span>`;
      x_aa.appendChild(elem_aa);
    }
  }
}
