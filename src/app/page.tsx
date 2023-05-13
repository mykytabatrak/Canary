import { Link } from "@/ui/link";

export default function Home() {
  return (
    <main className="max-w-prose mx-auto py-8 px-4">
      <ul className="list-disc list-inside">
        <li>
          <Link href="/container-queries">Container queries</Link>
        </li>
      </ul>
    </main>
  );
}
