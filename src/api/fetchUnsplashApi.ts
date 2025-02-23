import { Photos, Response } from "../shared/types";

type fetchUnsplashApiProps = {
   query: string;
   page: number;
   firstLoad: boolean;
};

export const fetchUnsplashApi = async ({
   query,
   page,
   firstLoad,
}: fetchUnsplashApiProps): Promise<{ photos: Photos[]; firstLoad: boolean; newPage: number }> => {
   const allResults: Photos[] = [];
   let nextPage = page;
   const totalPages = firstLoad ? 5 : 1;

   for (let i = 0; i < totalPages; i++) {
      const response = await fetch(
         `https://api.unsplash.com/search/photos?client_id=Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs&query=${query}&page=${nextPage}`
      );
      const jsonResponse: Response = await response.json();

      if (!response.ok) throw new Error("error");

      allResults.push(
         jsonResponse.results.map((photo) => ({
            full: photo.urls.full,
            thumb: photo.urls.thumb,
         }))
      );

      nextPage++;
   }

   return { photos: allResults, firstLoad: false, newPage: nextPage };
};
