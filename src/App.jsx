import useFetch from "./hooks/useFetch";


function App() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const { data, isLoading, error } = useFetch(url);

  
  if(error) return <h1>Error!</h1>
  if(isLoading) return <h1>Cargando...</h1>
  if(data) return <h1>{data.title}</h1>
}

export default App
