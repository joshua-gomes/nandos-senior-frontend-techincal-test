interface DismissIconProps {
  className?: string;
}

const DismissIcon = ({ className }: DismissIconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.4 1.20857L11.1915 0L6.40002 4.79143L1.6086 0L0.400024 1.20857L5.19145 6L0.400024 10.7914L1.6086 12L6.40002 7.20857L11.1915 12L12.4 10.7914L7.6086 6L12.4 1.20857Z"
        fill="inherit"
      />
    </svg>
  );
};

export default DismissIcon;
