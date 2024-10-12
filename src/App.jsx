
import Card from "./Components/Card"
import useFetch from "./CustomHooks/useFetch"

function App() {
  const { data, isLoading, isError } = useFetch("https://jsonplaceholder.typicode.com/photos")
  console.log( data);

  if (isLoading)
    return (
      <div className="text-3xl text-white h-[100vh]  flex justify-center items-center  ">
        <div>
          Loading...
        </div>
      </div>
    )
  if (isError)
    return (
      <div className="text-3xl text-white h-[100vh] flex justify-center items-center ">
        <div>
          Error...
        </div>
      </div>
    )

  return (
    <>
      <h2 className="mt-10 mb-4 text-3xl text-center text-purple-600">The Photoes</h2>
      <div className="grid grid-cols-4 gap-2 py-10 px-6">
         {
          data.map(item => (
            <Card
              key = {item.id}
              title = {item.title}
              url = {item.url}
            />
          ))
         }
      </div>
    </>
  )
}

export default App
