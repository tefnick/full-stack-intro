import Skeleton from "./components/Skeleton"

export default function Loading() {
    return (
        // <h2 className='flex-col justify-center min-h-screen bg-teal-400 font-sans text-center'>Loading posts...</h2>
        <main className='relative flex min-h-screen bg-teal-400 font-sans'>
            <section className='flex-col justify-center overflow-hidden py-6 px-6 mx-auto text-center'> 
                <section className='p-7 mt-4 shadow-lg rounded-lg text-center'>
                    <article className="relative shadow-md">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Skeleton className="w-[30ch] h-[1.25rem]"/>
                                <Skeleton className="w-[45ch] h-[1rem]"/>
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="w-[30ch] h-[1.25rem]"/>
                                <Skeleton className="w-[45ch] h-[1rem]"/>
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="w-[30ch] h-[1.25rem]"/>
                                <Skeleton className="w-[45ch] h-[1rem]"/>
                            </div>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}