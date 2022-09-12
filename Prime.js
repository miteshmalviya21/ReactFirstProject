export default function Prime(props)
{
    let pnum = props.num;
    let count = 0;
    for(var i=1;i<=pnum/2;i++)
    {
        if(pnum%i === 0){
            count++;
        }
    }
    if(count>=2){
        return(<div><h1>The {pnum} is not a prime number</h1></div>)
    }
    else{
        return(<div><h1>The {pnum} is a prime number</h1></div>)
    }
}