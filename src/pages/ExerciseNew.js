import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";

class ExerciseNew extends React.Component {
  state = {
    form: {
      title: "",
      description: "",
      img: "",
      leftColor: "#56CCF2",
      rightColor: "#2F80ED",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form, //que mantenga lo que recoge ya que lo sobreescribe
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm">
          <Card {...this.state.form} />
        </div>

        <div className="col-sm">
          <ExerciseForm //aqui mandamos estos valores a exerciseForm
            onChange={this.handleChange} // se manda el onChange
            form={this.state.form} // y se manda el form
          />
        </div>
      </div>
    );
  }
}
export default ExerciseNew;
