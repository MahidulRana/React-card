//const h3 = "I love banana";
//const p1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, autem.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();
//const CurrentHour = date.getHours();
//const currentMinute = date.getMinutes();
 
//  component use for more time use 


function Card(props){
  const {titleText,descText}= props;
  return  <div className = "card">
         <h3 className = "card-title">{titleText}</h3>
         <p className = "card-desc">{descText}</p>
         <p className = "card-footer">{dateName + "/" + monthName + "/" + currentYear}</p>
  </div>

}

export default Card;