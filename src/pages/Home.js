
const Home = () => {
   
    return(
        <>
            <h2>Popular Movies - Top 20</h2>
            {popularMovies.map(item => {
                return (
                    <h3>{item.title}</h3>
                )
            })}

            <h2>Popular TV Shows - Top 20</h2>
            {popularTvShows.map(item => {
                return (
                    <h3>{item.title}</h3>
                )
            })}
        </>
    )
}

export default Home
