import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-5">

        {/* Brand */}
        <aside>
          <Link href="/">
            <Image src="/logo.png" width={120} height={70} alt="Pet Logo" />
          </Link>

          <p className="max-w-xs mt-2">
            Find loving homes for pets or adopt your perfect companion 🐾
            <br />
            Safe, trusted pet adoption platform.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaXTwitter />
            </a>
          </div>
        </aside>

        {/* Adoption */}
        <nav>
          <h6 className="footer-title">Adoption</h6>
          <Link className="link link-hover" href="/pets">Browse Pets</Link>
          <Link className="link link-hover" href="/adopt">Adopt a Pet</Link>
          <Link className="link link-hover" href="/post-pet">Post a Pet</Link>
          <Link className="link link-hover" href="/success-stories">Success Stories</Link>
        </nav>

        {/* Services */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link className="link link-hover" href="/pet-care">Pet Care Tips</Link>
          <Link className="link link-hover" href="/vets">Find Vets</Link>
          <Link className="link link-hover" href="/grooming">Grooming</Link>
          <Link className="link link-hover" href="/support">Support</Link>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link className="link link-hover" href="/about">About Us</Link>
          <Link className="link link-hover" href="/contact">Contact</Link>
          <Link className="link link-hover" href="/blog">Blog</Link>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover" href="/terms">Terms of Use</Link>
          <Link className="link link-hover" href="/privacy">Privacy Policy</Link>
          <Link className="link link-hover" href="/cookies">Cookie Policy</Link>
        </nav>

      </footer>

      {/* Copyright */}
      <div className="border-t bg-base-200 py-4 text-sm text-center opacity-70">
        © {new Date().getFullYear()} Pranipremi 🐾 — Made with love for pets. All rights reserved.
      </div>
    </>
  );
};

export default Footer;