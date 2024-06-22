import { Link, Outlet } from "react-router-dom";

function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}

export const rootLoader = () => {
  return null;
};

export function Root() {
  return (
    <Layout>
      <h1>Pending Navigation</h1>
      <Link to="/booking">Go to booking page</Link>
      <Outlet />
    </Layout>
  );
}
