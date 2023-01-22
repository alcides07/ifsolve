import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8000/',
});

export function loginApi(data) {
    return api.post("auth/login/", {
        "username": data.login,
        "password": data.password,
    })
}

export function Logout() {
    const token = localStorage.getItem("ifsolve_token");

    return api.get("auth/logout/",
        {
            headers: {
                "Authorization": "Token " + token,
            }
        }
    ).then((res) => {
        localStorage.removeItem("ifsolve_token");
        localStorage.removeItem("ifsolve_user");
    })

}

export function GetUser() {
    const token = localStorage.getItem("ifsolve_token");

    return api.get("auth/user/", {
        headers: {
            "Authorization": "Token " + token,
        }
    })
}


export function ElaboradorRegister(data) {
    return api.post("elaborador/cadastro/", {
        "nome_completo": data.nome_completo,
        "username": data.username,
        "password": data.password,
        "first_name": "string",
        "last_name": "string",
        "email": data.email,
        "data_nascimento": data.data_nascimento,
        "verificado": true
    })
}

export function AlunoRegister(data) {
    return api.post("aluno/cadastro/", {
        "nome_completo": data.nome_completo,
        "username": data.username,
        "password": data.password,
        "first_name": "string",
        "last_name": "string",
        "email": data.email,
        "data_nascimento": data.data_nascimento,
    })
}

export function PostItemDI(data) {
    const user = JSON.parse(localStorage.getItem("ifsolve_user"));

    return api.post("item/criar/",
        {
            "titulo": data.titulo,
            "texto_base": "",
            "tipo": data.tipo,
            "assunto": data.assunto,
            "tags": data.tags,
            "expectativa_resposta": data.expectativa_resposta,
            "elaborador": user.id,
            "enunciado": data.enunciado,
            "area": data.area,
            "visibilidade": "PU",
            "data_publicacao": new Date().toJSON(),
        },
        {
            headers: {
                "Authorization": "Token " + localStorage.getItem("ifsolve_token"),
            }
        }
    ).then((res) => {
        console.log(res)
    })
}

export function PostItemME(data) {
    const user = JSON.parse(localStorage.getItem("ifsolve_user"));

    return api.post("item/criar/",
        {
            "titulo": data.titulo,
            "texto_base": "",
            "tipo": data.tipo,
            "assunto": data.assunto,
            "tags": data.tags,
            "alternativa_correta": data.alternativa_correta,
            "elaborador": user.id,
            "enunciado": data.enunciado,
            "area": data.area,
            "visibilidade": "PU",
            "data_publicacao": new Date().toJSON(),
            "alternativa_a": {
                "texto": data.alternativas[0].texto,
                "justificativa": data.alternativas[0].justificativa,
            },
            "alternativa_b": {
                "texto": data.alternativas[1].texto,
                "justificativa": data.alternativas[1].justificativa,
            },
            "alternativa_c": {
                "texto": data.alternativas[2] ? data.alternativas[2].texto : " ",
                "justificativa": data.alternativas[2] ? data.alternativas[2].justificativa : " ",
            },
            "alternativa_d": {
                "texto": data.alternativas[3] === undefined ? " " : data.alternativas[3].texto,
                "justificativa": data.alternativas[3] === undefined ? " " : data.alternativas[3].justificativa,
            },
            "alternativa_e": {
                "texto": data.alternativas[4] === undefined ? " " : data.alternativas[4].texto,
                "justificativa": data.alternativas[4] === undefined ? " " : data.alternativas[4].justificativa,
            }
        },
        {
            headers: {
                "Authorization": "Token " + localStorage.getItem("ifsolve_token"),
            }
        }
    ).then((res) => {
        console.log(res)
    })
}


export function GetItemsPU(setItens, setListItens) {
    const token = localStorage.getItem("ifsolve_token");
    return api.get("item/publico/",
        {
            headers: {
                "Authorization": "Token " + token,
            }
        },
    ).then((res) => {
        setItens([...res.data].reverse());
        setListItens([...res.data].reverse());
    })
}

export function GetItems() {
    const token = localStorage.getItem("ifsolve_token");
    return api.get("item/publico/",
        {
            headers: {
                "Authorization": "Token " + token,
            }
        },
    )
}

export function GetAreas() {
    const token = localStorage.getItem("ifsolve_token");

    return api.get("area/",
        {
            headers: {
                "Authorization": "Token " + token,
            }
        }
    )
}

export function GetItemByID(id) {
    const token = localStorage.getItem("ifsolve_token");

    return api.get(`item/${id}/`, {
        headers: {
            "Authorization": "Token " + token,
        }
    })
}

export function GetAvaliacaoByID(id) {
    const token = localStorage.getItem("ifsolve_token");

    return api.get(`avaliacao/${id}/detalhe/`, {
        headers: {
            "Authorization": "Token " + token,
        }
    })
}

export function GetRespostasAlunoAvaliacao(id) {
    const token = localStorage.getItem("ifsolve_token");

    return api.get(`avaliacao/${id}/aluno/respostas/`, {
        headers: {
            "Authorization": "Token " + token,
        }
    })
}


export function GetTags() {
    const token = localStorage.getItem("ifsolve_token");

    return api.get('tag/', {
        headers: {
            "Authorization": "Token " + token,
        }
    })
}