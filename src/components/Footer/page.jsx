import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
      <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-b">
        <p className="text-xs text-muted-foreground">© 2024 Rag Pickers. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" prefetch={false} className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" prefetch={false} className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </div>
      <div className="container mt-5 max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">About</h3>
          <Link href="#" prefetch={false}>Our Mission</Link>
          <Link href="#" prefetch={false}>Our Team</Link>
          <Link href="#" prefetch={false}>Careers</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Get Involved</h3>
          <Link href="#" prefetch={false}>Become a Rag Picker</Link>
          <Link href="#" prefetch={false}>Donate</Link>
          <Link href="#" prefetch={false}>Volunteer</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Resources</h3>
          <Link href="#" prefetch={false}>Blog</Link>
          <Link href="#" prefetch={false}>FAQs</Link>
          <Link href="#" prefetch={false}>Contact</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <Link href="#" prefetch={false}>Privacy Policy</Link>
          <Link href="#" prefetch={false}>Terms of Service</Link>
        </div>
        <div className="grid gap-1" />
      </div>
    </footer>
  );
};

export default Footer;
