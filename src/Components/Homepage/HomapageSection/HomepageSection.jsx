import "./HomepageSection.css";
import Glossary from "../../../Data/Glossary";

Glossary

function HomepageSection() {
    return (
        <>
            <h1 className="homepage-title">{Glossary.homepage.homepageTitle}</h1>
        </>
    )
}

export default HomepageSection;