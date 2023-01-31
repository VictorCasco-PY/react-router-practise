import { useParams } from 'react-router-dom';

const Data = () => {
    let { data } = useParams();
    let value = "";

    if (isNaN(data)) {
        value = `The word is: ${data}`;
    } else {
        value = `The number is: ${data}`;
    }
    console.log(value);

    return (
        <div>{value}</div>
    )
}

export default Data;