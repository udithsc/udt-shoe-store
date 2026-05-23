'use client';

interface ButtonProps {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  onClick,
  disabled,
  type = 'submit',
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
  ${backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : 'bg-coral-red text-white border-coral-red'
      } rounded-full ${fullWidth && 'w-full'} disabled:cursor-not-allowed disabled:opacity-50
  `}
  >
    {label}
    {iconUrl && (
      <img
        src={iconUrl}
        alt='button icon'
        className='ml-2 rounded-full bg-white w-5 h-5'
      />
    )}
  </button>
);
export default Button;
