// app/components/TeamMemberCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface TeamMemberProps {
  name: string;
  title: string;
  imageSrc: string;
  linkedinUrl?: string;
}

export default function TeamMemberCard({ name, title, imageSrc, linkedinUrl }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
      <Image
        src={imageSrc}
        alt={name}
        width={300}
        height={400}
        className="object-cover w-full h-[400px]"
      />
      <div className="p-4">
        <h3 className="text-lg text-rose-800 font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        {linkedinUrl && (
          <div className="mt-2">
            <Link href={linkedinUrl} target="_blank">
              <img src="/linkedin.svg" alt="LinkedIn" className="mx-auto w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
