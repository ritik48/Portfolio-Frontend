const BACKEND = process.env.REACT_APP_BACKEND;

export function sendMail({ mail }) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(`${BACKEND}/send-mail`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(mail),
            });
            const data = await res.json();
            if (data.success) {
                resolve({ message: "Email sent!" });
            } else {
                reject({ message: "Email not sent !!!" });
            }
        } catch (error) {
            reject(error);
        }
    });
}
