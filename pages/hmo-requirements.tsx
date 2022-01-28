import Image from 'next/image';
import requirements from '../public/assets/images/requirements.png';

const HmoRequirements: React.FC = () => {
  return (
    <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto'>
        <div className='mt-10 space-y-4'>
          <Image src={requirements} alt='requirements' />
        </div>
      </div>
    </div>
  );
};

export default HmoRequirements;
