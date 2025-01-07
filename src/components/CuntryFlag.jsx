import { useEffect, useState } from "react";


const CuntryCard=({flag,name})=>{
    return(
        <div
            style={{
                height:"200px",
                width:"200px",
                border:"1px solid black",
                borderRadius:"5px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                
                textAlign:"center"

                
            }}
            >
            <img src={flag} alt={name + "flag"}
            style={{
                height:"100px",
                width:"100px"
            }}
            />
            <p2>{name}</p2>
            
        </div>
    )

}
export default function CuntryFlag(){


    const citiesApi=" https://xcountries-backend.azurewebsites.net/all";
   
    const dData=[1,2,3,4,5,6];
    const [data,setData]=useState([]);
    useEffect(()=>{
      const fetchCuntries= async()=>{
        try{
            const response= await fetch(citiesApi);
            const jsonData= await response.json();
            setData(jsonData)
        }catch(error){
            console.error("Error fetching data:",error)
        }
      };
      fetchCuntries();
    },[])
    
    return(
       
            <div
            style={{
                display:"flex",
                flexWrap:"wrap",
                gap:"10px"
            }}
            >
           {data.map((cuntryData)=>(
            <CuntryCard key={cuntryData.abbr} name={cuntryData.name} flag={cuntryData.flag}/>
           ))

           }
            
        </div>
    )
}