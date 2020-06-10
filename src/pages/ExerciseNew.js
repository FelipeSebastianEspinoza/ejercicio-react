import React from "react";

class ExerciseNew extends React.Component {
  state = {};
 
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-4 mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="title"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="description"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="img"
                name="img"
                onChange={this.handleChange}
                value={this.state.img}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-sm-2  ml-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="leftColor"
                  name="leftColor"
                  onChange={this.handleChange}
                  value={this.state.leftColor}
                />
              </div>
              <div className="col-sm-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="rightColor"
                  name="rightColor"
                  onChange={this.handleChange}
                  value={this.state.rightColor}
                />
              </div>
            </div>
          </div>

          <div className="col">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default ExerciseNew;
