import "./MyCard.css"
const MyCard = ({fullname, location, email, phone, image, position}) => {
    return(
    
        <div className="container">
         <div className="card">
           <div>
            <img src={image} alt="card image"></img>
           </div>
           <div>
          <h3 className="title">{fullname}</h3>
          </div>
          <div>
          <p><i class="fa fa-phone"></i>  {phone}</p>
          <p><i class="fa fa-map-marker"> </i>  {location}</p>``
          <p><i class="fa fa-envelope-open"></i>  {email}</p>
         </div> 
         <div className="position">{position}</div>
         </div>
         
        
        </div>
      
  );
};
export default MyCard
