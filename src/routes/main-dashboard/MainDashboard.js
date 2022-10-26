import "./mainDashboard.css"

const MainDashboard = ({ user }) => {
    return (
        <div className="home">

            <div className="header">
                <div>
                    <h1>Hello {user},</h1>
                    <p>Take a look at your current balance</p>
                </div>
            </div>
        </div>
    )
}

export default MainDashboard
