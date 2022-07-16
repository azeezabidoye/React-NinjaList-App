import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
    return ( <div>
        <nav>
            <Image src="/lion-logo-png.png" width={100} height={120} />

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninjas Page</a></Link>
        </nav>
    </div> );
}
 
export default Navigation;