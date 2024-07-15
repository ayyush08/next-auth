
export default function page({params}:any) {
    return (
        <div className="flex flex-col items-center justify-center max-h-screen py-2">
            <h1>Profile Page</h1>
            <h2 className="p-3 text-black font-bold bg-green-600 rounded-full">{params.id}</h2>
        </div>
    )
}

