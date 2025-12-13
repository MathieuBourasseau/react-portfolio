import React from 'react'
import { FaGithub } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" flex flex-col gap-4 bg-[url(/header/background.jpg)] p-6 text-white">
      <div>
        <p className="text-sm">© 2025 Mathieu Bourasseau – Tous droits réservés</p>
      </div>
      <div className="flex gap-4">
        <p className="text-sm">Contact</p>
        <span>1</span>
      </div>

    </footer>
  )
}
