import Image from 'next/image';

interface IconProps {
    src: string;
    link: string;
}

export default function Icon({ src, link } : IconProps) {
    return (
        <a href={link} target="_blank">
            <Image
                src={src}
                alt={"icon"}
                objectFit="cover"
                width={50}
                height={50}
                className=""
                draggable={false}
            />
        </a>

    );
}