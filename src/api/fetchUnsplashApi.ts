import { baseUrl } from "./baseUrl";

import { Photos, Response } from "../shared/types";

type fetchUnsplashApiProps = {
   query: string;
   page: number;
   firstLoad: boolean;
};

// Функция для выполнения запроса к Unsplash API
const fetchUnsplashData = async (query: string, page: number): Promise<Photos> => {
   const response = await fetch(`${baseUrl}&query=${query}&page=${page}`);

   if (!response.ok) throw new Error("Ошибка запроса к API");

   const jsonResponse: Response = await response.json();
   return jsonResponse.results.map((photo) => ({
      full: photo.urls.full,
      thumb: photo.urls.thumb,
   }));
};

// Основная функция с логикой загрузки нескольких страниц
export const fetchUnsplashApi = async ({
   query,
   page,
   firstLoad,
}: fetchUnsplashApiProps): Promise<{ photos: Photos[]; firstLoad: boolean; newPage: number }> => {
   const allResults: Photos[] = [];
   let nextPage = page;
   const totalPages = firstLoad ? 5 : 1;

   for (let i = 0; i < totalPages; i++) {
      const photos = await fetchUnsplashData(query, nextPage);
      allResults.push(photos);
      nextPage++;
   }

   return { photos: allResults, firstLoad: false, newPage: nextPage };
};
