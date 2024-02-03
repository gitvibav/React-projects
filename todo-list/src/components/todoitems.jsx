import './css/todoitems.css'
import tick from './assets/tick.png'
import cross from './assets/cross.png'
import not_tick from './assets/not_tick.png'


const TodoItems = ({no,display,text}) => {
  return (
    <div className='todoitems'>
      <div className='todoitems-container'>
          <img src={not_tick} alt="" />
          <img src={tick} alt="" />
          <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoitems-cross-icon' src={cross} alt="" />
    </div>
  )
}

export default TodoItems;
