import Link from "next/link";

interface ILink {
  id: string;
  href: string;
  name: string;
}

const links: ILink[] = [
  { id: "1", href: "/dashboard", name: "Dashboard" },
  { id: "2", href: "/tasks", name: "Tasks" },
];

export default function Sidebar() {
  return (
    <aside className="md:block h-screen w-64 bg-linear-to-t from-blue-950 to-slate-200 text-primary p-6">
      <h2 className="text-xl mb-6">To do List App</h2>
      <nav>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="block px-4 py-2 rounded-lg text-base hover:bg-accent transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
