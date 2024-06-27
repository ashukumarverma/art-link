import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      {/* <nav className="font-semibold py-4 px-10 shadow-sm">
                <Link href="/" className="text-2xl">ArtLink</Link>
            </nav> */}
      {children}
    </div>
  );
};

export default Layout;
