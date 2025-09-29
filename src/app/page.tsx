use client
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import CyclopsHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import BaseFooter from '@/components/sections/layouts/footer/BaseFooter';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 1,
  textAnimation: "slide",
  buttonOption: "motion-icon"
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline 
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1759139455078-6485b397.jpg"
          logoAlt="MemePulse Logo"
          navItems={[
            { name: "Hero", id: "#hero" },
            { name: "About", id: "#about" },
            { name: "How to Buy", id: "#how-to-buy" },
            { name: "Tokenomics", id: "#tokenomics" },
            { name: "Footer", id: "#footer" }
          ]}
          buttonText="Buy MEME"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <CyclopsHero 
          title="Welcome to MemePulse!"
          subtitle="Join the fun and explore our memecoin."
          primaryButtonText="Buy Now"
          secondaryButtonText="Learn More"
          characterImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759139452156-2885890c.jpg"
          characterImageAlt="Cartoon mascot of MemePulse"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout 
          title="About MemePulse"
          descriptions={[
            "MemePulse brings a unique twist to the memecoin space.",
            "Join our vibrant community and enjoy the journey."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics 
          title="Tokenomics"
          description="A transparent overview of MemePulse token supply and distribution."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1 Billion MEME tokens" },
            { id: 2, title: "Circulating Supply", description: "500 Million MEME tokens" },
            { id: 3, title: "Market Cap", description: "$5 Million" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <BaseFooter 
          copyrightText="© 2023 MemePulse. All rights reserved."
          columns={[
            { title: "Links", items: [
              { label: "Privacy Policy", onClick: () => {} },
              { label: "Terms of Service", onClick: () => {} },
            ]},
            { title: "Follow Us", items: [
              { label: "Twitter", onClick: () => {} },
              { label: "Telegram", onClick: () => {} },
            ]},
            { title: "More Info", items: [
              { label: "Contact", onClick: () => {} },
              { label: "FAQ", onClick: () => {} }
            ]}
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}