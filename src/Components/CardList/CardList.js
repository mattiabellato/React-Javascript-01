import Card from "../Card/Card";

export default function CardList({ posts, setPosts }) {
  return posts
    .sort((a, b) => b.id - a.id)
    .map((post, i) => (
      <Card
        key={post.id}
        post={post}
        isEven={i % 2 === 0}
        users={posts}
        setPosts={setPosts}
      />
    ));
}
