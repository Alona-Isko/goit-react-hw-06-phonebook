// import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import * as actions from "../../redux/contacts/contacts-actions";
import s from './Filter.module.css';

const Filter = () => {
    const value = useSelector(getFilter);

    const dispatch = useDispatch()
    

    return (
        <label className={s.Filter__text}>
            Find contacts by name
            <input
                type="text"
                className={s.Filter__input}
                value={value}
                onChange={ev => dispatch(actions.changeFilter(ev.currentTarget.value))}
            />
        </label>
    )
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;



// const mapStateToProps = (state) => ({
//     value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//     onChange: (ev) => dispatch(changeFilter(ev.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);