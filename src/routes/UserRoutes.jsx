import { Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import UserPageLayout from "../layouts/UserPageLayout";
import UserDashboard from "../pages/userPages/userDashboard/UserDashboard";
import UserRequests from "../pages/userPages/userRequests/UserRequests";
import UserCreateRequest from "../pages/userPages/userCreateRequest/UserCreateRequest";
import FindEngineersPage from "../pages/userPages/findEngineersPage/FindEngineersPage";

export default function UserRoutes({ }) {


    return (
        <>
            <Route element={<ProtectedRoutes allowedRoles={["user"]} />}>
                <Route element={<UserPageLayout  />}>
                    <Route path='/user/dashboard' element={<UserDashboard />} />
                    <Route path='/user/requests' element={<UserRequests/>} />
                    <Route path='/user/requests/create-request' element={<UserCreateRequest/>} />
                    <Route path='/user/find-engineers' element={<FindEngineersPage/>} />
                    <Route path='/user/messages' element={<></>} />
                    <Route path='/user/payments' element={<></>} />
                    <Route path='/user/profile' element={<></>} />
                    <Route path='/user/notifications' element={<></>} />
                    <Route path='/user/notifications/:str' element={<></>} />
                    <Route path='/user/settings' element={<></>} />
                </Route>
            </Route>
        </>
    )
} 