import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  link: string;
}

export default function ArticleCard({ title, excerpt, link }: ArticleCardProps) {
  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {excerpt.length > 150 ? excerpt.slice(0, 150) + "..." : excerpt}
      </p>
      <Link href={link} className="text-gray-900 hover:underline font-medium">
        Daha Fazla →
      </Link>
    </div>
  );
}
