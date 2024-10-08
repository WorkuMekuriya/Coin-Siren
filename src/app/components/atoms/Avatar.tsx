import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'User avatar' }) => {
  return (
    <>
      <Image src={src} width={120} height={120} className="rounded-full" alt={alt} />
    </>
  );
};

export default Avatar;
