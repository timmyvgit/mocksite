const { default: axios } = require("axios");

{/* <script type="text/javascript"> */ }

const api_url = "https://zenquotes.io/api/today/[39f7f1e306e522796dda26da0b4835175357e189]";

async function getapi(url) {
    let res = []
    axios.get(url)
        .then(response => console.log(response.data))

    //   const response = await fetch(url);
    //   var data = await response.json();
    //   console.log(data);
}

getapi(api_url);

// </script>