import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai"],
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
    },
    {
        filterType: "Salary",
        array: ["0-40K", "1-2LPA", "3-4LPA", "5-7LPA", "9-10LPA"],
    },
];

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    };

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue]);

    return (
        <div className="p-5 bg-white rounded-lg shadow-md">
            <h1 className="mb-4 text-xl font-bold">Filter Jobs</h1>
            <hr className="mb-4" />
            <RadioGroup value={selectedValue} onValueChange={changeHandler} className="space-y-6">
                {filterData.map((data, index) => (
                    <div key={index}>
                        <h2 className="mb-2 text-lg font-bold">{data.filterType}</h2>
                        <div className="space-y-2">
                            {data.array.map((item, idx) => (
                                <div key={idx} className="flex items-center my-2 space-x-2">
                                    <RadioGroupItem
                                        id={`${data.filterType}-${item}`}
                                        value={item}
                                        className="w-4 h-4 border-2 border-gray-300 rounded-full checked:bg-blue-600"
                                    />
                                    <Label
                                        htmlFor={`${data.filterType}-${item}`}
                                        className="text-sm text-gray-700"
                                    >
                                        {item}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};

export default FilterCard;
