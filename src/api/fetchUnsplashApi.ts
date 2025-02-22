export const fetchUnsplashApi = async (params) => {
   const { query, page } = params;
   const response = await fetch(
      `https://api.unsplash.com/search/photos?client_id=Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs&query=${query}&page=${page}`
   );
   const jsonResponse = await response.json();
   if (response.ok) return jsonResponse;
   else throw new Error("error");
};

export const fetchPhotosThunk = async ({ query, page, firstLoad }) => {
   const allResults = [];
   let nextPage = page;
   if (firstLoad) {
      // Загружаем первые 5 страниц
      for (let i = 1; i <= 5; i++) {
         const response = await fetchUnsplashApi({ query, page: i });
         allResults.push(
            response.results.map((photo) => {
               return {
                  full: photo?.urls?.full,
                  thumb: photo?.urls?.thumb,
               };
            })
         );
      }
      nextPage = 6;
   } else {
      // Загружаем 1 страницу
      const response = await fetchUnsplashApi({ query, page });
      allResults.push(
         response.results.map((photo) => {
            return {
               full: photo?.urls?.full,
               thumb: photo?.urls?.thumb,
            };
         })
      );
      nextPage = page + 1;
   }
   return { photos: allResults, firstLoad: false, newPage: nextPage };
};
