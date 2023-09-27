import { useRouter } from "next/router";
import React from "react";

export const IndexPage = () => {
  const router = useRouter();
  const { installRedirect } = router.query;
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "4rem",
        backgroundColor: "#F3F5F9",
        flexDirection: windowWidth > 1024 ? "row" : "column",
        padding: 30,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
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
      <div>
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
