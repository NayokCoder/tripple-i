"use client";

import React from "react";
import Link from "next/link";
import { Home, Briefcase, Code, ClipboardList, BookOpen, Mic, FileText, Users } from "lucide-react";

const Navbar = () => {
  const Links = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Consulting Services", path: "/consultancy", icon: <Briefcase size={18} /> },
    { name: "Software Solutions", path: "/software", icon: <Code size={18} /> },
    { name: "Project Management", path: "/project", icon: <ClipboardList size={18} /> },
    {
      name: "Resources",
      path: "/resources",
      icon: <BookOpen size={18} />,
      children: [
        { name: "Podcasts", path: "/resources/podcasts", icon: <Mic size={16} /> },
        { name: "Blog Posts", path: "/resources/blog", icon: <FileText size={16} /> },
        { name: "Community", path: "/resources/community", icon: <Users size={16} /> },
      ],
    },
  ];

  return (
    <nav className="bg-[#f6f7fb]">
      <div className="navbar  max-w-screen-2xl mx-auto">
        {/* Logo + Mobile Dropdown */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
              {Links.map((link) => (
                <li key={link.name}>
                  {link.children ? (
                    <details>
                      <summary className="flex items-center gap-2">
                        {link.icon} {link.name}
                      </summary>
                      <ul>
                        {link.children.map((child) => (
                          <li key={child.name}>
                            <Link href={child.path} className="flex items-center gap-2">
                              {child.icon} {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link href={link.path} className="flex items-center gap-2">
                      {link.icon} {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            Triple-I
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Links.map((link) => (
              <li key={link.name} className="relative">
                {link.children ? (
                  <details>
                    <summary className="flex items-center gap-1">
                      {link.icon} {link.name}
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none z-50">
                      {link.children.map((child) => (
                        <li key={child.name}>
                          <Link href={child.path} className="flex items-center gap-2">
                            {child.icon} {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={link.path} className="flex items-center gap-2">
                    {link.icon} {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="navbar-end">
          <a className="custom-button">Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
