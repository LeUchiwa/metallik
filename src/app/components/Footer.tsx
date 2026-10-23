import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg mb-4">METALLIK</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leader en Constructions Métalliques à usage civil et industriel, nous offrons des solutions complètes pour tous vos projets industriels et architecturaux.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Phone size={16} />
                <span>+237 693 38 55 62</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Mail size={16} />
                <span>contact@metallik.tech</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin size={16} />
                <span>Douala - Yassa, Cameroun</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg mb-4">Horaires</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Lundi - Vendredi: 8h00 - 18h00</p>
              <p>Samedi - Dimanche: Fermé</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} METALLIK. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}