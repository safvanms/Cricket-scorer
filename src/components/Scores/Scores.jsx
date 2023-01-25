import React, { useState } from 'react'
import { useEffect } from 'react'
import './Scores.css'

export default function Scores() {
  const [count, setCount] = useState(0)
  const [wicket, setWicket] = useState(0)
  const [over, setOver] = useState(0)
  const [ball, setBall] = useState(0)
  const [crr, setCrr] = useState(0.0)
  const [disabled, setDisabled] = useState(false)
  const [thisOver, setThisOver] = useState([])
  const [lastOver, setLastOver] = useState([])
  const [ballLength, setBallLength] = useState(6)



  useEffect(() => {
    function rr() {
      setCrr(count / over)
    }
    rr()
  }, [count, over])



  const addScore = (score) => {
    if (thisOver.length === ballLength) {
      setThisOver([]);
    } else if (thisOver.length < ballLength) {
      setThisOver([...thisOver, score])
	}
  }


  useEffect(() => {
    function clearAll() {
      if (over) {
        setThisOver([])
		setLastOver([thisOver])
      }
    }
    clearAll()
  }, [over])

  console.log(lastOver)


  const increaseBallLength = () => {
    setBallLength(ballLength + 1)
  }

  function dots() {
    setBall((prevBall) => prevBall + 1)
    if (ball === 5) {
      setBall(0)
      setOver((prevCount) => prevCount + 1)
    }
    addScore(0)
  }

  function ones() {
    setCount((prevCount) => prevCount + 1)
    setBall((prevBall) => prevBall + 1)
    if (ball === 5) {
      setBall(0)
      setOver((prevCount) => prevCount + 1)
    }
    addScore(1)
  }

  function twos() {
    setCount((prevCount) => prevCount + 2)
    setBall((prevBall) => prevBall + 1)
    if (ball === 5) {
      setBall(0)
      setOver((prevCount) => prevCount + 1)
    }
    addScore(2)
  }

  function threes() {
    setCount((prevCount) => prevCount + 3)
    addScore(3)
    setBall((prevBall) => prevBall + 1)
    if (ball === 5) {
      setBall(0)
      setOver((prevCount) => prevCount + 1)
    }
  }
  function fours() {
    addScore(4)
    setCount((prevCount) => prevCount + 4)
    setBall((prevBall) => prevBall + 1)
    if (ball === 5) {
      setBall(0)
      setOver((prevCount) => prevCount + 1)
    }
  }

  //   function fives() {
  //     setCount((prevCount) => prevCount + 5)
  //   }

  function sixes() {
    addScore(6)
    setCount((prevCount) => prevCount + 6)
    setBall((prevBall) => prevBall + 1)
    if (ball === 5) {
      setBall(0)
      setOver((prevCount) => prevCount + 1)
    }
  }

  function wide() {
    addScore('wd')
    increaseBallLength()
    setCount((prevCount) => prevCount + 1)
  }

  function noBall() {
    addScore('nb')
    increaseBallLength()
    setCount((prevCount) => prevCount + 1)
  }

  function wickets() {
    addScore('W')
    if (wicket >= 9) {
      setDisabled(true)
    }
    setWicket((prevWicket) => prevWicket + 1)
    setBall((prevBall) => prevBall + 1)
    if (ball === 5) {
      setBall(0)
      setOver((prevCount) => prevCount + 1)
    }
  }

  return (
    <>
      <div className="score-box">
        <div className="score-board">
          {/* <h3>IND &nbsp;</h3> */}
             <h1>{count}/{wicket}</h1>
          
        </div>
      </div>

      <div className="score-box">
        <div className="overs-section">
          <p>
            Overs : {over}.{ball}
          </p>
          <p className="rr">CRR : {crr}</p>
        </div>
      </div>

<div className='lastOver'>
	<div className="this-over">
        <h4>This Over : </h4>
        <h4> {thisOver}</h4>
      </div>
	  <h4 className='last-over'>Last Over : {lastOver}</h4>

</div>
      
	  

      <div className="end-innings">{disabled ? <h3>Innings end </h3> : ''}</div>

      <div className="btns">
        <button
          disabled={disabled}
          className={disabled ? 'disabled' : 'dots'}
          onClick={dots}
        >
          0
        </button>

        <button
          disabled={disabled}
          className={disabled ? 'disabled' : 'one'}
          onClick={ones}
        >
          1
        </button>

        <button
          disabled={disabled}
          className={disabled ? 'disabled' : 'twos'}
          onClick={twos}
        >
          2
        </button>

        <button
          disabled={disabled}
          className={disabled ? 'disabled' : 'threes'}
          onClick={threes}
        >
          3
        </button>

        <button
          disabled={disabled}
          className={disabled ? 'disabled' : 'fours'}
          onClick={fours}
        >
          4
        </button>

        {/* <button className="fives" onClick={fives}>
          5
        </button> */}

        <button
          disabled={disabled}
          className={disabled ? 'disabled' : 'sixes'}
          onClick={sixes}
        >
          6
        </button>

        <button
          disabled={disabled}
          className={disabled ? 'disabled' : 'wide'}
          onClick={wide}
        >
          wd
        </button>

        <button
          disabled={disabled}
          className={disabled ? 'disabled' : 'noBall'}
          onClick={noBall}
        >
          nb
        </button>

        <button
          className={disabled ? 'disabled' : 'wickets'}
          disabled={disabled}
          onClick={wickets}
        >
          W
        </button>
      </div>
    </>
  )
}
