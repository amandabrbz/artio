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
- [GitFlow](#GitFlow)
  - [Processo de Deploy](#Processo-de-deploy)
- [Layout](#Layout)
- [Conclusões](#Conclusões)
  - [Aprendizados](#Aprendizados)
  - [Dificuldades](#Dificuldades)
  - [Pontos de melhorias](#Pontos-de-melhorias)
- [Deploy](#Deploy)
- [Contato](#Contato)
- [Referências](#Referências)
  - [Assets](#Assets)

## Sobre o Desafio

O desafio é criar um componente de input para que o usuário possa preencher seu telefone na nossa aplicação. O layout é auto explicativo, mas o detalhe é um menu dropdown com a lista de países com a bandeira a esquerda e o nome do país a direita, quando selecionado um país da lista, a máscara (DDD) deve ser dinâmica baseada no país, ou seja, o usuário digita o número com DDD e fica no padrão (48)99999-9999.

### Requisitos

- [x] TypeScript
- [x] SCSS
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

Esse processo é caso você deseja ver o código na sua máquina.

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

:no_entry_sign: Caso a porta já esteja sendo utilizada, o próprio terminal avisa.

## Gitflow

### Processo de Deploy

```sh
npm run build
netlify deploy --prod
```

## Layout

Layout dado pela empresa e pode ser visto no [Adobe XD](https://xd.adobe.com/view/70c2b9dc-81e8-4622-a759-b68c44ec5888-2591/)

## Conclusões

*_comments_*

### Aprendizados

*_comments_*

### Dificuldades

*_comments_*

### Pontos de melhorias

:heavy_plus_sign: *_comments_*.

## Deploy

<center>

[Github](https://github.com/amandabrbz/artos.git) | [Netlify](https://artio-test.netlify.app)

</center>

## Contato

Amanda Barboza @ [LinkedIn](https://linkedin/in/amandabrbz)

## Referências

[Como criar um campo internacional de telefone](https://baseweb.design/blog/phone-input)

[Como configurar media query global](http://thesassway.com/intermediate/responsive-web-design-in-sass-using-media-queries-in-sass-32)

### Assets

*_comments_*
