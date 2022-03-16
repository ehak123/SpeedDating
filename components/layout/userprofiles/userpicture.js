import Image from "next/image"
import styles from './userprofiles.module.css'

export default function UserPicture({src, username}) {
    return (
        <div className="styles.userpicture">
            <Image src={src} alt={username} width="200" height="200" objectFit="cover" />
        </div>
    )
}