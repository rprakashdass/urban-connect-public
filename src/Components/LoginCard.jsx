import PropTypes from 'prop-types';

const LoginCard = ({ title, link }) => {
    return (
        <a href={link} aria-label={`Login as ${title}`} style={{ textDecoration: 'none' }}>
            <div className='gap-3 primary p-4' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className='object-fit-fill'>
                    <img src="/favicon.png" width={60} alt={`${title} icon`} />
                </div>
                <h4>{title}</h4>
            </div>
        </a>
    );
}

LoginCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

const LoginSection = () => {
    const containerStyle = {
        margin: "2% 10%",
    }

    return (
        <section style={containerStyle}>
            <div className="row gap-5 justify-content-center">
                <div className="col-md-3 p-4">
                    <LoginCard
                        title="Department"
                        link="http://localhost:5173/d/login"
                    />
                </div>
                <div className="col-md-3 p-4">
                    <LoginCard
                        title="Employee"
                        link="http://localhost:5174/e/login"
                    />
                </div>
                <div className="col-md-3 p-4">
                    <LoginCard
                        title="Agency"
                        link="http://localhost:5175/a/login"
                    />
                </div>
            </div>
        </section>
    );
}

export default LoginSection;
