import { StickyNavbar } from './components/StickyNavbar';
import { V3Hero } from './components/V3Hero';
import { V3WhySection } from './components/V3WhySection';
import { ByTheNumbersSection } from './components/ByTheNumbersSection';
import { V3TriPanel } from './components/V3TriPanel';
import { V3HorizontalFeatures } from './components/V3HorizontalFeatures';
import { V3JoinMovement } from './components/V3JoinMovement';
import { SpotifyFooter } from './components/SpotifyFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <StickyNavbar />
      
      <main>
        {/* 1. HERO - "Create. Connect. Perform." */}
        <V3Hero />
        
        {/* 2. THE WHY - "For the Creators Who Deserve More" */}
        <V3WhySection />
        
        {/* 3. BY THE NUMBERS - Data That Speaks */}
        <ByTheNumbersSection />
        
        {/* 4. FOR ARTISTS/VENUES/FANS - Interactive Tri-Panel */}
        <V3TriPanel />
        
        {/* 5. THE EXPERIENCE - Horizontal Features */}
        <V3HorizontalFeatures />
        
        {/* 6. JOIN THE MOVEMENT - Final CTA */}
        <V3JoinMovement />
      </main>
      
      {/* Footer */}
      <SpotifyFooter />
    </div>
  );
}