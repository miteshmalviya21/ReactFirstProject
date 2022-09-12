export default function EvenOdd(props)
{
    let num = props.num1;
     if((num)%2 === 0){
            return(<div>{num} is Even number</div>)
        }
        else{
            return(<div>{num} is Odd number</div>)
        }
}