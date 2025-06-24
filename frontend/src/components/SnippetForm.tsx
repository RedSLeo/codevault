"use client";

import React, { useState } from "react";

export default function SnippetForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSuccess(false);
        setError("");

        try {
            const res = await fetch("http://localhost:8000/snippets", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, content }),
            });

            if (!res.ok) throw new Error("FAILED to create snippet");

            setTitle("");
            setContent("");
            setSuccess(true);
        }   catch (err: any) {
            setError(err.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mb-8 bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Add New Snippet</h2>

      {success && <p className="text-green-600">Snippet added successfully!</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

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
          rows={4}
          required
        />
      </div>

      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Add Snippet</button>
    </form>
    );
}