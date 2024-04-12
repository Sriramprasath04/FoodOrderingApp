import {useRouteError} from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <>
            <h1>Oops!!</h1>
            <h1>Something went wrong!</h1>
            <h2>{err.status} : {err.statusText}</h2>
            <p>{err.error.stack}</p>
        </>
    );
}

export default Error;