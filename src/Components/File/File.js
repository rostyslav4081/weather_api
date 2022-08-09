import data from '../Data/city.list.json'
console.log(data);


export default function File() {

    return (

        <div className={"File"}>
            <pre>{JSON.stringify(data,null, 2)}</pre>
        </div>

    );
}

