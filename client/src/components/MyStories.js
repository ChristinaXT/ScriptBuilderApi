import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class MyStories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      button: ""
    };

  }

  addFavorite = (e, id) => {
    this.setState({
      button: id
    });
  };

  render() {
    return this.props.stories.map(t => (
      <div className="menu-inner-container">
        <p key={t.id}>
          <Link to={`/stories/${t.id}`}>{t.attributes.title}</Link>
          <button
            key={t.id}
            className={this.state.button===t.id ? "buttonTrue" : "buttonFalse"}
            onClick={(event) => this.addFavorite(event, t.id)}
          >
            Favorite
          </button>
        </p>
      </div>
    ));
  }
}

//refactor - create a button that will allow for us to mark which our favorites are
const mapStateToProps = state => {
  return {
    stories: state.myStories
  };
};

export default connect(mapStateToProps)(MyStories);
