import "./components/styles/contact.css";
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactWrapper">
        <div className="section1">
          <div className="container">
            <h2>Contact Us</h2>
            <br></br>
            <h4><MeetingRoomOutlinedIcon className="icon" />Lets Meet</h4>
            <h5>Sri Balaji Group, Official Colony, Gajuwaka</h5>
            <h5> Vishakapatnam, AndraPradesh, India</h5>
            <br></br>
            <h4><PhoneOutlinedIcon className="icon" />Lets Talk</h4>
            <h5>9394176741</h5>
            <br></br>
            <h4><MailOutlineOutlinedIcon className="icon" />Our Email</h4>
            <h5>sribalajigroup@gmail.com</h5>
            <br></br>
          </div>
        </div>
        <div className="section2">
          <div className="title">Send Us a message</div>
          <div className="form">
            <input type="text" className="input" placeholder="Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="number" className="input" placeholder="Phone no" />
            <textarea type="text" className="input" placeholder="Message" />
          </div>
          <div className="btnCont">
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
