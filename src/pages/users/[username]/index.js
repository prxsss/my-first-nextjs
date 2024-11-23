import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Head from 'next/head';

const MyComponent = dynamic(() => import('@/components/MyComponent'));
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa6';

export default function User() {
  const router = useRouter();
  const { username } = router.query;

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
    ocalStorage.setItem('like', like + 1);
  };

  const handleDislike = () => {
    setDislike(dislike + 1);
    localStorage.setItem('dislike', dislike + 1);
  };

  useEffect(() => {
    const storedLike = localStorage.getItem('like');
    const storedDislike = localStorage.getItem('dislike');

    if (storedLike) {
      setLike(parseInt(storedLike));
    }

    if (storedDislike) {
      setDislike(parseInt(storedDislike));
    }
  }, []);

  return (
    <>
      <Head>
        <title>User Page</title>
      </Head>
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col gap-4 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] p-6 rounded">
          <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full">
              <img
                src={`https://avatar.iran.liara.run/public/boy?username=${username}`}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className=" h-4 w-20 text-lg">{username}</div>
              <div className="h-4 w-40">
                <Link
                  href="/posts/123/comments/456"
                  className="text-sm link link-primary"
                >
                  Go to Comment Page
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <FaRegThumbsUp /> {like}
                </div>
                <div className="flex items-center gap-2">
                  <FaRegThumbsDown /> {dislike}
                </div>
              </div>
            </div>
          </div>
          <div className="h-32 w-full flex justify-center items-center bg-gray-50 rounded shadow-inner">
            <MyComponent title="Hello, Next.js!" />
          </div>
          <div className="flex items-center justify-end join">
            <button
              onClick={handleLike}
              className="btn btn-primary btn-sm join-item"
            >
              Like
            </button>
            <button onClick={handleDislike} className="btn btn-sm join-item">
              Dislike
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
