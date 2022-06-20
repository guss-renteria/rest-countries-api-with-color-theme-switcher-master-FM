import './_search.style.scss'

const Search = ({ theme }) => {
  return (
    <div className={ `search-comp ${ theme }` }>
      <div className='icon-search'></div>
      <input type='text' placeholder='Search for a country...' className='in-search' />
    </div>
  )
}

export default Search
