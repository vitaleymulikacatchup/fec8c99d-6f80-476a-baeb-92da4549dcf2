"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A close-up shot of a person coding on a laptop, focusing on the hands and screen." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/34234301/pexels-photo-34234301.png?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two professionals working at a shared office desk, top view." },
  { "id": "contact-image", "url": "https://images.pexels.com/photos/34233738/pexels-photo-34233738.png?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Servicios - 5" }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[{ name: 'Home', id: 'home' }, { name: 'About', id: 'about' }, { name: 'Services', id: 'services' }, { name: 'Contact', id: 'contact' }]}
          brandName="IT Co."
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to IT Co."
            description="Your partner in innovative IT solutions"
            buttons={[{ text: 'Learn More', href: 'about' }, { text: 'Contact Us', href: 'contact' }]}
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={["We are a team of passionate IT professionals.", "Our mission is to deliver top-quality solutions tailored to your needs."]}
            buttons={[{ text: 'Learn More', href: 'services' }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Features"
            description="Explore the services that make us stand out"
            features={[
              { title: "Cloud Solutions", description: "Scalable and secure cloud services for all your business needs.", icon: "Cloud" },
              { title: "Cybersecurity", description: "Protect your data with our comprehensive security measures.", icon: "Shield" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="Contact Us"
            description="We're here to help. Reach out for any inquiries."
            imageSrc={assetMap.find(a => a.id === 'contact-image')?.url}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            logoText="IT Co."
          />
        </div>
      </div>
    </ThemeProvider>
  );
}