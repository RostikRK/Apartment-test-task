import axios from "axios"

export default class ApartmentService {
    static async getAll(price, rooms) {
        try {
            const response = await axios.get("http://localhost:8000/apartments", {
                params: {
                    price: price,
                    rooms: rooms
                }
            })
            return response.data;
        } catch(e) {
            console.log(e);
        }
    }
    static async addNewApartment(apartment) {
        try {
            console.log(apartment)
            const response = await axios.post("http://localhost:8000/apartments", apartment)
            console.log(response.data);
        } catch(e) {
            console.log(e);
        }
    }
}