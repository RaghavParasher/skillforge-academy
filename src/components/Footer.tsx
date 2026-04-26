import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-1 rounded-md font-bold text-xl px-2">
                A
              </div>
              <span className="font-bold text-2xl tracking-tight">Accredian</span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Transforming corporate learning with data-driven insights and world-class certification programs.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6">Programs</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Data Science & AI</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Product Management</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Strategic Leadership</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Business Analytics</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cloud Computing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Partnerships</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>enterprise@accredian.com</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>123 Tech Park, Sector 44, Gurgaon, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Accredian Enterprise. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
