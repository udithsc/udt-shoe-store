interface Service {
  imgURL: string;
  label: string;
  subtext: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({
  service: { imgURL, label, subtext },
}: ServiceCardProps) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl dark:shadow-none dark:bg-dark-card px-10 py-16 transition-colors duration-300'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold dark:text-dark-text'>
        {label}
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray dark:text-dark-muted'>
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
