import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt?: string; // Optional alt text for the image
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'User avatar' }) => {
  return (
    <>
      <Image
        src={src}
        width={120}
        height={120}
        className="rounded-full"
        alt={alt} // Ensuring accessibility
      />
    </>
  );
};

export default Avatar;
