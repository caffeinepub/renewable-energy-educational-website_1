interface VideoEmbedProps {
  videoId: string;
  title: string;
  platform?: 'youtube' | 'vimeo';
}

export default function VideoEmbed({ videoId, title, platform = 'youtube' }: VideoEmbedProps) {
  const embedUrl =
    platform === 'youtube'
      ? `https://www.youtube.com/embed/${videoId}`
      : `https://player.vimeo.com/video/${videoId}`;

  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
