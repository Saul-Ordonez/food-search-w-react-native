import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer DrNgTuOOCM2qzxyWydhae9lOuaNDv1WRvjw7LPQQczboGhAVRAMJHYVSpZqr9LFU9PSNttcaA9OFV0BckrHculJ8Twws8R1VqktBHlSsvzS4xdkKyh7fnFHQhLOkXnYx'
  }
});

