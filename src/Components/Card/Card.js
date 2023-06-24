export default function Card({ post, setPosts }) {
  const handleClick = () => {
    console.log(post.id);

    /* const filteredUsers = users.filter((el) => el.id !== user.id);
    setUsers(() => filteredUsers); */

    setPosts((prev) => prev.filter((el) => el.id !== post.id));
  };

  return (
    <div className={"card mb-3"}>
      <div className="card-body">
        <h5 className="card-title">Title: {post.title}</h5>
        <p>{post.body}</p>
        <p>Il mio id è {post.id}</p>
        <button onClick={handleClick} className="btn btn-danger">
          Remove me
        </button>
      </div>
    </div>
  );
}

// al click su qualcosa, mostrare un background diverso alla card

// un componente viene re-renderizzato se cambiano le sue props, o il suo stato

// virtual dom

// prop drilling redux, context, zustand
