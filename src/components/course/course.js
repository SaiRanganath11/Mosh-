import data from './data'
import './course.css'

const Courses = () =>{
    
    return <div className = 'main'>
        
        {
            data.map((each)=>{
                const { img , cname , cdesc} = each
                return(
                    <div className = 'outer'>
                        <img src={img} alt=""/>
                        <div className = 'inner'>
                          <h2>{cname}</h2>
                          <p>{cdesc}</p>
                          <div className = 'spa'>
                              <span>35 Course Bundle</span>
                          </div>
                        </div>

                    </div>
                )
            })
        }
        
    </div>
}
export default Courses