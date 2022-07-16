import Head from 'next/head';
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ( {children} ) => {
    return ( <div className="content">
        <Head>
            <title>NetNinja || List</title>
            <meta content=''></meta>
        </Head>
        <Navigation />
        {children}
        <Footer />
    </div> );
}
 
export default Layout;