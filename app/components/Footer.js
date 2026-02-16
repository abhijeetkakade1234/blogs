import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'X (Twitter)', url: 'https://x.com/AbhijeetKakade0' },
    { name: 'GitHub', url: 'https://github.com/abhijeetkakade1234' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhijeet-kakade-384a9a253/' },
    { name: 'Portfolio', url: 'https://abhijeetkakade.in/' },
  ];

  return (
    <footer className="border-t border-card-border mt-auto">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-muted text-sm">
          © {currentYear} Abhijeet Kakade. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent-pink transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
