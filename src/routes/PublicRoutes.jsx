import { Route } from "react-router-dom";
import LandingPage from "../pages/publicPages/landingPage/LandingPage.jsx";
import AboutPage from "../pages/publicPages/aboutPage/AboutPage.jsx";
import FAQPage from "../pages/publicPages/faqPage/FAQPage.jsx";
import ContactPage from "../pages/publicPages/contactPage/ContactPage.jsx";
import LoginPage from "../pages/publicPages/loginPage/LoginPage.jsx";
import SignUpPage from "../pages/publicPages/signUpPage/SignUpPage.jsx";
import PublicLayout from "../layouts/PublicLayout.jsx";

function PublicRoutes() {
    return (
        <>
            <Route element={<PublicLayout />}>
                <Route path='/' element={<LandingPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/faq' element={<FAQPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Route>
            {/* Auth pages — no footer nav wrap needed */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
        </>
    )
}

export default PublicRoutes
