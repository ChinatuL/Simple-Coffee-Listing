const Button = ({ text, onClick, category, children }) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={`font-semibold py-2 px-4 rounded-md ${
                category === text ? " bg-[#6F757C]" : null
            } `}
        >
            {children}
        </button>
    );
};
export default Button;
