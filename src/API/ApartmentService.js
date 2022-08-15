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
    static async addNewApartment(apartment, fetcher) {
        try {
            const response = await axios.post("http://localhost:8000/apartments", apartment)
            console.log(response.data);
            fetcher()
        } catch(e) {
            console.log(e);
        }
    }

    static async updateApartment(apartment, fetcher, id) {
        try {
            const response = await axios.put(`http://localhost:8000/apartments/${id}`, apartment)
            fetcher()
            console.log(response.data)
        } catch(e) {
            console.log(e)
        }
    }

    static async deleteApartment(id, fetcher) {
        try {
            const response = await axios.delete(`http://localhost:8000/apartments/${id}`)
            fetcher()
            console.log(response.data)
        } catch(e) {
            console.log(e)
        }
    }
}