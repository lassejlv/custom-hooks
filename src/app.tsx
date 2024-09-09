import { useFetch } from './hooks/useFetch';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function App() {
  const { data, error, loading } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) return <div>No data</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
