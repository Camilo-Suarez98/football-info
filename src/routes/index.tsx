import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className='text-center my-6'>
      <h1 className='mt-4 mb-10 !text-6xl font-black'>Football Teams</h1>
      <p className='text-2xl'>This is an application to show different football teams around the world.</p>
      <p className='text-2xl'>
        You can search teams by name or you can see the teams from a country and select it to see more information about each one.
      </p>
      <p className='text-2xl'>
        Thanks to {''}
        <a href='https://www.api-football.com/' target='_blank'>Fooball Api</a> {' '}
        to provide the information about countries and teams
      </p>
    </div>
  );
};
