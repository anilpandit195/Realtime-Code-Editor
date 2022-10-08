import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const [Roomid, setRoomid] = useState('');
    const [Username, setUsername] = useState('');
    const creatnewroom = (e) => {
        e.preventDefault();
        const id = uuidv4();
        setRoomid(id);

    };
    return (
        <div className='homepageback'>
            <div className='homepageform'>
                <img className="homepagelogo" src="/code-sync.png" alt="cpde-sync-logo" />
                <h4 className="heading">Paste invitation ROOM ID</h4>
                <div className="inputgroup">
                    <input
                        type="text"
                        className="input"
                        placeholder="Enter Room ID"
                        onChange={(e) => setRoomid(e.target.value)}
                        value={Roomid}
                    />
                    <input
                        type="text"
                        className="input"
                        placeholder="Enter Your Name"
                        onChange={(e) => setUsername(e.target.value)}
                        value={Username}
                    />
                    <button className="btn joinbtn">Join Room</button>
                    <span className="creatinfo">
                        If you don't have a room ID, Create a &nbsp;
                        <a onClick={creatnewroom} href="" className="newroom" >new room</a>
                    </span>
                </div>
            </div>
            <footer className="footer">
                <h4>Build by 😊 {''}
                    <a href="https://github.com/anilpandit195" className="linkgit" >Anilpandit195</a>
                </h4>

            </footer>
        </div>
    )
}

export default Home;