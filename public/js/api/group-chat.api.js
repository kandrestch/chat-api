const BASE_URL = "/api/chats";

const GroupChatApi = {
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

    getByName: async (name) => {
        try {
            const res = await fetch(`${BASE_URL}/name/${name}`);
            if (!res.ok) throw new Error();
            return await res.json();
        } catch {
            console.error("Error al obtener por username");
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
    getByUserId: async (id) => {
        try {
            const res = await fetch(`${BASE_URL}/user/${id}`);
            if (!res.ok) throw new Error();
            return await res.json();
        } catch {
            console.error("Error al obtener por ID");
            return null;
        }
    },
    getByUsername: async (username) => {
        try {
            const res = await fetch(`${BASE_URL}/user/username/${username}`);
            if (!res.ok) throw new Error();
            return await res.json();
        } catch {
            console.error("Error al obtener por ID");
            return null;
        }
    },
};

export default GroupChatApi;
