# Prueba Técnica Frontend

## Índice

- [Descripción](#descripción)
- [Clonar el Repositorio y Ejecutar el Proyecto](#clonar-el-repositorio-y-ejecutar-el-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Scripts Disponibles](#scripts-disponibles)

## Descripción

1. Llama a la API y muestra los personajes (characters) en pantalla (puedes usar la maquetación que más te guste).
2. Permitir editar los personajes. Para ello, abrir en un popup un formulario de edición para los campos de nombre (name), ubicación (location) y estado (status). Guarda estos nuevos datos sobre las variables (como no podemos hacer PUT sobre la API lo dejamos moqueado).
3. Crea una tabla resumen de los 10 primeros personajes (solo los datos principales, sin imagen).

## Clonar el Repositorio y Ejecutar el Proyecto

Sigue estos pasos para clonar el repositorio y ejecutar el proyecto localmente:

```bash
# Clona el repositorio
git clone https://github.com/varitoapg/Rick-Morty-test

# Entra en el directorio del proyecto
cd rick-and-morty

# Instala las dependencias
npm install

# Ejecuta el proyecto en modo desarrollo
npm run dev
```

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

- **React**: ^18.2.0
- **React DOM**: ^18.2.0
- **TypeScript**: ^5.2.2
- **Vite**: ^5.2.0
- **Tailwind CSS**: ^3.4.3
- **Emotion (React y Styled)**: ^11.11.4 y ^11.11.5
- **FontAwesome**: ^6.5.2
- **Axios**: ^1.7.2
- **Framer Motion**: ^11.2.6
- **ESLint**: ^8.57.0
- **Vitest**: ^1.6.0

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes scripts:

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run lint`: Linter para el código.
- `npm run preview`: Previsualiza la compilación de producción.
- `npm run test`: Ejecuta las pruebas.
- `npm run coverage`: Genera el reporte de cobertura de las pruebas.
