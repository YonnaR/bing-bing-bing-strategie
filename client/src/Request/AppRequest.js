import axios from "axios";

/*
    @yonna
    j'étais vraiment fatigué de réécrire toutes les requêtes a chaue fois et je commençais a me perdre alors j'ai créer cette classe pour les avoirs sous la main partout     
*/
export default new class AppRequest{

    async getById(id){
        let d= new Promise()
        axios.get(`/${id}`)
        .catch(e=>console.log(e))
        .then(res=>d = res);
        await Promise.resolve(d)
    }

    async getAll(){
        let d= new Promise()
        axios.get('/all')
        .catch(e=>console.log(e))
        .then(res=>d = res);
        await Promise.resolve(d)
    }

    async getLast(limit){
        let d= new Promise()
        axios.get(`/last/${limit}`)
        .catch(e=>console.log(e))
        .then(res=>d = res);
        await Promise.resolve(d)
    }

    async getByPoste(id){
        let d= new Promise()
        axios.get(`/poste/${id}`)
        .catch(e=>console.log(e))
        .then(res=>d = res);
        await Promise.resolve(d)
    }

    async getActive(){
        let d= new Promise()
        axios.get('/active')
        .catch(e=>console.log(e))
        .then(res=>d = res);
        await Promise.resolve(d)
    }

    async getToday(){
        let d= new Promise()
        axios.get('/today')
        .catch(e=>console.log(e))
        .then(res=>d = res);
        await Promise.resolve(d)
    }


    async Update(data){
        let d= new Promise()
        axios.put(`/${data._id}`)
        .catch(e=>console.log(e))
        .then(res=>d = res);
        await Promise.resolve(d)
    }

    async Delete(id){
        let d= new Promise()
        axios.delete(`/${id}`)
        .catch(e=>console.log(e))
        .then(res=>d = res);
        await Promise.resolve(d)
    }

    async Create(data){
        let d= new Promise()
        axios.post('/', data)
        .catch(e=>console.log(e))
        .then(res=>d = res);
        await Promise.resolve(d)
    }

    async Start(data){
        let d= new Promise()
        axios.put(`/${data._id}`)
        .catch(e=>console.log(e))
        .then(res=>d = res);
        await Promise.resolve(d)
    }

    async End(data){
        let d= new Promise()
        axios.put(`/${data._id}`)
        .catch(e=>console.log(e))
        .then(res=>d = res);
        await Promise.resolve(d)
    }

    async Assign(data){
        let d= new Promise()
        axios.put(`/${data._id}`)
        .catch(e=>console.log(e))
        .then(res=>d = res);
        await Promise.resolve(d)
    }
}