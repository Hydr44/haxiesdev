import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/20 glass">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Haxies Dev</span>
            </h3>
            <p className="text-foreground/70 text-sm">
              Studio digitale indipendente per app, siti web e software su misura.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigazione</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contatti</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a
                  href="mailto:info@haxiesdev.it"
                  className="hover:text-primary transition-colors"
                >
                  info@haxiesdev.it
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393921723028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>© 2025 Haxies Dev – Emmanuel Scozzarini</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
