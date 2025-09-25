import { Link, NavLink, Outlet } from 'react-router';
import PawFect from '../images/PawFect.svg';
import PawFectLogo from '../images/PawFectLogo.svg';
import dogFooter from '../images/dogFooter.png';
import { useSearch } from '../context/SearchContext';
import '../app.css';


const RootLayout = () => {
    //get search from SearchContext
    const {search, setSearch} = useSearch();

    return(
        <div id='background'>

        {/*HEADER*/}
        <header >
            <section style={{ 
                position: 'relative', 
                zIndex: 2, 
                minWidth: '100px'}}>
            <img src={PawFectLogo} alt="pawfect logo" 
            style={{height: '7rem',
            position: 'absolute', 
            top: '-4.5rem', 
            left: '-1.2rem', 
            zIndex: 3}}/>
            </section>

            <section id='search'>
                <input type="search" 
                placeholder='Search' 
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
            </section>

            <nav style={{ 
                display: 'flex', gap: '15px'}}>

                <NavLink to="/" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> 
                    About</NavLink>
                <NavLink to="/DogsPage" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Dogs</NavLink>
                <NavLink to="/TeamsPage" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    DayCarers</NavLink>
                <NavLink to="/ServicesPage" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Services</NavLink>
                <NavLink to="/ContactPage"
                 className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Contact</NavLink>
            </nav>
        </header>

        {/*MAIN CONTENT*/}
        <main style={{flex: 1, overflowY:'auto'}}>
            <Outlet />
        </main>

        {/*FOOTER*/}
        <section id='dogFooter'>
         <img src={dogFooter} alt="dog drawing" 
         style={{ width: '10%', maxWidth:'20%'}}/>
        </section>

        <footer>
            <section id='logoFooter'>
                <div>
                    <img src={PawFect} alt="pawfect logo text" 
                    style={{ height: '85px', marginBottom: '10px'}}/>
                </div>

            <div style={{ 
                display: 'flex', gap:'80px', 
                flexGrow: 1}}>
                <div>
                    <h2>About us</h2>
                    <nav className='links'>
                <Link to="/TeamsPage">The team</Link>
                <Link to="/CollabsPage">Collaborations</Link>
                </nav>
            </div>

            <div>
                <h2>Explore</h2>
                <nav className='links'>
                <Link to="/DogsPage">The dogs</Link>
                <Link to="/ServicesPage">Information</Link>
                </nav>
            </div>

            <div>
                <h2>Resources</h2>
                <nav className='links'>
                <Link to="/AdvicesPage">Best advices</Link>
                <Link to="/ContactPage">Support</Link>
                </nav>
            </div>
        </div>
     </section>
            
            <section style={{ textAlign:'center', marginTop: '10px'}}>
            <span id='rights'>© 2025 PawFect. All rights reserved.</span>
            </section>
        </footer>
        </div>
    )
}

export default RootLayout;