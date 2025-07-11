const BASE_URL = "/api/auth";

const AuthApi = {
    me: async () => {
        try {
            const res = await fetch(BASE_URL+"/me");
            if (!res.ok) throw new Error();
            return await res.json();
        } catch {
            return null;
        }
    },

    login: async (data) => {
        try {
            const res = await fetch(BASE_URL+"/login", {
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
    logout: async () => {
        try {
            const res = await fetch(BASE_URL+"/logout", {
                method: "POST",
            });
            if (!res.ok) throw new Error();
            return await res.json();
        } catch {
            console.error("Error al logut");
            return null;
        }
    },
    register: async (data) => {
        try {
            const res = await fetch(BASE_URL+"/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error();
            return await res.json();
        } catch {
            console.error("Error al actualizar");
            return null;
        }
    }
};

export default AuthApi;
