import { useEffect, useState } from "react";
import bgImage from "./assets/images/bg-cafe.jpg";
import CoffeeList from "./components/CoffeeList";
import Header from "./components/Header";
import BtnContainer from "./components/BtnContainer";
const url =
    " https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

function App() {
    const [coffees, setCoffees] = useState([]);
    const [category, setCategory] = useState("all");

    const getCoffees = async () => {
        const response = await fetch(url);
        const coffees = await response.json();
        console.log(coffees);
        setCoffees(coffees);
    };

    useEffect(() => {
        getCoffees();
    }, []);

    return (
        <div
            className='flex flex-col justify-center w-full bg-no-repeat  bg-top bg-[length:100%_15rem] bg-[#111315]'
            style={{ backgroundImage: `url("${bgImage}")` }}
        >
            <main className='flex flex-col justify-center w-[80%] xl:w-[90%] mx-auto my-24 bg-[#1B1D1F] py-16 px-16 lg:px-20 text-[#FEF7EE] font-sans rounded-xl'>
                <Header />
                <BtnContainer />
                <CoffeeList coffees={coffees} />
            </main>
        </div>
    );
}

export default App;
