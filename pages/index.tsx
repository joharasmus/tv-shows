import { GetServerSideProps } from 'next'
import { TvShow } from '../src/types'
import { FaStar, FaSearch } from 'react-icons/fa'


export function SingleShow({ show }: TvShowProp): JSX.Element {
  return (
    <div className='bg-white m-3 border border-gray-200 shadow-md rounded-lg'>
      <img className='rounded-t-lg' src={show.image.medium}></img>
      <p className='pt-3 pl-3 font-bold text-gray-500 max-w-fit'>{show.name}</p>
      <div className='pb-2 pl-3 flex items-center'>
        <FaStar className='pr-1 fill-yellow-400'></FaStar>
        <p className='text-gray-600'>{show.rating.average}</p>
      </div>
    </div>
    )
}

export interface TvShowProp {
  show: TvShow
}

export interface AllTvShowsProp {
  shows: TvShow[]
}

export default function Home({ shows }: AllTvShowsProp): JSX.Element {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className='w-full bg-slate-800 pl-20 py-3 mb-8'>
        <p className='w-fit font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-400'>TVSL</p>
      </div>
      <div className='flex flex-row'>
        <div className="ml-20 mr-12 mt-6 flex flex-col align-middle">
          <form className='flex'>
            <input id="search" type="text" className="shadow-sm px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-slate-700" placeholder="Search" aria-label='search'></input>
            <button type="button" className="shadow-md rounded-r-lg border border-blue-600 px-3 py-2 bg-blue-600 text-white">
              <FaSearch></FaSearch>
            </button>
          </form>
        </div>
        <div className='grid grid-cols-4 m-3'>
          {shows.slice(0, 50).map(oneShow => <SingleShow show={oneShow}></SingleShow>)}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<AllTvShowsProp> = async() => {
  const res = await fetch("https://api.tvmaze.com/shows")
  const shows: TvShow[] = await res.json()

  return { props: { shows } }
}
