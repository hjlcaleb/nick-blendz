import Image from 'next/image';

interface InstagramPhotoProps {
    src: string;
    alt: string;
    dim: number;
}
export default function InstagramPhoto({ src, alt, dim }: InstagramPhotoProps) {
    return (
        <Image
            src={src}
            alt={alt}
            objectFit="cover"
            width={dim}
            height={dim}
            className="undraggable object-cover aspect-square transform transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded"
            draggable={false}
        />
    );
}