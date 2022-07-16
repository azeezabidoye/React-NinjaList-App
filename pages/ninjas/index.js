import Link from 'next/link';

const getStaticProps = async ()  => {    
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            data: data
        }
    }
}

const Ninjas = (props) => {
    return ( <div>
        <h1>Ninjas Profile</h1>
        {props.data.map(dataEl => (
            <Link href={`/ninjas/${dataEl.id}`} key={dataEl.id}>
                <a>
                    <h3>{dataEl.name}</h3>
                </a>
            </Link>
        ))}
    </div> );
}
 
export {
    Ninjas as default,
    getStaticProps
}