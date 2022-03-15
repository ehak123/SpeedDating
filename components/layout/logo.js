import Image from "next/image";
import { name } from "../../data/metadata";
import utilStyles from '../../styles/utils.module.css'

export default function Logo() {
    return (
        <Image
            priority
            src="/images/icon400x400.jpg"
            className={utilStyles.borderCircle}
            height={40}
            width={40}
            alt={name}
        />
    )
}