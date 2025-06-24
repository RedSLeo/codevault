import { notFound } from "next/navigation";
import ClientView from "./ClientView";
import { cookies } from "next/headers";

type Snippet = {
    id: number;
    title: string;
    content: string;
};

async function getSnippet(id: string): Promise < Snippet | null > {
    const res = await fetch(`http://localhost:8000/snippets/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) return null;
    return res.json();
}

export default async function SnippetPage({ params, searchParams }: { params: { id: string }, searchParams: { from?: string } }) {
    const snippet = await getSnippet(params.id);
    if (!snippet) return notFound();

    const showDelete = searchParams?.from !== "edit";
    return <ClientView snippet = {snippet} showDelete = {showDelete} />;
}