import SnippetList from "@/components/SnippetList";
import SnippetForm from "@/components/SnippetForm";

export default function DashboardPage() {
    return (
        <div>
            <h1 className = "text-2xl font-bold mb-4">All Snippets</h1>
            <SnippetList />
            <SnippetForm />
        </div>
    );
}