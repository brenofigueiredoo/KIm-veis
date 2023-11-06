> Repositório de projeto Back-End desenvolvido em NodeJs.
 <br />
 
# KImóveis📚

- **Aplicação back-end responsável por gerenciar uma imobiliária, onde é possível realizar o cadastro de imóveis e de usuários interessados na aquisição de propriedades.**

- **Além disso, é possível realizar o agendamento e consultar horários de visitas às propriedades disponíveis no banco de dados da imobiliária.**


### Rodando localmente:

#### 1. Clone o projeto em sua máquina.
   
#### 2. Instale as dependências com o comando:
```shell
yarn install
```

**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

````
yarn --version
````

Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

````
npm install --global yarn
````

<br>

#### 3. Run

a API já está com o **Docker** configurado por isso você precisa do **Docker** e **docker-compose** instalados na sua máquina.
Siga os passos abaixo para startar a API localmente:
```
docker-compose up --build
````

ou
```
docker compose up --build
```

O comando pode variar com a versão do docker compose instalada em sua máquina

***ATENÇÃO:*** a porta utilizada para rodar nosso docker é a `5436`.
Caso tenha algum problema com essa porta, basta alterá-la no docker-compose.yml.

#### 4. Migrations

Execute as migrations com os comandos:
```
docker exec -it api yarn typeorm migration:run -d src/data-source.ts
```

<br>

# **Sobre os testes**

Essa aplicação possui testes, que serão utilizados para validar, se todas as regras de negócio foram aplicadas de maneira correta.

Os testes estão localizados em `src/__tests__`.

Na subpasta `integration` estão os testes.

Já na subpasta `mocks` estão os dados que serão utilizados para os testes.

No arquivo `jest.config.json` estão algumas configurações necessárias para os testes rodarem.

**`De modo algum altere qualquer um desses arquivos.`** Isso poderá comprometer a integridade dos testes.

E também não altere o script de `test` localizado no `package.json`. Isso será utilizado para rodar os testes.

<br>


## **Rodando os testes** 

Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.

Estando no terminal e dentro do caminho correto, você poderá utilizar os comandos a seguir:

### Rodar todos os testes
````
yarn test
````
#
### Rodar todos os testes e ter um log ainda mais completo
````
yarn test --all
````
#

### Rodar os testes de uma pasta específica
`detalhe: repare que tests está envolvido por 2 underlines. Isso se chama dunder.`
````
yarn test ./scr/__tests__/integration/<subpasta>
````
#
### Rodar os testes de um arquivo específico
````
yarn test ./scr/__tests__/integration/<subpasta>/<arquivo>
````
#
### Rodar um teste específico
````
yarn test -t <describe ou test específico envolto em aspas>
````
````
\\ ex: yarn test -t "/categories"
\\ rodaria os testes do describe "/categorias" no caminho
\\ ./scr/__tests__/integration/categories/categoriesRoutes.test.ts
````

<br>

#### Diagrama DER
![image](https://user-images.githubusercontent.com/80117189/219662120-0f4a9d45-1c7c-426e-82b5-5b71a38aa031.png)
