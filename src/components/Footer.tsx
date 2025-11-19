import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-galactic-purple text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-electric-pink bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="tel:0701811114"
                className="flex items-center gap-3 hover:text-electric-pink transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>0701 811114</span>
              </a>
              <a
                href="mailto:Joseph.gichunge@jazzacentre.com"
                className="flex items-center gap-3 hover:text-electric-pink transition-colors break-all"
              >
                <Mail className="w-5 h-5" />
                <span>Joseph.gichunge@jazzacentre.com</span>
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-electric-pink bg-clip-text text-transparent">
              Our Locations
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Runda Office</p>
                  <p className="text-white/80">Kiambu Road, Nairobi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Safari Park Office</p>
                  <p className="text-white/80">Safari Park Avenue, No. 271</p>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-electric-pink bg-clip-text text-transparent">
              About Jazza Centre
            </h3>
            <p className="text-white/80 leading-relaxed">
              We are more than an agency – we are an academy dedicated to professionalizing
              domestic workers. Our mission is to equip men and women with the skills necessary
              to excel in home and business management.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
          <p>© {new Date().getFullYear()} Jazza Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
