import TextField from '@material-ui/core/TextField'

const Search = ({searchTerm, setSearchTerm})=> {

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }


    return (
        <TextField id="search" label="Search" variant="outlined" value={searchTerm} onChange={handleSearch}/>
    )
}
 export default Search;
