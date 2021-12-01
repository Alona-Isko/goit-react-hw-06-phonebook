import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import actions from "../../redux/contacts/contacts-actions";
import s from './Filter.module.css';

const Filter = ({value, onChange}) => (
    <label className={s.Filter__text}>
        Find contacts by name
        <input
            type="text"
            className={s.Filter__input}
            value={value}
            onChange={onChange}
        />
    </label>
);

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
    value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
    onChange: (ev) => dispatch(actions.changeFilter(ev.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);