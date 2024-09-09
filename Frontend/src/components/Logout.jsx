import toast from "../../node_modules/react-hot-toast/dist/index";
import { useAuth } from "../Context/AuthProvider";


function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
      setTimeout(() => {
          window.location.reload();
      }, 2000)
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(()=>{},2000)
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
