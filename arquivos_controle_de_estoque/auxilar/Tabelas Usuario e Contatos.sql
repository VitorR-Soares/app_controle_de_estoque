CREATE TABLE `usuario` (
  `id_usuario` int PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(255),
  `tipo` int,
  `status` char
);

CREATE TABLE `contatos` (
  `id_contato` int PRIMARY KEY AUTO_INCREMENT,
  `telefone` varchar(255),
  `email` varchar(255),
  `idUsuario` int
);

CREATE TABLE `tipo_usuario` (
  `id_tipo` int PRIMARY KEY AUTO_INCREMENT,
  `descricao` varchar(255),
  `nivel_acesso` int
);

ALTER TABLE `usuario` ADD FOREIGN KEY (`tipo`) REFERENCES `tipo_usuario` (`id_tipo`);

ALTER TABLE `contatos` ADD FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id_usuario`);
