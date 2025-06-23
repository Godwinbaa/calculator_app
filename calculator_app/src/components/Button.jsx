import { useContext } from "react"
import { CalcContext } from '../context/CalcContext'
const getStyleName = btn =>{
    const className ={
        '=':'equals',
        'x':'opt',
        '-':'opt',
        '+':'opt',
        '/':'opt',
    }
    return className[btn]
}


const Button = ({value}) => {
    const{setCalc} = useContext(CalcContext)
//user cllick comma
    const commaClick = () =>{
        console.log(setCalc);
        
        
    }


    const handleBtnClick = () =>{
        
        const result ={
            '.': commaClick
        }
        return result[value]();

    }



  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button
