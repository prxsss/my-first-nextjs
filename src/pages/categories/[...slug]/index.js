import { useRouter } from 'next/router';

export default function Categories() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Categories Page</h1>
      <p>Slug string: {slug}</p>
      <p>Slug: {JSON.stringify(slug)}</p>
    </div>
  );
}
