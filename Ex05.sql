CREATE DATABASE biblioteca;

CREATE TABLE Autores (
  AutorID INT PRIMARY KEY,
  Nome VARCHAR(255),
  Nacionalidade VARCHAR(255)
);

CREATE TABLE Livros (
  LivroID INT PRIMARY KEY,
  Titulo VARCHAR(255),
  AnoPublicacao INT,
  AutorID INT,
  FOREIGN KEY (AutorID) REFERENCES Autores(AutorID)
);

/*-------------------------------------------------------------*/ 

INSERT INTO Autores (Nome, Nacionalidade) VALUES
  ('Autor1', 'Nacionalidade1'),
  ('Autor2', 'Nacionalidade2'),
  ('Autor3', 'Nacionalidade3');


INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES
  ('Livro1', 2020, 1),
  ('Livro2', 2018, 1),
  ('Livro3', 2019, 2),
  ('Livro4', 2021, 2),
  ('Livro5', 2017, 3);

SELECT * FROM Autores;
SELECT * FROM Livros;

/*------------------------------------------------------------------*/


/* INNER JOIN */

SELECT Autores.Nome AS NomeAutor, Livros.Titulo AS TituloLivro
FROM Autores
INNER JOIN Livros ON Autores.AutorID = Livros.AutorID;

/* LEFT JOIN */

SELECT Autores.Nome AS NomeAutor, Livros.Titulo AS TituloLivro
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;

/* NACIONALIDADE */

SELECT Autores.Nome AS NomeAutor, Livros.Titulo AS TituloLivro
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'Nacionalidade1';

/*  CONSULTA AGREGADA */
 SELECT Autores.Nome AS NomeAutor, COUNT(Livros.LivroID) AS QtdLivros
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.Nome;



