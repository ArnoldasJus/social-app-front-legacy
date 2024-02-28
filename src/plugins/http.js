const serverUrl = "http://localhost:4000"

export default {
    get: async (url) => {
        const options = {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }

        const res = await fetch(`${serverUrl}/${url}`, options)
        return await res.json()
    },
    post: async (data, url) => {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        }

        const res = await fetch(`${serverUrl}/${url}`, options)
        return await res.json()
    },
    postWithToken: async (data, url) => {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: localStorage.getItem("token")
            },
            body: JSON.stringify(data)
        }

        const res = await fetch(`${serverUrl}/${url}`, options)
        return await res.json()
    },
}