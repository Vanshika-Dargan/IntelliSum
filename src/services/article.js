import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const rapidAPIKey=import.meta.env.VITE_API_KEY;
export const apiSlice=createApi({
baseQuery:fetchBaseQuery({
    baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com',
    prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key',rapidAPIKey);
        headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');
        return headers;
    }
}),
endpoints:builder=>({
    getSummary:builder.query({
        query:(params)=>`/summarize?url=${encodeURIComponent(params.articleURL)}&length=3`,
    })
})
})

export const {useLazyGetSummaryQuery}=apiSlice;

