import Link from "next/link";

export default function Layout({ children }) {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Top Stories",
      path: "/news/top-stories",
    },
    {
      title: "Popular",
      path: "/news/popular",
    },
    {
      title: "Sections",
      path: "/sections",
    },
    {
      title: "Products",
      path: "/products",
    },
  ];
  return (
    <>
      <header className="main-header">
        {links.map((link) => {
          return (
            <Link key={link.title} href={link.path}>
              <a>{link.title} </a>
            </Link>
          );
        })}
      </header>
      {children}
    </>
  );
}
