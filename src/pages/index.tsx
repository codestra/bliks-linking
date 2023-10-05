import { useRouter } from "next/router";
import React from "react";

export const IndexPage = () => {
  const router = useRouter();
  const { installRedirect, code, vendorId } = router.query;

  React.useEffect(() => {
    if (installRedirect) {
      // @ts-ignore
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      // android
      if (/android/i.test(userAgent)) {
        window.location.replace(
          "https://play.google.com/store/apps/details?id=getbliks.com"
        );
      }
      // ios
      // @ts-ignore
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.replace(
          "https://apps.apple.com/us/app/bliks/id1559236451"
        );
      }
    }
  }, [installRedirect]);

  React.useEffect(() => {
    if (code && vendorId) {
      window.location.replace(
        `${process.env.NEXT_PUBLIC_HOST_APP}?code=${code}&vendorId=${vendorId}`
      );
    }
  }, [code, vendorId]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "4rem",
      }}
      className="container"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: 30,
        }}
      >
        <div>
          <h1 style={{ textAlign: "center", marginTop: "10rem" }}>
            Deine digital
            <br />
            Stempelkarte
          </h1>
          <h2 style={{ textAlign: "center" }}>
            Bequem digital Stempel sammeln und dabei die Umwelt <br /> schonen
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a href="https://play.google.com/store/apps/details?id=getbliks.com">
            <img src="img/play-store.png" alt="img" />
          </a>
          <a href="https://apps.apple.com/us/app/bliks/id1559236451">
            <img src="img/app-store.png" alt="img" />
          </a>
        </div>
      </div>
      <div style={{ margin: 30 }}>
        <img
          src="img/Hero_Customer.png"
          alt="img"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default IndexPage;
