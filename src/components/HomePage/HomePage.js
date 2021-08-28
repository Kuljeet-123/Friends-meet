import './HomePage.scss';
import Header from '../UI/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faVideo } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h2>Premium video meetings. Now free for everyone.</h2>
                        <p>We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.</p>
                        <div className="action-btn">
                            <button className="btn green">
                                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                                New Meeting
                            </button>
                            <div className="input-block">
                            <div className="input-section">
                                <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                                <input placeholder="Enter a code or link" />
                            </div>
                            <button className="btn no-bg">Join</button>
                        </div>
                        </div>
                    </div>
                    <div className="help-text">
                        <a href="#">Learn more</a> about Google Meet
                    </div>
                </div>
                <div className="right-side">
                    <div className="content">
                        <img src="https://cdn.vox-cdn.com/thumbor/01PXfCQWCsQxBmJUaRZOTovWYDY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19917601/Google_Meet_1.max_2000x2000.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;