import http from "../http-common"

class CarDataService{
    getAll(){
        return http.get("/Car")
    }

    get(id){
        return http.get(`/Car/${id}`)
    }

    create(data){
        return http.post("/Car", data)
    }

    update(id,data){
        return http.put(`/Car/${id}`, data)
    }

    delete(id){
        return http.delete(`/Car/${id}`)
    }
} 

export default new CarDataService();