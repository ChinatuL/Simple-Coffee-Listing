import { useEffect, useState } from "react";
import bgImage from "./assets/images/bg-cafe.jpg";
import { CoffeeList, Header, BtnContainer, Loader } from "./components";
const url =
    " https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

function App() {
    const [coffees, setCoffees] = useState([]);
    const [category, setCategory] = useState("all");
    const [isLoading, setIsLoading] = useState(true);

    const getCoffees = async () => {
        try {
            const response = await fetch(url);
            const coffees = await response.json();
            setCoffees(coffees);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCategory = (category) => {
        setCategory(category);
    };

    const filterCoffees = (category) => {
        category === "all"
            ? getCoffees()
            : setCoffees(coffees.filter((coffee) => coffee.available));
    };

    useEffect(() => {
        getCoffees();
    }, []);
  

    return (
        <div
            className='flex flex-col justify-center w-full bg-no-repeat  bg-top bg-[length:100%_18rem] bg-[#111315]'
            style={{ backgroundImage: `url("${bgImage}")` }}
        >
            <main className='flex flex-col justify-center w-[80%] xl:w-[90%] mx-auto my-24 bg-[#1B1D1F] py-16 px-16 lg:px-20 text-[#FEF7EE] font-sans rounded-xl'>
                <Header />
                <BtnContainer
                    category={category}
                    handleCategory={handleCategory}
                    filterCoffees={filterCoffees}
                />
                {isLoading ? <Loader /> : <CoffeeList coffees={coffees} />}
            </main>
        </div>
    );
}

export default App;
