function Navbar(){
    return(
        <div 
  className='navbar' 
  style ={{height:'90px',background:'darkblue',display:'flex',alignItems:'center'}}>
    <span style = {{ fontSize: '25px',color: 'white'}}>Myntra</span>
   <a href="">Men</a>
   <a href="">Women</a>
   <a href="">Kids</a>
   <a href="">More</a>
   <a href="">Offers</a>
   <input type="text" placeholder="search"/>
  </div>
    )

    
}
export default Navbar