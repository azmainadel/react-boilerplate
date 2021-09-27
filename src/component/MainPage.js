import React, {useState} from "react";
import FirstSection from "./sections/FirstSection";
import ContactSection from "./sections/ContactSection";

const MainPage = () => {
    const [refToTrySection, setRefToTrySection] = useState(false);

    return (
        <div>
            <FirstSection setRefToTrySection={setRefToTrySection}/>
            <ContactSection/>
        </div>
    );
}

export default MainPage;