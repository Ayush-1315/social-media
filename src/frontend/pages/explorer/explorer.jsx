import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
export const ExplorerPage = () => {
  const navigate = useNavigate();
  const { isLogin } = useAuth();
  useEffect(() => {
    document.title = "Chatster | Explore";
    isLogin && navigate("/explore");
  }, [isLogin, navigate]);
  return (
    <>
      <div>
        <div>Explorer here</div>
      </div>
    </>
  );
};
