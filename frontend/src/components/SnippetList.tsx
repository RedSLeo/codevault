"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type Snippet = {
    id: number;
    title: string;
    content: string;
};

export default function SnippetList() {
    const [snippets, setSnippets] = useState<Snippet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchSnippets() {
            try {
                const res = await fetch("http://localhost:8000/snippets");
                if (!res.ok) throw new Error("Unable to fetch snippets");
                const data = await res.json();
                setSnippets(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchSnippets();
    }, []);

    if (loading) return <p>Loading snippets</p>;
    if (error) return <p className = "text-red--500">Error: {error}</p>

    return (
    <div className="space-y-4">
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="border p-4 rounded shadow bg-white dark:bg-gray-800"
        >
          <h2 className="text-lg font-semibold">{snippet.title}</h2>
          <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2 whitespace-pre-wrap">
            {snippet.content}
          </pre>

          <div className="mt-4">
            <Link href={`/snippets/${snippet.id}`}>
              <button className="text-indigo-600 hover:underline">
                View Snippet
              </button>
            </Link>
          </div>

          <div className="mt-5">
            <Link href={`/snippets/${snippet.id}/edit`}>
            <button className="ml-4 text-blue-600 hover:underline">
                Edit
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}