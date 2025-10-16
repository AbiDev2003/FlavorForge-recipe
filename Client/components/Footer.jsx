import './../styles/tailwind.css';
import { useNavigate } from 'react-router-dom';

export default function Footer({ age }) {
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    e.preventDefault();
    navigate("/", { state: { scrollToAbout: true } }); // pass state flag
  };

  const socialMediaLink =
    age > 50 ? (
      <a
        href="https://www.facebook.com/abinash.dash.54584"
        className="text-gray-400 hover:text-white transition"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Facebook SVG */}
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
    ) : (
      <a
        href="https://www.instagram.com/abinash_vocals_/"
        className="text-gray-400 hover:text-white transition"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Instagram SVG */}
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
    );

   

  return (
    <footer className="bg-gray-900 text-gray-300 p-4 border-t-2 border-gray-700 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <div className="container mx-auto px-4">
        {/* Top: About, Links, Contact, Socials */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* About Section */}
          <div className="mb-6 md:mb-0 max-w-xs">
            <h3 className="font-bold text-lg text-white mb-2">About</h3>
            <p className="text-gray-400 text-sm">
              Passionate developer and problem solver. I build creative web interfaces and love working on cool projects with React, Three.js, Bootstrap, Tailwind and vanilla CSS.
            </p>
            <a href="#top" className="inline-block mt-2 text-sm text-orange-400 hover:underline font-semibold">
              Back to top ↑
            </a>
          </div>

          {/* Links Section */}
          <div className="mb-6 md:mb-0 flex flex-col gap-2 min-w-[180px]">
            <h3 className="font-bold text-lg text-white mb-2">Links</h3>
            <a href="https://hashnode.com/@AbiSde2003" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm text-gray-300">
              Blog on Hashnode
            </a>
            <a href="https://www.freeprivacypolicy.com/live/46b400fd-73a0-4b7e-a664-2b485bf5eb8a" className="hover:underline text-sm text-gray-300" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a href="/about" className="hover:underline text-sm text-gray-300" onClick={handleAboutClick}>
              About Us
            </a>
          </div>

          {/* Contact Section */}
          <div className="mb-6 md:mb-0 flex flex-col gap-2 min-w-[200px]">
            <h3 className="font-bold text-lg text-white mb-2">Contact</h3>
            <a
              href="mailto:2003abinashdash@gmail.com"
              className="hover:underline text-sm text-gray-300 break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              2003abinashdash@gmail.com
            </a>
            {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" fill="#fff"/>
            </svg> */}
            <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" fill="#fff"/>
                </svg>
                <span className="text-sm text-gray-400">Kandarpur, Cuttack, 754100, Odisha, India</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-lg text-white mb-2">Socials</h3>
            <div className="flex space-x-4 mt-1">
              {socialMediaLink}
              <a
                href="https://discord.com/users/1276861157369712724"
                className="text-gray-400 hover:text-white transition"
                aria-label="Discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Discord SVG */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a
                href="https://x.com/Abi_Dash01"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Twitter SVG */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="https://github.com/AbiDev2003"
                className="text-gray-400 hover:text-white transition"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* GitHub SVG */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
              <a
                href="https://dribbble.com/2003abinashdash"
                className="text-gray-400 hover:text-white transition"
                aria-label="Dribbble"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Dribbble SVG */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-800 my-6" />

        {/* Bottom: Copyright, policy, tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <div className="text-gray-400">
            &copy; 2025 FlavorForge™. All Rights Reserved.
          </div>
          <div className="text-gray-500 text-center">
            Privacy: This site does not collect personal data or use cookies.
          </div>
          <div className="text-gray-300 font-semibold text-xs text-center">
            Coded with ❤️ React &amp; Three.js with Bootstrap, Tailwind, and vanilla CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}