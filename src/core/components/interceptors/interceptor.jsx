


const jsonPlaceHolderApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 3000,
});


axios.interceptors.request.use(
    async (config) => {

        return config;
    },
    async (error) => {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    async (response) => {
        console.log('ENDPOINT :', response.config.url)
        return response;
    },
    async (error) => {
        return Promise.reject(error);
    }
)
