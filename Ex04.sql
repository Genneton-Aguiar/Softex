SELECT * FROM Transacoes;

SELECT IDTransacao AS ID_Transacao, Data, Valor FROM Transacoes;

SELECT * FROM Transacoes WHERE Valor > 100.00;

SELECT * FROM Transacoes ORDER BY Valor DESC;

SELECT AVG(Valor) AS Media_Valor FROM Transacoes;

SELECT MAX(Valor) AS Valor_Max FROM Transacoes;

SELECT MIN(Valor) AS Valor_Min FROM Transacoes;

SELECT COUNT(*) AS Total_Transacoes FROM Transacoes;

SELECT Produto, AVG(Valor) AS Media_Valor_por_Produto FROM Transacoes GROUP BY Produto;

SELECT Categoria, COUNT(*) AS Quantidade_Produtos, SUM(Quantidade) AS Quantidade_Total, SUM(Valor) AS Valor_Total, AVG(Valor) AS Media_Valor_por_Transacao
FROM Produtos
JOIN Transacoes ON Produtos.ProdutoID = Transacoes.ProdutoID
GROUP BY Categoria;