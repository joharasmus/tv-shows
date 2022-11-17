
export default function Home() {
  return (
    <div className="flex h-screen bg-blue-50">
      <div className="mx-auto">
        <h1 className="text-3xl text-gray-500 font-bold p-6 text-center">Tv-Library</h1>
        <form>
          <input type="text" className="shadow-sm px-3 py-1 rounded-l-lg border border-gray-300" placeholder="Text"></input>
          <button type="button" className="shadow-lg uppercase font-semibold rounded-r-lg border border-blue-600 px-6 py-1 bg-blue-600 text-white">
            Sök
          </button>
        </form>
      </div>
    </div>
  )
}
