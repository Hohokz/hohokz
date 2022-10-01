import "./everyday.css"
import Header from "./header";
import { Helmet } from 'react-helmet';
import Athing from "./athing";

function Everyday() {
    return (
        <>
            <Header />
            <Helmet>
                <title>HOHOKZ | My EVERYDAY</title>
            </Helmet>
            <Athing/>
        </>
    )
}

export default Everyday;