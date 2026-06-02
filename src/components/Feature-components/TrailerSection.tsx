import { Video } from '@/types/movie';
import { PlayCircle } from 'lucide-react';

interface TrailerSectionProps {
  videos: Video[];
}

export function TrailerSection({ videos }: TrailerSectionProps) {
  const trailers = videos.filter((v) => v.type === 'Trailer' && v.site === 'YouTube');

  if (trailers.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Trailers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trailers.slice(0, 4).map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.key}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg"
          >
            <img
              src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
              alt={video.name}
              className="w-full aspect-video object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
              <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
              <p className="text-white text-sm font-semibold line-clamp-2">{video.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
