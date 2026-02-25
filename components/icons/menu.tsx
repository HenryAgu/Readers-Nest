const MenuIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3 6H21" stroke="#323232" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 12H21" stroke="#323232" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 18H21" stroke="#323232" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default MenuIcon;