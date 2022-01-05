# Desafio
Desafio em nodejs

## Atenção :warning:
O docker não está funcionando corretamente devido falha de virtualização.

## Requisitos para rodar a aplicação
 - Instalar NodeJS
 - yarn
 
 ## Iniciando a aplicação
 Para instalar as dependências, entre no diretório api, microservice/pharmacy, microservice/products e execute o comando `yarn ou yarn install`.
 
 Para executar o projeto em desenvolvimento, chame o `yarn dev`.
 
 ## Consumindo a aplicação
 Você pode utilizar o insomnia, postman ou outro de sua preferência para isso, porém recomendo o insomonia pois o mesmo tem recursos adcionais como o GraphQL e grpc que interagem bem  com a API REST
 
 
 ## Rotas para o método farmácia
 
 | MÉTODO  | ROTA |
| ------------- | ------------- |
| POST  | /createPharmacy  |
| GET  | /getPharmacyByName  |
| GET  | /getAllPharmacys  |
| PUT  | /updatePharmacyData/1  |
| DELETE  | /deletePharmacy/1  |

 ## Rotas para o método filial
 
 | MÉTODO  | ROTA |
| ------------- | ------------- |
| POST  | /createSubsidiary/1  |
| GET  | /getSubsidiaryByName  |
| GET  | /getAllSubsidiarys  |
| PUT  | /updateSubsidiaryData/1  |
| DELETE  | /deleteSubsidiary/1  |

 ## Rotas para o método produto
 
 | MÉTODO  | ROTA |
| ------------- | ------------- |
| POST  | /createProduct  |
| POST  | /cloneProduct/1  |
| GET  | /getProductsByName  |
| GET  | /getAllProducts  |
| PUT  | /updateProductData/1  |
| DELETE  | /deleteProduct/1  |
