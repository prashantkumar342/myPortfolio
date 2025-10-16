// hooks/useNavigation.js
import { useNavigate, useLocation } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item) => {
    if (item.path.startsWith("/#")) {
      const targetId = item.path.replace("/#", "#");

      // If already on home page, just scroll
      if (location.pathname === "/") {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If on another page (like /contact), navigate home first
        navigate("/", { replace: false });

        // Wait for the DOM to update, then scroll
        setTimeout(() => {
          const element = document.querySelector(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300); // delay ensures home DOM is ready
      }
    } else {
      // Regular route navigation (like /contact)
      navigate(item.path);
    }
  };

  return { handleNavigation };
};
