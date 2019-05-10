
import { h } from 'hyperapp';
import { bcs, onEmit, onCreate, onRemove, doNothing } from './common';
import VBox from './vbox';
import HBox from './hbox';
import Scrim from './scrim';
import Dialog from './dialog';
import Button from './button';
import Spacer from './spacer';
import Menu from './menu';
import Component from './component';
import Title from './title';
import Divider from './divider';

const ScrimButton = Scrim.Trigger(Button)

const DatePickerPanel = (
    {
      state, 
      actions, 
      catalog = {}, 
      minYear = 1900, 
      maxYear = 2099, 
      onpick = null
    }) => {
  const defaultCatalog = {
    ok: 'OK', 
    cancel: 'Cancel', 
    clear: 'Clear', 
    year: 'Year', 
    month: 'Month', 
    date: 'Date', 
    week: [
      <span class="haw--size-small" style={{color:"#BB2222"}}>Sun</span>, 
      <span class="haw--size-small">Mon</span>, 
      <span class="haw--size-small">Tue</span>, 
      <span class="haw--size-small">Wed</span>, 
      <span class="haw--size-small">Thu</span>, 
      <span class="haw--size-small">Fri</span>, 
      <span class="haw--size-small" style={{color:"#2222BB"}}>Sat</span>
    ]
  }
  catalog = {...defaultCatalog, ...catalog}

  const years = [];
  for (let y = minYear; y <= maxYear; y++) {
    years.push(y);
  }
  const monthes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const dates = []
  const lastDate = (state.year != null && state.month != null) ? getLastDate(state.year, state.month) : 31
  const baseDay = (state.year != null && state.month != null)
    ? (new Date(state.year, state.month, 1)).getDay() 
    : -1
  for (let d = 1; d <= lastDate; d++) {
    dates.push({
      val: d, 
      more: baseDay != -1 ? catalog.week[(baseDay + d - 1) % 7] : null
    })
  }

  return (
    <Scrim id="date-picker" key="date-picker">
      <Dialog size="default" style={{height: "30rem"}}>
        <HBox>
          <Title growable style={{"text-align":"center"}}>{catalog.year}</Title>
          <Title growable style={{"text-align":"center"}}>{catalog.month}</Title>
          <Title growable style={{"text-align":"center"}}>{catalog.date}</Title>
        </HBox>
        <Divider />
        <HBox growable>
          <VBox growable scrollable>
            <Menu>
              {years.map(y => (
                <Menu.Item type="radio" id={"year-"+y} key={y} value={y} name="year" checked={state.year == y} onchange={() => actions.setYear(y)}>{y}</Menu.Item>
              ))}
            </Menu>
          </VBox>
          <VBox growable scrollable>
            <Menu>
              {monthes.map(m => (
                <Menu.Item type="radio" id={"month-"+m} key={m} value={m} name="month" checked={state.month == m} onchange={() => actions.setMonth(m)} disabled={state.year == null}>{m + 1}</Menu.Item>
              ))}
            </Menu>
          </VBox>
          <VBox growable scrollable>
            <Menu>
              {dates.map(({val:d,more}) => (
                <Menu.Item type="radio" id={"date-"+d} key={d} value={d} name="date" checked={state.date == d} onchange={() => actions.setDate(d)} disabled={state.year == null || state.month == null}>{d} {more}</Menu.Item>
              ))}
            </Menu>
          </VBox>
        </HBox>
        <Divider />
        <HBox>
          <ScrimButton shape="open" targetId="date-picker" doDelay onclick={() => onpick({year:null, month:null, date:null})}>{catalog.clear}</ScrimButton>
          <Spacer growable />
          <ScrimButton shape="open" targetId="date-picker" doDelay>{catalog.cancel}</ScrimButton>
          <ScrimButton shape="open" targetId="date-picker" doDelay onclick={() => onpick(state)} coloring="primary">{catalog.ok}</ScrimButton>
        </HBox>
      </Dialog>
    </Scrim>
  )
}

const getLastDate = (year, month) => {
  const d = new Date(year, month + 1, 0);
  return d.getDate();
}

const pad2 = (n) => {
  if (n < 10) return '0' + n;
  else return '' + n;
}

const formatDate = (val) => {
  if (!val) return '';
  const d = new Date(val)
  return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getMonth())
}

const DatePicker = (
    {
      classes = {}, 
      placeholder = "", 
      invalid = false, 
      disabled = false, 
      onpick = null, 
      value = null, 
      show = null, 
      ...others
    }) => (state, actions) => {
  if (show === null) {
    show = formatDate
  }
  var contents = show(value) 
  
  var placeheld = false
  if (contents.length == 0) {
    contents = placeholder
    placeheld = true
  }

  const onclick = () => {
    actions.haw.datepicker.prepare(value)
    window.requestAnimationFrame(() => actions.haw.scrim.push('date-picker'))
  }

  if (! onpick) {
    onpick = doNothing
  }

  return (
    <Component tagName="button" classes={{"haw-date-picker":true, "-placeheld":placeheld, "-invalid":invalid, ...classes}} disabled={disabled} onclick={onEmit(onclick, true, null)} {...others}>
      {contents}
      <span className="caret"></span>
      <DatePickerPanel onpick={onpick} state={state.haw.datepicker} actions={actions.haw.datepicker} />
    </Component>
  )
}



DatePicker.state = {
  year: null, 
  month: null, 
  date: null
}
DatePicker.actions = {
  prepare: (value) => (_state, _actions) => {
    if (value === null) return {year:null, month:null, date:null}
    const date = new Date(value)
    return {year:date.getFullYear(), month:date.getMonth(), date:date.getDate()}
  }, 
  setYear: (y) => (state, _actions) => ({...state, year:y}), 
  setMonth: (m) => (state, _actions) => ({...state, month:m}), 
  setDate: (d) => (state, _actions) => ({...state, date:d})
}
export default DatePicker;