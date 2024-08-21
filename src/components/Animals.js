import React, {useState, useEffect} from "react";

function Animals()
{
    const [animalData, setAnimalData] = useState([]);
    useEffect( ()=>{
        const getAnimalData= async()=>{
            const reqData= await fetch("http://localhost/api/animal.php");
            const resData= await reqData.json();
            console.log(resData);
            setAnimalData(resData);
        }
        getAnimalData();

        },[]  );

    return(
        <React.Fragment>
            <h5>Animals</h5>
            <table>
                <tbody>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Race</td>
                </tr>

                <tr>
                    <td> = $animal ['id']   </td>
                    <td> = $animal ['name']   </td>
                    <td> = $animal ['race_id']   </td>
                </tr>

                </tbody>
            </table>

        </React.Fragment>

    );
}
export default Animals;