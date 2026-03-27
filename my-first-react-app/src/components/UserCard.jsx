import PropTypes from "prop-types"
const userdata =[{
    Name:"James",
     city :"New York",
     description:"Front-end-developer",
     skills:["Ui/Ux","Front End Development","Html","Css","Javascript","React","Node"],
     online:false,
     profile:"images/james.jpg"},
     {Name: "Priya Sharma",
    city: "Mumbai",
    description: "Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB", "Express", "Javascript", "CSS", "Git"],
    online: true,
    profile: "images/priya.jpg"
    },{
    Name: "bagavath",
    city: "Bangalore",
    description: "UI/UX Designer & Frontend Developer",
    skills: ["Figma", "Adobe XD", "React", "CSS", "Html", "Tailwind", "Javascript"],
    online: true,
    profile: "images/bagavath.jpg"
}
]

function User(props) {
    return <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online? "online" : "offline"}</span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.Name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill, index) =>(
                <li key= {index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
}

export const UserCard = () => {
  return (
    <>
    {userdata.map((user, index) => (
        <User key={index} 
        Name= {user.Name}
        city={user.city}
        description={user.description}
        online ={user.online}
        skills={user.skills}
        profile={user.profile}
         />
    )) }
    </>
  )
}
User.propTypes ={
    Name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    skills :PropTypes.arrayOf(PropTypes.string).isRequired,
    online :PropTypes.bool.isRequired,
}


