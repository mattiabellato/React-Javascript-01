import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import CardList from "./Components/CardList/CardList";
import NewUser from "./Components/NewUser/NewUser";

export default function App() {
  const defaultPosts = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
  ];

  // hooks
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // QUALCOSA
    /*  fetch("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.json())
      .then((r) => setPosts(r)); */

    fetch("https://api.wheretheiss.at/v1/satellites/25544")
      .then((r) => r.json())
      .then((r) => console.log(r));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          {posts && <NewUser posts={posts} setPosts={setPosts} />}
        </div>
        <div className="col-12 col-md-6">
          {posts && <CardList posts={posts} setPosts={setPosts} />}
        </div>
      </div>
    </div>
  );
}

// JSX
// DIV SOUP
// React Fragments

// In JSX possiamo scrivere delle ESPRESSIONI js, ma non delle ISTRUZIONI

// renderizzare a seconda di condizioni

// SOC

// props, properties
