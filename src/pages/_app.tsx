import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Script from "next/script";
import { env } from "~/env.mjs";
import AppLayout from "~/components/layout/app-layout";

const clairtyCode = `
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${env.NEXT_PUBLIC_CLARITY_API_KEY}");
`;

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      {!env.NEXT_PUBLIC_IS_DEV && env.NEXT_PUBLIC_CLARITY_API_KEY ? (
        <Script id="ms-clarity" strategy="afterInteractive">
          {clairtyCode}
        </Script>
      ) : undefined}
      <SessionProvider session={session}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
