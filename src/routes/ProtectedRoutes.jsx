// ProtectedRoutes.jsx
import { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "sonner";
import LoadingPage from "../pages/utilityPages/loadingPage/LoadingPage";

export default function ProtectedRoutes({ allowedRoles }) {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    const { isAuthenticated, user } = {
        isAuthenticated: true,
        user: {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            role: "user", // or "engineer"
            avatar: null,
            notifications: [
                { id: 1, title: "Repair Complete", message: "Your laptop repair has been completed", isRead: false, createdAt: new Date() },
                { id: 2, title: "Engineer Assigned", message: "An engineer has been assigned to your request", isRead: true, createdAt: new Date() }
            ]
        }
    };

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                setIsLoading(false);
            } catch (error) {
                console.error("Auth check failed:", error);
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (isLoading) {
        return <LoadingPage />;
    }

    if (!isAuthenticated) {
        toast.info("You are not logged in, kindly login");
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user?.role)) {
        return (
            <Navigate
                to={user?.role === "engineer" ? "/engineer/dashboard" : "/user/dashboard"}
                replace
            />
        );
    }

    return <Outlet context={{ user }} />;
}