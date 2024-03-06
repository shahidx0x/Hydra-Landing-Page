import "./App.css";
import Header from "./components/Header/Header";
import { ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Introduction from "./components/Introduction/Introduction";
import AboutHydraVR from "./components/AboutHydraVR/AboutHydraVR";
import BuildWithHydra from "./components/WhyBWH/BuildWithHydra";
import UsedByCompany from "./components/UsedBy/UsedByCompany";
import HowWeBuild from "./components/HowWeBuild/HowWeBuild";
import JoinHydra from "./components/JoinHydra/JoinHydra";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <ParallaxProvider>
        <div className="">
          <div className="bg-svg-left"></div>
          {Array.from({ length: 9 }, (_, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              key={index}
              className={`bg-svg-right-${index + 1}`}
            />
          ))}
        </div>
        <div className="border">
          <Header />
          <Introduction />
          <AboutHydraVR />
          <BuildWithHydra />
          <UsedByCompany />
          <HowWeBuild />
          <JoinHydra />
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default App;
