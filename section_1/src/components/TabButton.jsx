export default function TabButton({ children, onSelect, isSelected }) {
  console.log(isSelected);
  function handleClick() {}
  return (
    <li>
      <button
        onClick={onSelect}
        className={`py-2 px-4 border-none rounded-md bg-transparent text-[#a18aba] font-roboto-condensed text-base cursor-pointer transition-all duration-200 ease-in-out ${
          isSelected
            ? "bg-[#7925d3] text-[#ebe7ef]"
            : "hover:bg-[#1b082f] hover:text-[#ebe7ef] active:bg-[#7925d3] active:text-[#ebe7ef]"
        }`}
      >
        {children}
      </button>
    </li>
  );
}
