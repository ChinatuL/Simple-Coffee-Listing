import CoffeeCard from "./CoffeeCard";
const CoffeeList = ({ coffees }) => {
    return (
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 mt-4 gap-10 lg:gap-8'>
            {coffees.map((coffee) => {
                return <CoffeeCard key={coffee.id} {...coffee} />;
            })}
        </div>
    );
};
export default CoffeeList;
