axios.defaults.withCredentials = true; // this one's important. This is like a global declaration of 'withCredentials: true' and it's only for axios

  // the fetchIPO doens't actually need authorization...
  const fetchIPO = async () => {
    try {
      const response = await axios.get('http://localhost:9000/ipo/fetchall'); // this one doesn't need the 'withCredentials'.. but it's already defined globally so, it'll be included automatically.

      /**
       // if you wanna do the traditional style with 'fetch'... refer to this syntax
       const response = await fetch(endpoint, {
          method,
          body (no body for GET method),
          credentials: 'include'
       })
       */

      if (response.data.success) { // or if(response.data)
        console.log("Success:", response.data.data);
        // or store the data inside the hook ---> (setData(response.data.message))
        // you can return it as well. ---> (return response.data.message) or in the object format as well ---> (return {success: true, ipo: data, message })
      } else {
        console.log("API Error:", response.data.message);
        // or store the data inside the hook ---> (setErrorMssg(response.data.message))
      }
    } catch (error) {
      // Handle network/technical errors
      // or you can remove the conditional chaining as well... it's upto you
      const errorMessage = error.response?.data?.message ||
        error.message ||
        "Failed to fetch IPOs";
      console.log("Error:", errorMessage);
      /**
       * or you can return in this format
        return {
        success: false,
        message: errorMessage,
        isNetworkError: !error.response // Flag for network vs API errors
      };
       */
    }
  }

  // this route can only be performed when the user session is still active (this route needs user authorization)
  const registerIPO = async () => {
    try {
      const response = await axios.post(endpoint, {
        credentials: {
          // same field name as the ipo model (please refer to the IPO.model.js file in the backend)
          /**
           companyLogo ---> this should be saved as a binary data in the backend
           companyName,
           prizeBand,
           open,
           close,
            ...
           and sooo on
           */
        }
      });
    } catch (error) {
      // follow the same pattern
    }
  }

  // follow the same method for other routes
  // update, delete requires ipoId (/ipo/update-delete/${ipoId})