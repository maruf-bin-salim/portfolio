import Head from "next/head"; // for SEO
import useMediaQuery from "@/hooks/useMediaQuery";

// import the styles for the desktop and mobile versions
import desktop_styles from "@/styles/HomePage/desktop.styles.module.css";
import mobile_styles from "@/styles/HomePage/mobile.styles.module.css";
import VerticalNavigationBar from "@/components/VericalNavigatiobBar";


// for the desktop version, all the necessary sub-components are written below


function DesktopVersion() {
  return (
    <>
      {/* head tag for SEO */}
      <Head>
        <title>Maruf Bin Salim</title>
        <meta name="home page" content="Home Page" />
      </Head>


      {/* main container for the desktop version */}
      <div className={desktop_styles.main_container}>

        <VerticalNavigationBar />

      </div>


    </>
  );
}

// for the mobile version, all the necessary sub-components are written below

function MobileVersion() {
  return (
    <div>
      Mobile
    </div>
  );
}


// layout for the main page
export default function MainPage() {
  return useMediaQuery("(max-width: 768px)") ? <MobileVersion /> : <DesktopVersion />;
}