import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { setUser } from "@/redux/authSlice";


const Navbar = () => {
  const { user } = useSelector(store => store.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true })
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-auto h-15">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex items-center gap-5 font-bold">
            {
              user && user.role === 'recruiter' ? (
                <>
                  <li> <Link to="/admin/companies">Companies</Link> </li>
                  <li> <Link to="/admin/jobs">Jobs</Link> </li>
                </>
              ) : (
                <>
                  <li> <Link to="/">Home</Link> </li>
                  <li> <Link to="jobs/">Jobs</Link> </li>
                  <li> <Link to="/browse">Browse</Link> </li>
                </>
              )
            }
          </ul>
          {!user ? (
            <div className="flex gap-2 mt-2 item-center">
              <Link to="/login">
                <Button variant="outline">LogIn</Button>
              </Link>
              <Link to="signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                  SignUp
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="w-10 h-10 cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                    className="rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent
                className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg w-80"
                sideOffset={8}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12 cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                      className="rounded-full"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-gray-500">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {
                    user && user.role === 'student' && (
                      <Button
                        variant="link"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <User2 className="w-5 h-5" />
                        <Link to="/profile"> View Profile</Link>
                      </Button>
                    )
                  }


                  <Button
                    onClick={logOutHandler}
                    variant="link"
                    className="flex items-center gap-2 text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <LogOut className="w-5 h-5" />
                    LogOut
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
