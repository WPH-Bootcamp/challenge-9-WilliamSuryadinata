import { Credits } from '@/types/movie';
import { getImageUrl } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface CastSectionProps {
  credits: Credits;
}

export function CastSection({ credits }: CastSectionProps) {
  const director = credits.crew.find((p) => p.job === 'Director');
  const cast = credits.cast.slice(0, 12);

  return (
    <div className="space-y-6">
      {director && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Director</h2>
          <p className="text-lg">{director.name}</p>
        </div>
      )}

      <div>
        <h2 className="text-2xl font-semibold mb-4">Cast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {cast.map((person) => (
            <Card key={person.id} className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={getImageUrl(person.profile_path, 'profile', 'medium')}
                  alt={person.name}
                  className="w-full aspect-[2/3] object-cover"
                />
                <div className="p-2">
                  <p className="font-semibold text-sm line-clamp-1">{person.name}</p>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {person.character}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
