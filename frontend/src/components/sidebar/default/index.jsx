import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiPlusSquare } from 'react-icons/fi';
import IFSolvelogo from '../../../images/IFSolve-logo.svg';

export default function SidebarDefault({ children }) {
    return (
        <div
            id="Sidebar"
            className="hidden md:flex flex-col items-start bg-white basis-2/12 h-screen px-4 pt-5 pb-8"
        >
            <img className="h-6 mb-10" src={IFSolvelogo} alt="" />
            <div className="flex flex-col gap-4 w-full h-full">
                <Link
                    to="/"
                    className="flex flex-row items-center gap-2 px-4 py-2 rounded-lg bg-primary-60 hover:bg-primary-80 active:bg-primary-100 focus:bg-primary-100"
                >
                    <FiPlusSquare />
                    Elaborar
                </Link>
                {children}
            </div>
        </div>
    );
}

SidebarDefault.propTypes = {
    children: PropTypes.node.isRequired,
};
