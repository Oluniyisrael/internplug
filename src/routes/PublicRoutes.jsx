import { Route } from "react-router-dom";
import LandingPage from "../pages/publicPages/landingPage/LandingPage.jsx";
import AboutPage from "../pages/publicPages/aboutPage/AboutPage";
import FAQPage from "../pages/publicPages/faqPage/FAQPage.jsx";
import Blogs from "../pages/publicPages/blogs/Blogs.jsx";
import BlogPage from "../pages/publicPages/blogPage/BlogPage.jsx";
import ContactPage from "../pages/publicPages/contactPage/ContactPage.jsx";
import SignUpPage from "../pages/publicPages/signUpPage/SignUpPage.jsx";
import LoginPage from "../pages/publicPages/loginPage/LoginPage.jsx";
import ResetPasswordPage from "../pages/publicPages/resetPasswordPage/ResetPasswordPage.jsx";
import PublicLayout from "../layouts/PublicLayout.jsx";
import { useRef } from "react";

function PublicRoutes({ }) {
    const howItWorksRef = useRef()
    return (
        <>
            <Route element={<PublicLayout {...{howItWorksRef}} />} >
                <Route path='/' element={<LandingPage {...{ howItWorksRef }} />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/faq' element={<FAQPage />} />
                <Route path='/blog' element={<Blogs />} />
                <Route path='/blog/:str' element={<BlogPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/reset-password' element={<ResetPasswordPage />} />
            </Route>
        </>
    )
}

export default PublicRoutes