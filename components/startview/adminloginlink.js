import Link from "next/link"
import startview from '../../styles/startview.module.css'

export default function AdminLoginLink() {
    return (
        <Link href="/admin">
            <a id={startview.adminlogin}> Admin: log in </a>
        </Link>
    )    
}