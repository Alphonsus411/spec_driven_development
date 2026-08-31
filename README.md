# proyectos

Repositorio personal de aprendizaje y prácticas. No es una aplicación en producción: no tiene sistema de build, gestor de paquetes, linter ni tests. Los cambios se hacen directamente sobre ficheros estáticos y se revisan abriéndolos en el navegador.

## Contenido

### `curso_sdd/aprendiendo_html/`

Ejercicios de un curso de HTML (por "Victor Robles"): `index.html` y `contacto.html`. Son mini-sitios autocontenidos, se abren directamente en el navegador sin necesidad de servidor.

### `curso_sdd/aprendiendo_css/`

Ejercicios del mismo curso pero de CSS: `index.html` junto con su hoja de estilos `estilos.css`.

### `curso_sdd/apuntes.md` y `curso_sdd/SPEC_DRIVEN_DEVELOPMENT.md`

Notas en español sobre **Spec-Driven Development (SDD)**: escribir una especificación detallada antes de generar código, como alternativa al "vibe coding" sin estructura.

- `SPEC_DRIVEN_DEVELOPMENT.md` es el documento de referencia ya redactado.
- `apuntes.md` es un esquema de notas en curso, con apartados que todavía están vacíos y se irán completando.

## Cómo trabajar en este repo

- No hay que instalar ni compilar nada: los ejercicios HTML/CSS se abren tal cual en un navegador.
- El contenido está redactado en español (textos, notas); mantener ese idioma al editar los ficheros existentes.
- `.hintrc` configura [webhint](https://webhint.io/) con el ruleset `development` para los ejercicios de HTML/CSS. Está excluido de git vía `.gitignore`, así que no estará presente en un checkout limpio.
