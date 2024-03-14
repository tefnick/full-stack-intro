import prisma from '@/lib/prisma'
import Post from './components/Post';
import Link from 'next/link';
import Loading from './loading';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true, email: true}
      }
    }
  })
  console.log({posts});
  return posts;
}

export default async function Home() {

  const posts = await getPosts();
  return (
    <Suspense fallback={<Loading/>}>
      <main className='relative flex min-h-screen bg-teal-400 font-sans'>
        <section className='flex-col justify-center overflow-hidden py-6 px-6 mx-auto text-center'> 
          <h1 className='font-semibold mt-4 text-center animate-ping mb-4'>Feed</h1>
          <p className='font-light'>Let's see what's going on with the world</p>
          <section className='bg-slate-200 p-7 mt-4 shadow-lg rounded-lg text-center'>
            <div>
              {posts.length === 0 && <p>Zzzzz.... No posts. How about making one?</p>}
              {
                posts.map((post) => {
                  return (
                    <Post 
                      key={post.id}
                      id={post.id}
                      authorName={post.author.name} 
                      email={post.author.email}
                      title={post.title} 
                      content={post.content}
                    />
                  )
                })
              }
            </div>
            
          </section>
          <div className='flex flex-row justify-center'>
            <Link href={'/add-post'} className='text-blue-500 hover:text-sky-900 p-3 mt-4'>
                <button type="submit" className='flex flex-row bg-purple-700 text-slate-100 hover:bg-orange-400 p-4 font-bold py-2 px-4 rounded shadow-lg'>
                    <p className='mr-2'>Add Post</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      Add Post
                    </svg>
                </button>
            </Link>
          </div>
        </section>
        
      </main>
    </Suspense>
  );
}
