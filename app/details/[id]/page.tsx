import { useRouter } from "next/router"

interface pageProps {
    searchParams: {id: number}
}

const Movie = ({params, searchParams}: {params: any, searchParams: any}) => {
    return (
        <>
        {JSON.stringify(params)}
        {JSON.stringify(searchParams)}
            <div>Movie details {params.id}</div>
        </>
    )
}

export default Movie
