import { useEffect, useState } from "react"
import apiClientGame from "../services/api-client-game"
import { CanceledError } from "axios"

interface Genre{
    id: number
    name: string
}

interface GenresResponse{
    count: number
    results: Genre[]
}

export const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const controller = new AbortController();
        apiClientGame.get<GenresResponse>('/genres').then((res) => setGenres(res.data.results))
            .catch(e => {
                if(e instanceof CanceledError)
                    return
                setError(e.message);
            });
        return () => controller.abort();
    }
    ,[]);

    return { genres, error, isLoading };

}
