import { Link, Outlet } from 'react-router';
import PawFect from '../images/PawFect.svg';
import PawFectLogo from '../images/FectLogo.svg.svg';
import dogFooter from '../images/dogFooter.png';


const RootLayout = () => {
    return(
        <div style={{ 
            background: 'linear-gradient(to bottom,#357ABD, #ADD8E6)', 
            minHeight: '100vh', height:'100%', width: '100%', paddingTop:'15px'
        }}>
        {/*HEADER*/}
        <header style={{
            backgroundColor: 'white', padding: '12px 25px', display: 'flex', 
            justifyContent: 'space-between', alignItems: 'center', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '50px', position: 'relative' }}>
            <section style={{ position: 'relative', zIndex: 2, minWidth: '100px'}}>
            <img src={PawFectLogo} alt="pawfect logo" style={{height: '110px',
            position: 'absolute', top: '-65px', left: '-10px', zIndex: 3
            }}/>
            <div style={{ height: '0', width: '0', overflow: 'hidden' }}></div>
            </section>
            <section>
                <input type="search" placeholder='Search' style={{
                    padding: '8px 12px',marginRight:'170px', width: '260px', 
                    border: '1px solid #ccc', borderRadius: '20px', outline: 'none', fontSize: '14px'}} />
            </section>

            <nav style={{ display: 'flex', gap: '15px'}}>
                <Link to="/" style={{
                    color: '#000', textDecoration: 'none', padding:'5px 10px',
                    borderRadius: '20px', transition:'background-color 0.3s'
                }} 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#357ABD'}
                onMouseLeave={(e) => e.target.style.backgroundColor= '#ccc'}
                > About</Link>
                <Link to="/DogsPage" style={{color: '#000', textDecoration:'none', padding:'5px 10px'}}>Dogs</Link>
                <Link to="/DayCarePage" style={{color: '#000', textDecoration:'none', padding:'5px 10px'}}>DayCare</Link>
                <Link to="/ServicesPage" style={{color: '#000', textDecoration:'none', padding:'5px 10px'}}>Services</Link>
                <Link to="/ContactPage" style={{color: '#000', textDecoration:'none', padding:'5px 10px'}}>Contact</Link>
            </nav>
        </header>

        {/*MAIN INNEHÅLL*/}
        <main style={{minHeight: '80vh', padding: '20px'}}>
            <Outlet />
        </main>

        {/*FOOTER*/}
        <section style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <img src={dogFooter} alt="dog drawing" style={{ width: '10%', maxWidth:'20%'}}/>
        </section>

        <footer style={{
            backgroundColor:'white', padding: '20px', borderTop:'1.5px solid #ddd',  
            boxShadow: '0 -2px 4px rgba(0,0,0,0.1)', borderRadius: '50px 50px 0 0'}}>
            
            <section style={{ display: 'flex', alignItems: 'flex-start', gap:'100px', padding:'0 10px'}}>
                <div style={{ flexShrink: 0}}>
            <img src={PawFect} alt="pawfect logo text" style={{ height: '85px', marginBottom: '10px'}}/>
                </div>
                <div style={{ display: 'flex', gap:'80px', flexGrow: 1}}>
                    <div>
                <h2 style={{fontWeight: 'bold', fontSize:'12px', textAlign: 'left'}}>About us</h2>
                <section style={{ display: 'flex', flexDirection:'column', gap:'5px', textAlign:'left'}}>
                <Link to="/TeamsPage" style={{color: '#666', textDecoration: 'none', fontSize: '12px'}}>The team</Link>
                <Link to="/CollabsPage" style={{color: '#666', textDecoration: 'none', fontSize: '12px'}}>Collaborations</Link>
            </section>
            </div>

            <div>
                <h2 style={{fontWeight: 'bold', fontSize:'12px', textAlign: 'left'}}>Explore</h2>
                <section style={{ display: 'flex', flexDirection:'column', gap:'5px', textAlign: 'left'}}>
                <Link to="/DogsPage" style={{color: '#666', textDecoration: 'none', fontSize: '12px'}}>The dogs</Link>
                <Link to="/InfoPage" style={{color: '#666', textDecoration: 'none', fontSize: '12px'}}>Information</Link>
            </section>
            </div>

            <div>
                <h2 style={{fontWeight: 'bold', fontSize:'12px', textAlign: 'left'}}>Resources</h2>
                <section style={{ display: 'flex', flexDirection:'column', textAlign: 'left', gap:'5px', marginBottom: '30px'}}>
                <Link to="/AdvicePage" style={{color: '#666', textDecoration: 'none', fontSize: '12px'}}>Best advices</Link>
                <Link to="/ContactPage" style={{color: '#666', textDecoration: 'none', fontSize: '12px'}}>Support</Link>
            </section>
            </div>
            </div>
            </section>
            <section style={{ textAlign:'center', marginTop: '10px'}}>
            <span style={{ color:'#666', fontWeight: 'bold', fontSize:'13px'}}>© 2025 PawFect. All rights reserved.</span>
            </section>
        </footer>
        </div>
    )
}

export default RootLayout;