import { GetServerSideProps } from 'next'
import { TvShow } from '../src/types'


export default function Home({ shows }: TvShowsProp) {
  console.log(shows[0])

  return (
    <div className="flex h-screen bg-blue-50">
      <div className="mx-auto">
        <h1 className="text-3xl text-gray-500 font-bold p-6 text-center">Tv-Library</h1>
        <form>
          <label htmlFor="sök" style={{visibility: 'hidden'}}>Sök:</label>
          <input id="sök" type="text" className="shadow-sm px-3 py-2 rounded-l-lg border border-gray-300" placeholder="Text"></input>
          <button type="button" className="shadow-lg uppercase font-semibold rounded-r-lg border border-blue-600 px-3 py-2 bg-blue-600 text-white">
            Sök
          </button>
        </form>
      </div>
    </div>
  )
}

export interface TvShowsProp {
  shows: TvShow[]
}

export const getServerSideProps: GetServerSideProps<TvShowsProp> = async() => {
  const res = await fetch("https://api.tvmaze.com/shows")
  const shows: TvShow[] = await res.json()

  return { props: { shows } }
}
