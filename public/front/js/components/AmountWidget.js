import {select, settings} from '../settings.js';
import {BaseWidget} from './BaseWidget.js';


export class AmountWidget extends BaseWidget{
  constructor(wrapper){
    super(wrapper, settings.amountWidget.defaultValue);
    const thisWidget = this;
    
    thisWidget.getElement();
    thisWidget.initActions();
  }

  getElement(){
    const thisWidget = this;
    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.amount.input);
    thisWidget.dom.linkDecrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkDecrease);
    thisWidget.dom.linkIncrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkIncrease);
  }

  isValid(newValue){
    console.log(settings.amountWidget.defaultMax);
    return !isNaN(newValue) && newValue >= settings.amountWidget.defaultMin && newValue <= settings.amountWidget.defaultMax;
  }

  initActions(){
    const thisWidget = this;
    thisWidget.dom.input.addEventListener('change', function(){
      thisWidget.value = thisWidget.dom.input.value;
    });
    thisWidget.dom.linkDecrease.addEventListener('click', function(){
      thisWidget.value = parseInt(thisWidget.dom.input.value) - 1;
    });
    thisWidget.dom.linkIncrease.addEventListener('click', function(){
      thisWidget.value = parseInt(thisWidget.dom.input.value) + 1;
    });
  }
}