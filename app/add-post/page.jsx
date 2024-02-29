'use client'
import Link from 'next/link';
import { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from './loading';

export default function AddPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [name, setName] = useState('');
    const router = useRouter()

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
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
                body: JSON.stringify({ title, content, name })
            })

            router.refresh()
        } catch (error) {
            console.error(error)
        }

        setTitle('');
        setContent('');
        setName('');
    };

    return (
        <Suspense fallback={<Loading/>}>
        <main className='relative flex min-h-screen bg-teal-400 font-sans'>
            <section className='flex-col justify-center overflow-hidden py-6 px-6 mx-auto text-center'>
                <h1 className='font-semibold mt-4 text-center animate-pulse mb-4'>Add Post</h1>
                <p className='font-light'>Tell us, what's on your mind?</p>
                <section className='bg-slate-200 p-7 mt-4 shadow shadow-lg rounded-lg text-center'>
                    <form onSubmit={handleSubmit} className='relative mb-8 border-spacing-5'>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                required
                                className='line-clamp-3 mt-2 mb-4 shadow-slate-200 shadow-lg rounded min-h-9'
                            />
                        </div>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                                required
                                className='line-clamp-3 mt-2 mb-4 shadow-slate-200 shadow-lg rounded min-h-9'
                            />
                        </div>
                        <div>
                            <label htmlFor="content">Content:</label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={handleContentChange}
                                required
                                className='line-clamp-3 mt-4 mb-6 shadow-slate-300 shadow-lg rounded min-h-9'
                            />
                        </div>
                        <button type="submit" className='relative bg-cyan-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded shadow-lg'>Submit</button>
                    </form>
                </section>
                <div className='flex flex-row justify-center'>
                    <Link href={'/'} className='text-blue-500 hover:text-sky-900 p-3 mt-4'>
                        <button type="submit" className='flex flex-row bg-purple-700 text-slate-100 hover:bg-orange-400 p-4 font-bold py-2 px-4 rounded shadow-lg'>
                            <p className='mr-2'>View Feed</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </section>
        </main>
        </Suspense>
    )
}