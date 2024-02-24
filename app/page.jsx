import prisma from '@/lib/prisma'
import Post from './components/Post';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata = {
  title: 'Nick\'s Social Media',
}

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true, email: true}
      }
    }
  })
  return posts;
}

export default async function Home() {

  const posts = await getPosts();
  return (
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
            <Link href={'/add-post'} className='text-blue-500 hover:text-sky-900 p-3 mt-4'>Add Post</Link>
        </div>
      </section>
      
    </main>
  );
}
