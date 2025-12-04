export const registerApi = async (data) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.message || "Register failed");
    return json;
};

export const loginApi = async (data) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.message || "Login failed");
    return json;
};
