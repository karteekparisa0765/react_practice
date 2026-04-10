import React from "react";
import Navbar from "../components/landing_page_components/navbar.jsx";
import Body from "../components/landing_page_components/body.jsx";
import Card from "../components/landing_page_components/card.jsx";

const App = () => {
  const Content = [
    {
      title: "AI site builder",
      data: "Quickly generate a custom website",
      image:
        "https://plus.unsplash.com/premium_photo-1770771816678-e3c201a2fc07?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Template",
      data: "Starts with a design that fits your needs",
      image:
        "https://plus.unsplash.com/premium_photo-1661375427386-64ac35086427?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Blank Site",
      data: "Build a custom site from scratch",
      image:
        "https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?w=600&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <>
      <div className="h-screen overflow-hidden">
        <Navbar />
        <Body Content={Content} />
      </div>
    </>
  );
};

export default App;
