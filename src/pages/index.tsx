import { Stack, Typography } from "@mui/material";
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
    <Stack
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
      className="container"
      direction={{ xs: "column", md: "row" }}
      sx={{
        minHeight: "100vh",
      }}
    >
      <Stack gap={4} margin={5}>
        <Stack gap={2} mb={10}>
          <Typography
            style={{ textAlign: "center", marginTop: "10rem" }}
            sx={{ typography: { sm: "h1", xs: "h2" } }}
          >
            Deine digital
            <br />
            Stempelkarte
          </Typography>
          <Typography
            style={{ textAlign: "center" }}
            sx={{ typography: { sm: "h4", xs: "h5" } }}
          >
            Bequem digital Stempel sammeln und dabei die Umwelt schonen
          </Typography>
        </Stack>
        <Stack gap={4} direction="row" justifyContent="space-evenly">
          <a href="https://play.google.com/store/apps/details?id=getbliks.com">
            <img
              src="img/play-store.png"
              alt="img"
              style={{
                width: "100%",
                display: "block",
                maxWidth: "100%",
              }}
            />
          </a>
          <a href="https://apps.apple.com/us/app/bliks/id1559236451">
            <img
              src="img/app-store.png"
              alt="img"
              style={{
                width: "100%",
                display: "block",
                maxWidth: "100%",
              }}
            />
          </a>
        </Stack>
      </Stack>
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
    </Stack>
  );
};

export default IndexPage;
