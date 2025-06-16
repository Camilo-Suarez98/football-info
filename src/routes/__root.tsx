import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex justify-center gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/search-team-by-name" className="[&.active]:font-bold">
          Teams by Name
        </Link>
        <Link to="/search-teams-by-country" className="[&.active]:font-bold">
          Teams by Country
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
