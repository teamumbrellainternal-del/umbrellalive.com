import { motion } from 'motion/react';
import { Button } from './ui/button';
import { MapPin, Music, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Mock data for artists
const artists = [
  {
    id: 1,
    name: "Sarah Chen",
    username: "@sarahcmusic",
    genres: ["Indie Pop", "R&B"],
    location: "San Francisco",
    tracks: 12,
    coverImage: "https://images.unsplash.com/photo-1575672909049-30fa299df67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGFydGlzdCUyMG11c2ljaWFuJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc1OTYxNjc4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    profileImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Marcus Blake",
    username: "@marcusblake",
    genres: ["Hip-Hop"],
    location: "Los Angeles",
    tracks: 24,
    coverImage: "https://images.unsplash.com/photo-1723100042618-46db123c6cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjBhcnRpc3QlMjBwZXJmb3JtaW5nfGVufDF8fHx8MTc1OTYxNjc4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Luna Rivera",
    username: "@lunarivera",
    genres: ["Electronic", "Dance"],
    location: "NYC",
    tracks: 18,
    coverImage: "https://images.unsplash.com/photo-1624703307604-744ec383cbf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBkaiUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1OTYxNjc5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    profileImage: "https://images.unsplash.com/photo-1726435640526-8aa188d4bfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBlbGVjdHJvbmljJTIwbXVzaWMlMjBhcnRpc3QlMjBwZXJmb3JtZXJ8ZW58MXx8fHwxNzU5NjIyMzQxfDA&ixlib=rb-4.1.0&q=80&w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "The Westside Collective",
    username: "@westsidecol",
    genres: ["Jazz Fusion"],
    location: "Chicago",
    tracks: 8,
    coverImage: "https://images.unsplash.com/photo-1758597294781-48e6c13a5933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwYmFuZCUyMGxpdmUlMjBtdXNpY3xlbnwxfHx8fDE3NTk2MTY3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Kai Yamamoto",
    username: "@kaiyamamoto",
    genres: ["Lo-fi", "Beats"],
    location: "Portland",
    tracks: 36,
    coverImage: "https://images.unsplash.com/photo-1575672909049-30fa299df67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGFydGlzdCUyMG11c2ljaWFuJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc1OTYxNjc4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    profileImage: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Echo & The Waves",
    username: "@echoandwaves",
    genres: ["Alternative Rock"],
    location: "Austin",
    tracks: 15,
    coverImage: "https://images.unsplash.com/photo-1669459868647-4c2f1c564052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZlbnVlJTIwbGl2ZSUyMGNvbmNlcnQlMjBjcm93ZHxlbnwxfHx8fDE3NTk2MTY3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
  }
];



export function SpotifyDiscover() {
  return (
    <section className="bg-black py-32 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-tiny font-bold tracking-widest text-purple-400 uppercase mb-4">
            DISCOVER
          </div>
          <h2 className="text-h2 text-white mb-6 max-w-4xl mx-auto">
            Meet the artists globally
          </h2>
          <p className="text-body-large text-purple-200 max-w-3xl mx-auto">
            Join thousands of artists connecting with fans, growing their audience, and getting discovered every day.
          </p>
        </motion.div>

        {/* Artists Grid */}
        <ArtistsSection artists={artists} />

        {/* Call-to-Action Section */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div 
            className="bg-gradient-to-br from-purple-900/30 to-gray-900/50 border border-purple-500/30 rounded-3xl p-16 text-center relative overflow-hidden"
          >
            {/* Background decorations */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl" />
            
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to be discovered?
            </h3>
            <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
              Join these artists and start building your community on Umbrella.
            </p>
            <Button className="btn-primary text-lg px-12 py-4 mb-4">
              Sign up free
            </Button>
            <p className="text-sm text-purple-300">
              No credit card required • Free forever
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Artists Section Component
function ArtistsSection({ artists }: { artists: typeof artists }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {artists.map((artist, index) => (
        <motion.div
          key={artist.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-gray-900 border border-purple-500/10 rounded-2xl overflow-hidden group hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
        >
          {/* Cover Image */}
          <div className="relative h-60 overflow-hidden">
            <ImageWithFallback
              src={artist.coverImage}
              alt={`${artist.name} cover`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            
            {/* Profile Picture */}
            <div className="absolute bottom-4 left-4">
              <ImageWithFallback
                src={artist.profileImage}
                alt={artist.name}
                className="w-16 h-16 rounded-full border-3 border-black object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-1">{artist.name}</h3>
            <p className="text-sm text-purple-300 mb-3">{artist.username}</p>
            
            {/* Genre Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {artist.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-purple-300 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{artist.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Music className="w-4 h-4" />
                <span>{artist.tracks} tracks</span>
              </div>
            </div>

            {/* View Profile Link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors group/link"
            >
              View Profile
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

