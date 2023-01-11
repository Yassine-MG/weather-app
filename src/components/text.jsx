// export default function Detail52() {
//     const params = useParams();
//     const [dbdata, setData] = useState('empty52');
    
//     useEffect(() => {
//       async function getData() {
//       //const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
//       const response = await fetch(`http://localhost:5000/record/gopa}`);
    
//         if (!response.ok) {
//           const message = `An error occurred: ${response.statusText}`;
//           window.alert(message);
//           return;
//         }
        
//         const dbdata = await response.json();
//         window.alert(JSON.stringify(dbdata));
//         setData(dbdata);
//         //setData('fake data')
//       }
//       getData();
//       return;
//     },[dbdata]);

    // useEffect(()=>{
    //     async function getData() {
    //         const response = await fetch(
    //             `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=VJ3DZUDUFNBGMJT5A8CCQNU3B&contentType=json`
    //         );
    //     }

    //     const fetchedDataCity = await response.json();
    //     setFetchedDataCity(fetchedDataCity);
    //     };
    //     getData();
    //     return;
    //     }
    //     },[fetchedDataCity]);
