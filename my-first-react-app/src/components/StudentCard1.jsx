
import PropTypes from 'prop-types'
const userdata =[{
    Name:"James",
     city :"New York",
     description:"Front-end-developer",
     skills:["Ui/Ux","Front End Development","Html","Css","Javascript","React","Node"],
     online:false,
     picture:"images/james.jpg"},
     {Name: "Priya Sharma",
    city: "Mumbai",
    description: "Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB", "Express", "Javascript", "CSS", "Git"],
    online: true,
    picture: "images/priya.jpg"
    },{
    Name: "bagavath",
    city: "Bangalore",
    description: "UI/UX Designer & Frontend Developer",
    skills: ["Figma", "Adobe XD", "React", "CSS", "Html", "Tailwind", "Javascript"],
    online: "true",
    picture: "images/bagavath.jpg"
}
]


import '../css/StudentCard.css'
function User(props){
        return(
          <div className='container'>
            <span className={props.online? "pro online" : "pro offline"}>{props.online? "online":"offline"}</span>
            <div>
            <img src={props.picture} className="picture" alt="" />
           </div>
            <h3>{props.Name}</h3>
            <h3>{props.city}</h3> 
            <h4>{props.description}</h4>  
            <div className='buttons'>
            <button className='message'>Message</button>
            <button className='following'>Following</button>
            </div>      
            <div className='skills'>
              <h6>Skills</h6>
              <ul>
                {props.skills.map((skill,index)=>
                <li key={index}>{skill}</li>
                )}
              </ul>   
            </div>
          </div>

        )
}

export const StudentCard1 = () => {
  return (
    <div className='card-wrapper'>
    {userdata.map((user,index)=>
    (<User key={index}
      Name= {user.Name}
      city={user.city}
      description={user.description}   
      picture={user.picture}
      online={user.online}
      skills={user.skills}
      /> 
    ))}
    </div>
    
  )
}


User.PropTypes={
  Name:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  online:PropTypes.bool.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired


}
