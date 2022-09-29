import Header from './header';
import Content from './content';
import { Helmet } from 'react-helmet';

function Homepage() {
    return (
        <>
            <Helmet>
                <title>HOHOKZ </title>
            </Helmet>
            <Header />
            <Content />
        </>
    )
}
export default Homepage;