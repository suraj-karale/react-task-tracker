import PropTypes from "prop-types";

const Header = ({ title, showAddTask, onClickShowHideHandler }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <button className="btn btn-primary" onClick={onClickShowHideHandler}>
        {showAddTask ? "Close" : "Add"}
      </button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
