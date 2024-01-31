// importando o multer para receber arquivos
import multer from 'multer';
// importando as configurações do multer
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

// variável upload recebendo o multer com suas configurações, e o single serve para receber,
// apenas um arquivo com o nome 'foto'.
const upload = multer(multerConfig).single('foto');

// crição da classe
class ImageController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new ImageController();

// Index - Lista os dados da tabela
// Show - Exibe um item especifico
// Update - Salva a atualização do dado
// Store - Salva o novo item na tabela
// Delete - Remove o dado
