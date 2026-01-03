import Link from "next/link";
import Image from "next/image";
import { SiteContainer } from "@/components/site-container";
import { COMPANY } from "@/lib/constants";
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <SiteContainer className="py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
               {/* Using logo.svg as confirmed in plan */}
               <Image src="/logo-footer.png" alt={COMPANY.name} width={150} height={40} className="h-10 w-auto" />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              {COMPANY.about}
            </p>
            <div className="mt-6 flex gap-4">
               <SocialLink href="https://www.linkedin.com/company/dome-digital-solutions/" icon={Linkedin} label="LinkedIn" />
               <SocialLink href="https://www.facebook.com/DomeDigitalSolutions/" icon={Facebook} label="Facebook" />
               <SocialLink href="https://www.instagram.com/dome_digital_solutions/" icon={Instagram} label="Instagram" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/brands">Partners & Brands</FooterLink></li>
              <li><FooterLink href="/contact">Contact Us</FooterLink></li>
              <li><FooterLink href="#">Careers</FooterLink></li>
            </ul>
          </div>

          {/* Solutions / Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">Solutions</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><FooterLink href="/solutions#security">Security Systems</FooterLink></li>
              <li><FooterLink href="/solutions#av">Audio Visual</FooterLink></li>
              <li><FooterLink href="/solutions#it">IT Infrastructure</FooterLink></li>
              <li><FooterLink href="/solutions#networking">Networking</FooterLink></li>
            </ul>
          </div>

          {/* Dom Logistics */}
          <div>
             <h3 className="text-sm font-semibold text-white">Dom Logistics</h3>
             <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                   <MapPin className="h-5 w-5 shrink-0 text-brand-500" />
                   <span>
                      <span className="block font-medium text-white mb-1">India Office</span>
                      TC.NO: 60 – 493/6,<br/>
                      Kidarakuzhi, Vizhinjam<br/>
                      Kerala, India - 695523
                   </span>
                </li>
                <li className="flex items-start gap-3">
                   <Phone className="h-5 w-5 shrink-0 text-brand-500" />
                   <a href="tel:+919496929991" className="hover:text-brand-400 transition-colors">
                      +91 94969 29991
                   </a>
                </li>
             </ul>
          </div>
          
           {/* Juan Component */}
          <div>
            <h3 className="text-sm font-semibold text-white">Juan Build Tech</h3>
             <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                   <MapPin className="h-5 w-5 shrink-0 text-brand-500" />
                   <span>
                      <span className="block font-medium text-white mb-1">Technical Services LLC</span>
                      Office 310, Al Kazim Building 3,<br></br>
                      Hor Al Anz East, Dubai - UAE
                   </span>
                </li>
                <li className="flex items-start gap-3">
                   <Phone className="h-5 w-5 shrink-0 text-brand-500" />
                   <div className="space-y-1">
                      <a href="tel:+971525186499" className="block hover:text-brand-400 transition-colors">
                        +971 52 518 6499
                      </a>
                      <a href="tel:+97144502795" className="block hover:text-brand-400 transition-colors">
                        +971 4 450 2795
                      </a>
                   </div>
                </li>
             </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white">Dome Digital Solutions</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                 <MapPin className="h-5 w-5 shrink-0 text-brand-500" />
                 <span>Office 310, Al Kazim Building 3,<br></br>
Hor Al Anz East, Dubai - UAE</span>
              </li>
              <li className="flex items-start gap-3">
                 <Phone className="h-5 w-5 shrink-0 text-brand-500" />
                 <div className="space-y-1">
                    {COMPANY.phones.map(phone => (
                       <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block hover:text-brand-400 transition-colors">
                          {phone}
                       </a>
                    ))}
                 </div>
              </li>
              <li className="flex items-start gap-3">
                 <Mail className="h-5 w-5 shrink-0 text-brand-500" />
                 <a href={`mailto:${COMPANY.email}`} className="hover:text-brand-400 transition-colors">
                    {COMPANY.email}
                 </a>
              </li>
            </ul>
          </div>
        </div>

        
      </SiteContainer>
    </footer>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
   return (
      <a href={href} className="group flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 transition-colors hover:bg-brand-600">
         <Icon className="h-4 w-4 text-slate-400 transition-colors group-hover:text-white" />
         <span className="sr-only">{label}</span>
      </a>
   )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
   return (
      <Link href={href} className="block text-slate-400 transition-colors hover:text-brand-400 hover:translate-x-0.5 transform duration-200">
         {children}
      </Link>
   )
}
