'use client'
import { useRouter } from 'next/navigation'

export default function DeletePostButton({postId}) {
    const router = useRouter();

    async function handleClick() {
        try {
            await fetch(`/api/post/${postId}`, {
                method: 'DELETE',
            })
            router.refresh()
        } catch(e) {
            console.log(e)
        }
        
    }
    return (
        <button onClick={handleClick} className="flex flex-auto ml-56 mt-2">Delete</button>
    )
}