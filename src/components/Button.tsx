interface ButtonProps {
  label: string;
  iconUrl: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
}

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}: ButtonProps) => (
  <button
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
  ${
    backgroundColor
      ? `${backgroundColor} ${textColor} ${borderColor}`
      : 'bg-coral-red text-white border-coral-red'
  } rounded-full ${fullWidth && 'w-full'}
  `}
  >
    {label}{' '}
    {iconUrl && (
      <img
        src={iconUrl}
        alt='button icon'
        className='ml-2 rounded-full w-5 h-5'
      />
    )}
  </button>
);
export default Button;
