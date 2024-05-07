import { Outlet, useLocation } from "react-router-dom";
import TopNavBar from "../components/navigation";
import Footer from "../components/footer";
import { useEffect } from "react";

const HomeRoute = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <div className="text-white-variant-1 home-route">
      <TopNavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeRoute;
