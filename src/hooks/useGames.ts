import { useEffect, useState } from "react";
import apiClientGame from "../services/api-client-game";
import { CanceledError } from "axios";

    export interface Platform {
        slug: string;
        name: string;
        id : string
    }
    export interface Game {
      id: number;
      name: string;
      background_image: string;
      parent_platforms: { platform: Platform }[];
      metacritic: number;
    }

    interface Response {
        count: number;
        results: Game[];
    }

const useGames = () => {
    
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);

    
   
    
    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();

        apiClientGame
        .get<Response>("/games", {signal: controller.signal})
            .then((res) => { setGames(res.data.results);  setLoading(false)})
            .catch((e) => {
                if (e instanceof CanceledError)
                    return;
                setError(e.message);
            });

        return () => controller.abort();
        
    }, []);


    return {games, error, isLoading};

}

export default useGames;