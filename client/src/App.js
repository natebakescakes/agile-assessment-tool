import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import json from './questionnaire/questionnaire';

import * as widgets from "surveyjs-widgets";
import axiosInstance from './api';

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class App extends Component {

  componentWillMount() {
    import("icheck");
    window["$"] = window["jQuery"] = $;
  }

  onValueChanged(result) {
    console.log("value changed!");
  }


  onComplete = async (result) => {
    const data = JSON.stringify(result.data);
    try{
      const response = await axiosInstance.post("/api/questions", {data});
      console.log(response);
    }catch(err){
        console.log(err);
    }
  }

  render() {
    Survey.Survey.cssType = "bootstrap";
    const model = new Survey.Model(json);
    return (
      <div className="App">
        <div className="surveyjs">
          <h1>SurveyJS library in action:</h1>
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
        </div>
      </div>
    );
  }
}

export default App;
