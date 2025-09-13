import { Flame, Award, Play, Zap } from 'lucide-react';
import foxMascot from '@/assets/fox-mascot.png';

const HeroSection = () => {
  return (
    <div className="card-neumorphic mb-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Side - Greeting & Stats */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img 
              src={foxMascot} 
              alt="Zoomies Fox" 
              className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-light p-2"
            />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
              <Flame size={14} className="text-white" />
            </div>
          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-gradient mb-2">
              Hi Jack! Ready to ace today's challenge?
            </h1>
            <div className="flex items-center space-x-3">
              <div className="chip-streak">
                <Flame size={14} className="inline mr-1" />
                7-day streak!
              </div>
              <div className="chip-badge">
                <Award size={14} className="inline mr-1" />
                Quiz Master
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="btn-cta flex items-center space-x-2">
            <Zap size={18} />
            <span>Start Quiz?</span>
          </button>
          <button className="btn-hero flex items-center space-x-2">
            <Play size={18} />
            <span>Play Flashcards</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;