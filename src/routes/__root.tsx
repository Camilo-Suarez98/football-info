import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex justify-center gap-2">
        <Link to="/" className="[&.active]:font-bold text-[#F1C40F]">
          Home
        </Link>
        <Link to="/search-team-by-name" className="[&.active]:font-bold text-[#F1C40F]">
          Teams by Name
        </Link>
        <Link to="/search-teams-by-country" className="[&.active]:font-bold text-[#F1C40F]">
          Teams by Country
        </Link>
      </div>
      <Outlet />
    </>
  ),
});
