import Image from 'next/image';

export default function InstagramPhoto({ src, alt, width, height }) {
    return (
        <Image
            src={src}
            alt={alt}
            objectFit="cover"
            width={width}
            height={height}
            className="undraggable object-cover aspect-square transform transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded"
            draggable={false}
        />
    );
}