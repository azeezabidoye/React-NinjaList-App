import Link from 'next/link';
import { useEffect } from 'react';
import {useRouter} from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    })

    return ( <div>
        <h1>Page not found</h1>
        <p>You will be redirected to<Link href="/"><a>Homepage</a></Link></p>
    </div> );
}
 
export default NotFound;