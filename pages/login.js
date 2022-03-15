import LoginView from "../components/loginview/loginview"
import AdminLoginLink from "../components/startview/adminloginlink"
import HomeFooter from "../components/layout/homefooter"

export default function Login() {
    return (
        <>
            <LoginView rank="user" />
            <AdminLoginLink />
            <HomeFooter />
        </>
    )
}