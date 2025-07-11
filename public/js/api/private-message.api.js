const BASE_URL = "/api/private-messages";

const PrivateMessageApi = {
    getAll: async () => {
        try {
            const res = await fetch(BASE_URL);
            if (!res.ok) throw new Error();
            return await res.json();
        } catch {
            console.error("Error al obtener todos");
            return null;
        }
    },
    getById: async (id) => {
        try {
            const res = await fetch(`${BASE_URL}/${id}`);
            if (!res.ok) throw new Error();
            return await res.json();
        } catch {
            console.error("Error al obtener por ID");
            return null;
        }
    },

    create: async (data) => {
        try {
            const res = await fetch(BASE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error();
            return await res.json();
        } catch {
            console.error("Error al crear");
            return null;
        }
    },
    update: async (data) => {
        try {
            const res = await fetch(BASE_URL, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error();
            return await res.json();
        } catch {
            console.error("Error al actualizar");
            return null;
        }
    },
    delete: async (id) => {
        try {
            const res = await fetch(`${BASE_URL}/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error();
            return true;
        }catch {
            console.error("Error al eliminar");
            return null;
        }
    },

    getByUserIds: async (id1,id2) => {
        try {
            const res = await fetch(`${BASE_URL}/users/${id1}/${id2}`);
            if (!res.ok) throw new Error();
            return await res.json();
        } catch {
            console.error("Error al obtener por ID");
            return null;
        }
    },
    getByUsernames: async (username1,username2) => {
        try {
            const res = await fetch(`${BASE_URL}/users/usernames/${username1}/${username2}`);
            if (!res.ok) throw new Error();
            return await res.json();
        } catch {
            console.error("Error al obtener por ID");
            return null;
        }
    },
};

export default PrivateMessageApi;