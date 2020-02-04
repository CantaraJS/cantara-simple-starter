interface UseRandomImageOptions {
    /** Url of the API server/serverless endpoint */
    apiUrl: string;
}
export default function useRandomImage({ apiUrl }: UseRandomImageOptions): {
    image: string;
    err: string | undefined;
};
export {};
//# sourceMappingURL=useRandomImage.d.ts.map