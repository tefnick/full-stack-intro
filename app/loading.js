import Skeleton from "./components/Skeleton"

export default function Loading() {
    return (
        // <h2 className='flex-col justify-center min-h-screen bg-teal-400 font-sans text-center'>Loading posts...</h2>
        <main className='relative flex min-h-screen bg-teal-400 font-sans'>
            <section className='flex-col justify-center overflow-hidden py-6 px-6 mx-auto text-center'> 
                <section className='bg-slate-200 p-7 mt-4 shadow-lg rounded-lg text-center'>
                    <article className="bg-slate-200 relative shadow-md mb-4">
                        <div className="shadow-slate-300 space-y-6 space-x-4 p-4">
                            <div className="space-y-2">
                                <Skeleton className="ml-4 w-[15ch] h-[1.25rem] mb-2 animate-pulse"/>
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="w-[20ch] h-[1.25rem] animate-pulse"/>
                            </div>
                            <div className="space-y-2">
                                <Skeleton className=" h-[1rem] mb-6 animate-pulse"/>
                                <Skeleton className="w-[30ch] h-[1rem] animate-pulse"/>
                            </div>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}