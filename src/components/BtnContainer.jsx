import Button from "./Button";
const BtnContainer = () => {
    return (
        <div className='flex justify-center gap-8 pt-4'>
            <Button text='All Products' />
            <Button text='Available Now' />
        </div>
    );
};
export default BtnContainer;
