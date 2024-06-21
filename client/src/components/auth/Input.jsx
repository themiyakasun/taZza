import PropTypes from 'prop-types';

const Input = ({ name, label, handleChange, type }) => {
  return (
    <div className='text-left mt-4'>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={label}
        onChange={handleChange}
        className='w-full py-3 px-5 mt-2 rounded-[10px] border border-gray-300 outline-none'
      ></input>
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
