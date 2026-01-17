import { Video } from '@/data/videos';

export default function VideoCard({ video }: { video: Video }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-gray-100 group">
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          className="w-full h-full"
          allowFullScreen
          title={video.title}
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-500 px-2 py-1 bg-blue-50 rounded-full">
          {video.category}
        </span>
        <h3 className="text-xl font-bold mt-3 text-gray-900 group-hover:text-blue-600 transition-colors">
          {video.title}
        </h3>
        <div className="mt-4 p-3 bg-gray-50 rounded-lg border-l-4 border-yellow-400">
          <p className="text-xs font-semibold text-gray-400 uppercase">AI Prompt:</p>
          <p className="text-sm italic text-gray-700 mt-1">"{video.prompt}"</p>
        </div>
      </div>
    </div>
  );
}