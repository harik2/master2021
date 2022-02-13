import logo from "./logo.svg";
import "./App.css";
import { Form } from "./Form";
import { Liste } from "./Liste";
import { useEffect, useState } from "react";

function App() {
  const [taches, setTaches] = useState([
    { id: 1, text: "tache 1 " },
    { id: 2, text: "tache 2 " },
    { id: 3, text: "tache 3 " },
  ]);
  const URL = "http://127.0.0.1:8000/api/taches/";
  const all = () => {
    fetch(URL, {
      headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
      // mode: 'no-cors',
    
    })
      .then((res) => res.json())
      .then((data) => setTaches(data));
  };

  const edit = (id) => {
    settacheform(taches.find((t) => t.id === id));
    setediting(true);
  };

  const del = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
    fetch(URL + id, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      }
    });
  };

  useEffect(() => {
    all();

    return () => {};
  }, []);

  const [tacheform, settacheform] = useState({ id: 0, text: "..." });
  const [editing, setediting] = useState(false);
  const add = () => {
    if (!editing) {
      setTaches([...taches, tacheform]);
      fetch(URL, {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
        body: JSON.stringify(tacheform),
      });
    } else {
      setTaches(taches.map((t) => (t.id !== tacheform.id ? t : tacheform)));

      setediting(false);
      fetch(URL  + tacheform.id, {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        method: "PUT",
        body: JSON.stringify(tacheform),
      });
    }
  };
  return (
    <div className="container">
      <Form
        tacheform={tacheform}
        settacheform={settacheform}
        add={add}
        editing={editing}
      />
      <Liste taches={taches} del={del} edit={edit} />
    </div>
  );
}

export default App;
