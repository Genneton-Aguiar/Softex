INSERT INTO Produtos (Nome, Preco, QuantidadeEstoque)
VALUES
('Smartphone', 799.99, 20),
('Tablet', 349.99, 10),
('Fone de Ouvido', 49.99, 50);

UPDATE Produtos
SET QuantidadeEstoque = 25, Preco = 849.99
WHERE Nome = 'Smartphone';

UPDATE Produtos
SET QuantidadeEstoque = QuantidadeEstoque - 5
WHERE Nome = 'Tablet';

UPDATE Produtos
SET QuantidadeEstoque = QuantidadeEstoque - 10
WHERE Nome = 'Fone de Ouvido';