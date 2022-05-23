import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "./Spinner";

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Spinner></Spinner>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
export default RequireAuth;