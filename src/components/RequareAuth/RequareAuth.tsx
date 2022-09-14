import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "../../router/routes";
import { useAppSelector } from "../../store/hooks";
import { DotLoader } from "react-spinners";

export const RequareAuth = () => {
  const user = useAppSelector((state) => state.users.result);
  const isLoading = useAppSelector((state) => state.users.isLoading);
  if (isLoading) {
    return <DotLoader />;
  }
  return (
    user ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />
  );
};
