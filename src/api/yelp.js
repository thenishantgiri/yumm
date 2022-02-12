import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer loE4ZPJbCI98pK8VSsFwqQZI3chYycsX2IARDsZ9cQm9wrWCVX8nd7ymnL6DZTZx9S8n-5f_vVGvF7soQ3oSgOyZuXUrUA2I55MmXNLI0LUJixYw8MHOH06epNsCYnYx",
  },
});
