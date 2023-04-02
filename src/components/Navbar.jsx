import Link from "next/link";
import React from "react";
// React Navigation bar component using Tailwind CSS
const Navbar = () => {
  return (
    <header className="w-full px-32 py-8  font-medium flex items-center justify-between">
        <nav>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Projects</Link>
        </nav>
        <h2>Logo</h2>
        <nav>
            <Link href="/" target={"_blank"}>Login</Link>
            <Link href="/" target={"_blank"}>Register</Link>
        </nav>
    </header>
  );
};

// const Navbar = () => {
//   return (
//     <div className="w-full ">Navbar</div>
//   )
// }

export default Navbar;
