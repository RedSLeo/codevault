"use client";

import { useRouter } from "next/navigation";

export default function ClientView({ snippet, showDelete = false}: { snippet: any, showDelete?: boolean}) {
    const router = useRouter();

    async function handleDelete() {
        const confirmed = confirm("Are absolutely positive you want to delete this snippet?");
        if (!confirmed) return;

        await fetch(`http://localhost:8000/snippets/${snippet.id}`, {
            method: "DELETE",
        });

        router.push("/dashboard");
    }

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{snippet.title}</h1>
      <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
        {snippet.content}
      </pre>
      <button>
      {showDelete && (
        <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Delete</button>
      )}
      </button>
    </div>
    )
}