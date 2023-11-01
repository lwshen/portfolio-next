import { Fragment, type ReactNode } from "react";
import HomeHeader from "./home-header";
import HomeFooter from "./home-footer";

export interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <Fragment>
      <HomeHeader />
      <div
        style={{
          lineHeight: "1.4",
          margin: "0 auto",
          padding: "0 40px",
          maxWidth: "820px",
        }}
      >
        {children}
      </div>
      <HomeFooter />
    </Fragment>
  );
}
