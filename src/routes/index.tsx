import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className='text-center my-6'>
      <h1 className='mt-4 mb-10 !text-6xl font-black'>Football Teams</h1>
      <p className='text-2xl text-[#CCC]'>This is an application to show different football teams around the world.</p>
      <p className='text-2xl text-[#CCC]'>
        You can search teams by name or you can see the teams from a country and select it to see more information about each one.
      </p>
      <p className='text-2xl text-[#CCC]'>
        Thanks to {''}
        <a
          href='https://www.api-football.com/'
          target='_blank'
          className='text-[#F1C40F]'
        >Fooball Api</a> {' '}
        to provide all the information
      </p>
      <div className='flex justify-center items-center gap-5 mt-4'>
        <Link
          to='/search-teams-by-country'
          className='bg-[#F1C40F] py-2.5 px-6 rounded-2xl !font-bold'
        >
          Search Teams by Country
        </Link>
        <Link
          to='/search-team-by-name'
          className='bg-[#F1C40F] py-2.5 px-6 rounded-2xl !font-bold'
        >
          Search Teams by Country
        </Link>
      </div>
    </div>
  );
};
