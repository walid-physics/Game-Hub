import { useEffect, useState } from "react";
import apiClientGame from "../services/api-client-game";
import { CanceledError } from "axios";

  export interface Game {
    id: number;
    name: string;
      background_image: string;
  }

  interface Response {
    count: number;
    results: Game[];
  }

const useGames = () => {
    
 const [games, setGames] = useState<Game[]>([]);
 const [error, setError] = useState("");

    
   
    
    useEffect(() => {
        const controller = new AbortController();

        apiClientGame
        .get<Response>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
            .catch((e) => {
                if (e instanceof CanceledError)
                    return;
                setError(e.message);
            });

        return () => controller.abort();
        
    }, []);


    return {games, error};

}

export default useGames;