"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Snippet = {
    id: number;
    title: string;
    content: string;
};

export default function EditSnippetPage({ params }: {params: {id: string } }) {
    const router = useRouter();
    const [snippet, setSnippet] = useState<Snippet | null>(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`http://localhost:8000/snippets/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
            setSnippet(data);
            setTitle(data.title);
            setContent(data.content);
        })
        .catch(() => setError("FAILED to LOAD Snippet."));
    }, [params.id]);

    async function handleUpdate(e: React.FormEvent) {
        e.preventDefault();
        try{
            const res = await fetch(`http://localhost:8000/snippets/${params.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, content }),
            });
            
            if (!res.ok) throw new Error("Update has failed");
            router.push(`/snippets/${params.id}?from=edit`);
        } catch (err: any) {
            setError(err.message);
        }
    }

    if (!snippet) return <p>Loading. . . .</p>

    
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Edit Snippet</h1>

      {error && <p className="text-red-500 mb-2">Error: {error}</p>}

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
            rows={6}
            required
          />
        </div>

        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Save Changes
        </button>
      </form>
    </div>
    );
    
    
    
}