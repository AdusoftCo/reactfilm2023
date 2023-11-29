


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



/*const TMDB_API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
  language: "en-EN",
});
console.log(import.meta.env.VITE_APP_TMDB_API_KEY);*/



/*const { logout } = useAuth();
 
const getUser = async () => {
    alert('Hola');
  };
  <AppButton 
      style={{
        background: "red",
        color: "white",
      }}
      onClick={getUser}>Show Message!</AppButton>
    <button onClick={logout}>Cerrar Sessión</button>
    
  </div>*/
