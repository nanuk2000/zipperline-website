import zipperlineLogo from "@/assets/zipperline-logo.png";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/30 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <img 
              src={zipperlineLogo} 
              alt="Zipperline" 
              className="w-10 h-10 rounded-lg"
            />
            <div>
              <p className="font-semibold text-foreground">Zipperline</p>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
