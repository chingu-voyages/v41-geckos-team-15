import './profileDashboard.css'

const ProfileDashboard = () => {
    return (
        <main className="profile-dashboard">
            <article className="profile">
                <h2>Profile</h2>
                <ul>
                    <li>
                        <h3>Email</h3>
                        <p>someemail@mail.com
                        </p>
                        <button>Edit</button>
                    </li>
                    <li>
                        <h3>Password</h3>
                        <p>*********************
                        </p>
                        <button>Edit</button>
                    </li>
                    <li>
                        <h3>Language</h3>
                        <p>English (US)
                        </p>
                        <button>Edit</button>
                    </li>
                    <li>
                        <h3>Currency</h3>
                        <p>USD
                        </p>
                        <button>Edit</button>
                    </li>
                    <li>
                        <h3>Subscribtion</h3>
                        <p>Basic
                        </p>
                        <button>Edit</button>
                    </li>
                </ul>
                <section className='profile-buttons'>
                    <button>Deactivate account</button>
                    <button>Delete account</button>
                </section>
            </article>
        </main>
    )
}

export default ProfileDashboard;