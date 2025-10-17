const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // usuário padrão do XAMPP
    password: "", // senha padrão do XAMPP é vazia
    database: "family_archive",
});

// Teste de conexão
db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
        return;
    }
    console.log("Conectado ao banco de dados MySQL!");
});

// Exemplo de rota
app.get("/", (req, res) => {
    res.send("API do Family Archive está rodando!");
});

// Porta do servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Rota de cadastro de usuário
app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Preencha todos os campos." });
    }
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            if (err.code === "ER_DUP_ENTRY") {
                return res
                    .status(409)
                    .json({ message: "Email já cadastrado." });
            }
            return res
                .status(500)
                .json({ message: "Erro ao cadastrar usuário." });
        }
        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    });
});

// Rota de login de usuário
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Preencha todos os campos." });
    }
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Erro ao fazer login." });
        }
        if (results.length === 0) {
            return res
                .status(401)
                .json({ message: "Email ou senha inválidos." });
        }
        res.json({ message: "Login realizado com sucesso!", user: results[0] });
    });
});

// Criar um novo álbum
app.post("/albums", (req, res) => {
    const { user_id, title, description } = req.body;
    if (!user_id || !title) {
        return res
            .status(400)
            .json({ message: "Preencha todos os campos obrigatórios." });
    }
    const sql =
        "INSERT INTO albums (user_id, title, description) VALUES (?, ?, ?)";
    db.query(sql, [user_id, title, description], (err, result) => {
        if (err)
            return res.status(500).json({ message: "Erro ao criar álbum." });
        res.status(201).json({
            message: "Álbum criado com sucesso!",
            albumId: result.insertId,
        });
    });
});

// Listar álbuns de um usuário
app.get("/albums/:user_id", (req, res) => {
    const { user_id } = req.params;
    const sql = "SELECT * FROM albums WHERE user_id = ?";
    db.query(sql, [user_id], (err, results) => {
        if (err)
            return res.status(500).json({ message: "Erro ao buscar álbuns." });
        res.json(results);
    });
});

// Adicionar foto a um álbum
app.post("/photos", (req, res) => {
    const { album_id, filename, url } = req.body;
    if (!album_id || !filename || !url) {
        return res
            .status(400)
            .json({ message: "Preencha todos os campos obrigatórios." });
    }
    const sql = "INSERT INTO photos (album_id, filename, url) VALUES (?, ?, ?)";
    db.query(sql, [album_id, filename, url], (err, result) => {
        if (err)
            return res.status(500).json({ message: "Erro ao adicionar foto." });
        res.status(201).json({
            message: "Foto adicionada com sucesso!",
            photoId: result.insertId,
        });
    });
});

// Listar fotos de um álbum
app.get("/photos/:album_id", (req, res) => {
    const { album_id } = req.params;
    const sql = "SELECT * FROM photos WHERE album_id = ?";
    db.query(sql, [album_id], (err, results) => {
        if (err)
            return res.status(500).json({ message: "Erro ao buscar fotos." });
        res.json(results);
    });
});

// Editar um álbum
app.put("/albums/:id", (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const sql = "UPDATE albums SET title = ?, description = ? WHERE id = ?";
    db.query(sql, [title, description, id], (err, result) => {
        if (err)
            return res.status(500).json({ message: "Erro ao editar álbum." });
        res.json({ message: "Álbum atualizado com sucesso!" });
    });
});

// Deletar um álbum
app.delete("/albums/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM albums WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err)
            return res.status(500).json({ message: "Erro ao deletar álbum." });
        res.json({ message: "Álbum deletado com sucesso!" });
    });
});

// Editar uma foto
app.put("/photos/:id", (req, res) => {
    const { id } = req.params;
    const { filename, url } = req.body;
    const sql = "UPDATE photos SET filename = ?, url = ? WHERE id = ?";
    db.query(sql, [filename, url, id], (err, result) => {
        if (err)
            return res.status(500).json({ message: "Erro ao editar foto." });
        res.json({ message: "Foto atualizada com sucesso!" });
    });
});

// Deletar uma foto
app.delete("/photos/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM photos WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err)
            return res.status(500).json({ message: "Erro ao deletar foto." });
        res.json({ message: "Foto deletada com sucesso!" });
    });
});
