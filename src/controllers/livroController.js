import * as livroModel from './../models/livroModel.js'

export const listarTodos = async (req, res) => {
    try {
        
        const livros = await livroModel.findAll();

        if (!livros || livros.length === 0) {
            res.status(404).json({
                total: livros.length,
                message: "Nenhum livro encontrado",
                livros
            })
        }

        res.status(200).json({
            total: livros.length,
            livros
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro do servidor',
            detalhes: error.message,
            status: 500
        })
    }
}
