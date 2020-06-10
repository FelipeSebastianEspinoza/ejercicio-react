import React from "react";

class ExerciseForm extends React.Component {
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
    const { onChange, form } = this.props; //aqui le pasamos el onChange y el form desde exerciseNew
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
                onChange={onChange}
                value={form.title}
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
                onChange={onChange}
                value={form.description}
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
                onChange={onChange}
                value={form.img}
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
                  onChange={onChange}
                  value={form.leftColor}
                />
              </div>
              <div className="col-sm-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="rightColor"
                  name="rightColor"
                  onChange={onChange}
                  value={form.rightColor}
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

export default ExerciseForm;
