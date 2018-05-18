import request from 'request';

// request data for given url (could be an API)
const fetchData = (url) => request(url)

// modify the data after its fetched
const modifyData = (data) => {
    data['prop'] = "sample value";
    return Promise.resolve(data);
}

// convert it to JSON String, maybe for storage purposes
const convertToJSONString = (input) => {
    return Promise.resolve(JSON.stringify(input))
}

fetchData("https://daraz.pk")
.then(modifyData)
.then(convertToJSONString)
.then(data => {
    console.log(data);
})
.catch(err => {
    // catch exceptions here
    console.log("oops ", err.message);
})