import React from 'react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Heart } from 'lucide-react';

const BeautifulCard = () => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Card Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src="/api/placeholder/800/600"
          alt="Card image"
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
        />
        <Badge 
          className="absolute top-4 right-4 bg-white/90 text-black hover:bg-white/95"
        >
          Featured
        </Badge>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Beautiful Design
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Experience the perfect blend of form and function with our carefully crafted interface components.
        </p>

        {/* Card Footer */}
        <div className="flex items-center justify-between">
          <Button 
            variant="outline"
            className="text-sm"
          >
            Learn More
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${isLiked ? 'text-red-500' : 'text-gray-400'}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart 
              className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BeautifulCard;