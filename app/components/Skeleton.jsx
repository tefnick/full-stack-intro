export default function Skeleton({ className }) {
    return <div className={`flex justify-center relative shadow-md shadow-slate-300 p-5 text-start mb-4 bg-slate-300 py-8 motion-safe:animate-pulse rounded ${className}`} />;
}