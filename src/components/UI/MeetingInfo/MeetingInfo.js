import {
  faCopy,
  faShieldAlt,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MeetingInfo.scss";

const MeetingInfo = () => {
  return (
    <div className="meeting-info-block">
      <div className="meeting-header">
        <h3>Your meeting's ready</h3>
        <FontAwesomeIcon className="icon" icon={faTimes} />
      </div>
      <button className="add-people-btn">
        <FontAwesomeIcon className="icon" icon={faUser} />
        Add Others
      </button>
      <p className="info-text">
        Or share this meeting link with others you want in the meeting
      </p>
      <div className="meet-link">
        <span>Some random url</span>
        <FontAwesomeIcon className="icon" icon={faCopy} />
      </div>
      <div className="permission-text">
        <FontAwesomeIcon className="icon" icon={faShieldAlt} />
        <p className="small-text">
          People who use this meeting link must get your permission before they
          can join.
        </p>
      </div>
      <p className="small-text">Joined as kuljeetsingh951@gmail.com</p>
    </div>
  );
};

export default MeetingInfo;
