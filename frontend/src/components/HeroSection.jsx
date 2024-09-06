import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const HeroSection = () => {

  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");

  }
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full font-medium bg-gray-100 text-[#F83002]">
          No.1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get your{" "}
          <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          aut dolore quas. Minus natus nulla aperiam nihil adipisci deserunt
          repellat nostrum incidunt doloremque? Obcaecati, eaque enim ipsa dicta
          commodi iure.
        </p>
        <div className="flex w-[80%] sm:w-[60%] md:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find Your Perfect Job"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 border-none outline-none"
          />
          <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38c2]">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
