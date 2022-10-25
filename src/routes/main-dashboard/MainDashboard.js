const MainDashboard = ({ user }) => {
    return (
        <div>
            {user
                ? <>
                    <h1>Hello {user}, </h1>
                    <h3>take a look at your current balance</h3>
                </>
                : <>
                    You need to Register or log in
                </>

            }
        </div>
    )
}

export default MainDashboard;