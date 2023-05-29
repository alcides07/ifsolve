import PropTypes from 'prop-types';
import { FiArrowUpRight, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CompareDateTime from '../../../utils/compareDateTime';

export default function AvalicacaoCard({ data }) {
    const { titulo, descricao, data_fim } = data;
    return (
        <Link
            to="/"
            className="group flex flex-col p-4 gap-2 bg-white rounded-lg transition-all duration-600 linear outline outline-0 outline-dark-40 hover:outline-4"
        >
            <div className="flex flex-row justify-between items-center mb-8">
                <span className="text-2xl bg-violet-100 p-2 rounded-lg text-violet-600 ">
                    <FiFileText />
                </span>
                <FiArrowUpRight className="text-4xl stroke-1 text-dark-20 group-hover:text-dark-60" />
            </div>
            <h4 className="text-lg font-medium text-dark-80">{titulo}</h4>
            <p className="text-dark-60">{descricao}</p>
            <span> {CompareDateTime(data_fim)}</span>
        </Link>
    );
}

AvalicacaoCard.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        titulo: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        data_fim: PropTypes.string.isRequired,
    }).isRequired,
};
