export default function TListBoxMobile() {
  return (
    <div className='w-full'>
      <label
        htmlFor='location'
        className='block mb-1.5 text-base font-medium text-gray-700'
      >
        Location
      </label>
      <select
        id='location'
        name='location'
        className='block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-skin-kmc-orange focus:border-skin-kmc-orange sm:text-sm'
        defaultValue='Canada'
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
  );
}
