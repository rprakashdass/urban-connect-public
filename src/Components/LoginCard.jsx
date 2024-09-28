import PropTypes from 'prop-types';

const LoginCard = ({ title, link }) => {
    return (
        <a href={link} aria-label={`Login as ${title}`} className="no-underline">
            <div className="gap-3 bg-blue-500 p-4 flex flex-col items-center rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
                <div className="w-16 h-16">
                    <img src="/favicon.png" alt={`${title} icon`} className="w-full h-full object-contain" />
                </div>
                <h4 className="text-lg font-semibold text-white">{title}</h4>
            </div>
        </a>
    );
};

LoginCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

const LoginSection = () => {
    return (
        <section className="my-8 mx-auto max-w-screen-xl">
            <div className="flex gap-5 justify-center flex-wrap">
                <div className="p-4">
                    <LoginCard title="Department" link="https://urban-connect-employee.onrender.com/" />
                </div>
                <div className="p-4">
                    <LoginCard title="Employee" link="https://d.onrender.com/" />
                </div>
                <div className="p-4">
                    <LoginCard title="Agency" link="https://a.onrender.com/" />
                </div>
            </div>
        </section>
    );
};

export default LoginSection;
