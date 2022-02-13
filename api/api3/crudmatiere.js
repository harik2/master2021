const URL = "http://localhost:4900/matieres";


function all() {
  fetch(URL)
    .then((res) => res.json())
    .then((matieres) => {
      document.querySelector("tbody").innerHTML = "";

      matieres.forEach((m) => {
        document.querySelector("tbody").innerHTML += ` <tr>
    <td>${m.id}</td>
    <td>${m.nom}</td>
    <td>${m.coef}</td>
    <td><a class="btn btn-danger btn-sm" href="#" onclick="supprimer(${m.id})" >Supprimer</a>
    <a class="btn btn-warning btn-sm" href="#" onclick="edit(${m.id})" >Editer</a>
    </td>
</tr>`;
      });
    });
}

const ajouter = (matiere) => {
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(matiere),
  }).then((res) => all());
};
const modifier = (id,matiere) => {
  fetch(URL+'/'+id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(matiere),
  }).then((res) => {
      all();
      document.querySelector('button').innerHTML="Ajouter"
      document.getElementById('nom').value=""
      document.getElementById('coef').value=""
      document.getElementById('id').value=""
  });
};
const edit = (id) => {
  fetch(URL+'/'+id).then((res) =>res.json()).then(matiere=>{
      document.getElementById('nom').value=matiere.nom;
      document.getElementById('coef').value=matiere.coef;
      document.getElementById('id').value=matiere.id;
      document.querySelector('button').innerHTML="Editer";

  });
};

const supprimer = (id) => {
  fetch(URL+'/'+id, {
    method: "DELETE"
  }).then((res) => all());
};
document.querySelector("button").addEventListener("click", () => {
  let matiere = {
    nom: document.getElementById("nom").value,
    coef: document.getElementById("coef").value
  };
 if(document.querySelector('button').innerHTML!="Editer"){
     ajouter(matiere);
 }else{
     let id=document.getElementById('id').value
     modifier(id,matiere);
 }
});

all();
