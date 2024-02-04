import Button from "./Button";
const BtnContainer = ({ handleCategory, filterCoffees, text, category }) => {
    return (
        <div className='flex justify-center gap-8 pt-4 pb-6'>
            <Button
                text='all'
                category={category}
                onClick={() => {
                    handleCategory("all");
                    filterCoffees("all");
                }}
            >
                All Products
            </Button>
            <Button
                text='available'
                category={category}
                onClick={() => {
                    handleCategory("available");
                    filterCoffees("available");
                }}
            >
                Available Now
            </Button>
        </div>
    );
};
export default BtnContainer;
