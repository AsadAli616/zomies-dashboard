import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

interface Option {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
}

interface InteractiveDropdownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const InteractiveDropdown = ({ options, value, onChange, placeholder = "Select option", className = "" }: InteractiveDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedOption = options.find(option => option.value === value);

  return (
    <div className={`relative ${className}`}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gradient-to-r from-card to-secondary border border-border rounded-xl px-4 py-3 flex items-center justify-between transition-all duration-200 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <div className="flex items-center space-x-3">
          {selectedOption?.icon}
          <div className="text-left">
            <div className="font-medium">
              {selectedOption?.label || placeholder}
            </div>
            {selectedOption?.description && (
              <div className="text-sm text-muted-foreground">
                {selectedOption.description}
              </div>
            )}
          </div>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-xl shadow-lg z-50 overflow-hidden"
            >
              <div className="max-h-60 overflow-y-auto">
                {options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ backgroundColor: 'hsl(var(--secondary))' }}
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {option.icon}
                      <div>
                        <div className="font-medium">{option.label}</div>
                        {option.description && (
                          <div className="text-sm text-muted-foreground">
                            {option.description}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {value === option.value && (
                      <Check size={16} className="text-primary" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveDropdown;