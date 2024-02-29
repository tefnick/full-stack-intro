export default function Header() {
    return (
        <header className="flex flex-col bg-pink-500 text-white text-center md:text-right py-4 rounded-sm">
            <h1 className="font-semibold mr-10">Nick's Social Media</h1>
            <p className="font-light mr-10">A place where Spurs fans hang</p>
            <img className="inline-block mr-10 max-h-12 max-w-12 rounded-full mt-4 ml-6" src="spurs_logo.jpeg" alt="Spurs Logo" />
        </header>
    )
}