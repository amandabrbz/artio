<p align="center">
  <h3 align="center">Artio Events</h3>

  <p align="center">
    Vaga Pessoa Desenvolvedora Front End.
    <br />
  </p>
</p>

## Guide

- [Sobre o Desafio](#Sobre-o-Desafio)
  - [Requisitos](#Requisitos)
- [Getting Started](#getting-started)
  - [Pré requisitos](#Pré-requisitos)
  - [Clonando e inicializando](#Clonando-e-inicializando)
    - [Local](#Local)
- [Versionamento](#Versionamento)
  - [Processo de Deploy](#Processo-de-deploy)
- [Layout](#Layout)
  - [Ideias](#Ideias)
- [Conclusões](#Conclusões)
  - [Aprendizados](#Aprendizados)
  - [Dificuldades](#Dificuldades)
  - [Pontos de melhorias](#Pontos-de-melhorias)
- [Deploy](#Deploy)
- [Contato](#Contato)
- [Referências](#Referências)

## Sobre o Desafio

O desafio é criar um componente de input para que o usuário possa preencher seu telefone na nossa aplicação. O layout é auto explicativo, mas o detalhe é um menu dropdown com a lista de países com a bandeira a esquerda e o nome do país a direita, quando selecionado um país da lista, a máscara (DDD) deve ser dinâmica baseada no país, ou seja, o usuário digita o número com DDD e fica no padrão (48)99999-9999.

### Requisitos

- [ ] TypeScript
- [ ] SCSS
- [ ] Padrão Funcional
- [ ] O componente deve aceitar apenas valores númericos;
- [ ] O componente deve receber um valor que seja apenas uma string (exemplo: para um usuário que escolheu Brasil (.55) e digitou 48999999999 deve enviar +5548999999999);

## Getting Started

Para ter uma cópia local e fazer rodá-lo, siga esses passos:

### Pré requisitos

Ter instalado no computador:

- [x] node superior a versão 12

```sh
node -v
```

### Clonando e inicializando

Esse processo é caso você desejar ver o código na sua máquina e rodar localmente a aplicação, para caso só queira ver a aplicação funcionando, siga para a parte de [Deploy](#Deploy).

:small_red_triangle_down: Comandos devem ser digitados pelo terminal

Para clonar o projeto:

```sh
git clone https://github.com/amandabrbz/artio.git

cd artio
npm install
```

#### Local

Subir o servidor local:

```sh
npm start
```

Após a aplicação inicializar, deve abrir uma aba automaticamente no browser padrão, rodando o projeto na porta ``:3000``

http://localhost:3000

:no_entry_sign: Caso a porta já esteja sendo utilizada, a própria aplicação avisa e tenta outra porta.

## Versionamento

Para desenvolver utilizei algumas do features do GitHub. Como *_issues_* para ver quais tasks precisava fazer e o board presente na aba *_Projects_* onde rolou um _kanban_ automatizado com as *_issues_*. Com essas features consigo ver como está o progresso de desenvolvimento.

Trabalhei com branchs, maior parte do desenvolvimento abri uma branch para cada *_issue_* e ia trabalhando nela quando necessário.

Caso fosse preciso voltar em uma branch, eu rodava o comando de `git pull origin main` para atualizar a branch conforme a **main**.

Não trabalhei com PRs e nem SemVer pois achei que não era necessário para um projeto simples.

### Processo de Deploy

A princípio ia configurar o deploy na Heroku, pois já tinha alguma experiência e sabia que o deploy de aplicações React era automatizado, entretanto ouve algum conflitos de versão e build que não soube resolver e tentei a [Netlify](https://app.netlify.com/).

O deploy pode ocorrer de três maneiras:

1. Via GitHub

A escolhida foi essa, pois sem se preocupar com rodas comandos o não. Só é necessário fazer um commit/merge e dar push da `main` para origin.

2. Via terminal*

```node
npm run build
netlify deploy --prod
```

*_** É necessário ter instalado o CLI._

3. Ou manualmente na ferramenta.

## Layout

Layout dado pela empresa e pode ser visto no [Adobe XD](https://xd.adobe.com/view/70c2b9dc-81e8-4622-a759-b68c44ec5888-2591/)

### Ideias

_Ideias?_

Para simular um envio e de confirmação, fazer um modal que ocupe metade da tela com a impressão do telefone.

Simular um formulário para complementar a página.

## Conclusões

### Aprendizados

Vi bastante que meus estudos avançaram desde que peguei os primeiros testes em react, acredito que ainda tenho que melhorar muito, mas tentei dar o meu melhor para desenvolver.

Conhecer um pouco do universo typescript foi bem legal, apesar das dificuldades.

Criar e utilizar componentes de SASS :star2:

Foi um teste muito divertido de fazer e muito prazeroso também, aprendi e consegui aplicar algumas coisas que tenho aprendido, sai alguns dias :dizzy_face: assim de tanta coisa vista rs

### Dificuldades

Tive bastante dificuldade com o TypeScript, dei uma estudada de como utilizar, entretanto encontrei dois deficits no meio do caminho que me atrapalharam um pouco no desenvolvimento que é a tipagem e a OO.

A arquitetura de projeto em React também é meio confuso para mim, procurei algumas arquiteturas e a que mais me chamou a atenção foi de separar os componentes e as views que eram chamadas e também de separar a lógica da interface.

E manipulação de *lib*, pois a documentação não estava tão clara e o CSS da *lib* veio quebrado.

### Pontos de melhorias

*Identificados by me.*

:heavy_plus_sign: Orientação a Objetos e Tipagem.

:heavy_plus_sign: Arquitetura de projetos React.

:heavy_plus_sign: Mais react e typescript e testes.

## Deploy

<center>

[![Netlify Status](https://api.netlify.com/api/v1/badges/7d83ad59-17cd-41b5-8629-7da70afab002/deploy-status)](https://app.netlify.com/sites/artio-test/deploys)

[Github - Source Code](https://github.com/amandabrbz/artos.git) | [Netlify - Render](https://artio-test.netlify.app)

</center>

## Contato

Amanda Barboza @ [LinkedIn](https://linkedin/in/amandabrbz)

## Referências

[Como criar um campo internacional de telefone](https://baseweb.design/blog/phone-input)

[Como configurar media query global](http://thesassway.com/intermediate/responsive-web-design-in-sass-using-media-queries-in-sass-32)
