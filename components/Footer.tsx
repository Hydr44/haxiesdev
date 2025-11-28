import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Haxies Dev</h3>
            <p className="text-white/70 text-sm">
              Studio digitale indipendente per app, siti web e software su misura.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigazione</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Progetti
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="mailto:info@haxiesdev.it"
                  className="hover:text-white transition-colors"
                >
                  info@haxiesdev.it
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393921723028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© 2025 Haxies Dev – Emmanuel Scozzarini</p>
        </div>
      </div>
    </footer>
  );
}

