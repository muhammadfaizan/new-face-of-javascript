import request from 'request';

// request data for given url (could be an API)
// returns Promise
const fetchData = (url) => request(url)

// modify the data after its fetched
// returns Promise from "async"
const modifyData = async (data) => {
  data['prop'] = "sample value";
  return data;
}

// convert it to JSON String, maybe for storage purposes
// returns Promise from "async"
const convertToJSONString = async (input) => JSON.stringify(input)

const asyncFunction = async() => {
  try { 
    const requestedData = await fetchData("https://daraz.pk")
    const modifiedData = await modifyData(requestedData)
    const jsonFormattedData = await convertToJSONString(modifiedData)
    console.log(jsonFormattedData);        
  }
  catch(err) {
    // catch exceptions here
    console.log("oops ", err.message);
  }
}
