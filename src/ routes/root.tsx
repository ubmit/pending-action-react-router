import { Outlet } from "react-router-dom";

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
      <Outlet />
    </Layout>
  );
}
