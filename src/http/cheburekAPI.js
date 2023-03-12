import {$host} from "./axios";

export const cheburekAPI = {
    async createOrUpdate(id, formData) {
        if (id) {
            await $host.put(`/${id}`, formData)
        } else {
            await $host.post("", formData)
        }
    },
    async get() {
        const {data} = await $host.get("")
        return data
    },
    async del(id) {
        await $host.delete(`/${id}`)
    },
}