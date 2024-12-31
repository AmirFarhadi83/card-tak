import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import OffersSection from "@/components/Offers";
import { Box } from "@mui/material";

function page() {
  return (
    <>
      <Box sx={{ position: "fixed", zIndex: 500, userSelect: "none" }}>
        <Navbar />
      </Box>
      <Box sx={{ mt: { xs: "60px", sm: "120px" }, userSelect: "none" }}>
        <Banner />
      </Box>
      <OffersSection />
    </>
  );
}

export default page;
