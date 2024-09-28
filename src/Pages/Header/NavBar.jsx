import React from 'react';
import { Link } from 'react-router-dom';
import emblem from '/favicon.png';

const Navbar = () => {

    return (
        <div className="bg-white p-4 flex position-fixed">
            <div className="flex items-center">
                <img src={emblem} width={70}></img>
                <h1 className="text-white text-xl ml-4">UrbanConnect</h1>
            </div>
            <div className="space-x-4 text-white">
                <ul className="flex flex-row">
                    <li>
                        <Link to="/departments" className="px-4 py-2 text-gray-700 hover:bg-gray-300 transition-colors duration-200 rounded-lg hover:rounded-md" aria-label="Departments"> Departments </Link>
                    </li>
                    <li>
                        <Link to="/employees" className="px-4 py-2 text-gray-700 hover:bg-gray-300 transition-colors duration-200 rounded-lg hover:rounded-md">Employees</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="px-4 py-2 text-gray-700 hover:bg-gray-300 transition-colors duration-200 rounded-lg hover:rounded-md">Projects</Link>
                    </li>
                    <li>
                        <Link to="/resources" className="px-4 py-2 text-gray-700 hover:bg-gray-300 transition-colors duration-200 rounded-lg hover:rounded-md">Resources</Link>
                    </li>
                    <li>
                        <Link to="/reports" className="px-4 py-2 text-gray-700 hover:bg-gray-300 transition-colors duration-200 rounded-lg hover:rounded-md">Reports</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;