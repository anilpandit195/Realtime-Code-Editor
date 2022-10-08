import React from 'react'

const Home = () => {
    return (
        <div className='homepageback'>
            <div className='homepageform'>
                <img className="homepagelogo" src="/code-sync.png" alt="cpde-sync-logo" />
                <h4 className="heading">Paste invitation ROOM ID</h4>
                <div className="inputgroup">
                    <input type="text" className="input" placeholder="Enter Room ID" />
                    <input type="text" className="input" placeholder="Enter Your Name" />
                    <button className="btn joinbtn">Join Room</button>
                    <span className="creatinfo">
                        If you don't have a room ID, Create a &nbsp;
                        <a href="" className="newroom" >new room</a>
                    </span>
                </div>
            </div>
            <footer className="footer">
                <h4>Build by 😊 &nbsp; {''}
                    <a href="anilpandit" >Anilpandit195</a>
                </h4>

            </footer>
        </div>
    )
}

export default Home;