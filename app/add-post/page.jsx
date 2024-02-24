'use client'
import Link from 'next/link';
import { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from './loading';

export default function AddPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter()

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await fetch('/api/add-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, content })
            })

            router.refresh()
        } catch (error) {
            console.error(error)
        }

        setTitle('');
        setContent('');
    };

    return (
        <Suspense fallback={<Loading/>}>
        <main className='relative flex min-h-screen bg-teal-400 font-sans'>
            <div className='flex flex-row justify-start'>
                <Link href={'/'} className='text-blue-500 hover:text-sky-900 float-left p-3'>View Feed</Link>
            </div>
            <section className='flex-col justify-center overflow-hidden py-6 px-6 mx-auto'>
                <h1 className='font-semibold mt-4 text-center animate-pulse'>Add Post</h1>
                <p className='font-light'>Tell us, what's on your mind?</p>
                <section className='bg-slate-200 p-7 mt-4 shadow shadow-lg rounded-lg'>
                    <form onSubmit={handleSubmit} className='relative mb-8 border-spacing-5'>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                                required
                                className='line-clamp-3 mt-2 mb-4 shadow shadow-slate-300 shadow-lg rounded min-h-3'
                            />
                        </div>
                        <div>
                            <label htmlFor="content">Content:</label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={handleContentChange}
                                required
                                className='line-clamp-3 mt-4 mb-6 shadow shadow-slate-300 shadow-lg rounded min-h-3'
                            />
                        </div>
                        <button type="submit" className='relative bg-cyan-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded ml-10 shadow shadow-lg'>Submit</button>
                    </form>
                </section>
            </section>
        </main>
        </Suspense>
    )
}