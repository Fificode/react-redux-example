import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'
import {buyCake} from './redux/cake/cakeAction'

function CakeContainer(props) {
const [number, setNumber] = useState(1)
  return (
    <div className='cake-container'>
        <h1>CAKE SHOP</h1>
        <h2>Number of Cakes - {props.numOfCakes}</h2> 
        <input type="text" name="number" value={number} onChange={e => setNumber(e.target.value)} />
        <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return{
        numOfCakes: state.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return{
        buyCake: (number) => dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)