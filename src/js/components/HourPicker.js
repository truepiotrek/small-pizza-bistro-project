/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars
import {BaseWidget} from './BaseWidget.js';
import {utils} from '../utils.js';
import {select, settings} from '../settings.js';

export class HourPicker extends BaseWidget {
  constructor(wrapper){
    super(wrapper, settings.hours.open);
    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.hourPicker.input);
    thisWidget.dom.output = thisWidget.dom.wrapper.querySelector(select.widgets.hourPicker.output);

    thisWidget.initPlugin();

    thisWidget.value = thisWidget.dom.input.value;
    thisWidget.dom.output.innerHTML = utils.numberToHour(thisWidget.value);
  }

  initPlugin(){
    const thisWidget = this;
    rangeSlider.create(thisWidget.dom.input);

    thisWidget.dom.input.addEventListener('input', function(){
  
      thisWidget.value = thisWidget.dom.input.value;
    });
  }

  parseValue(newValue){
    return newValue;
  }

  isValid(){
    return true;
  }

  renderValue(){
    const thisWidget = this;
    thisWidget.dom.output.innerHTML = utils.numberToHour(thisWidget.newValue);
  }
}
