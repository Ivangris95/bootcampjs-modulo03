// The Beatles / 1960 / Activo: true / 🎵 Pop Rock
// Queen / 1970 / Activo: false / 🎸 Rock
// AC DC / 1973 / Activo: true / 🤘 Hard Rock
// Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
// The Rolling Stones / 1962 / Activo: true / 🎸 Rock

const estiloGrupoMusical = 'font-weight: bold; font-size: 15px; background-color: green;';

const hardRock : string = "🤘 Hard Rlock";
const rock : string = "🎸 Rock";
const popRock : string = "🎵 Pop Rock";
const clasica : string = "🎼 Clásica";

interface grupoMusical {
    nombre: string ; 
    añoFundacion: number;
    activo: boolean;
    genero: string;
};

const theBeatles: grupoMusical = {
    nombre: "The Beatles",
    añoFundacion: 1960,
    activo: true,
    genero: popRock,
};

const queen: grupoMusical = {
    nombre: "Queen",
    añoFundacion: 1970,
    activo: false,
    genero: rock,
};

const acdc: grupoMusical = {
    nombre: "AC/DC",
    añoFundacion: 1973,
    activo: true,
    genero: hardRock,
};
const beethoven: grupoMusical = {
    nombre: "Ludwig van Beethoven",
    añoFundacion: 1770,
    activo: false,
    genero: clasica,
};

const stones: grupoMusical = {
    nombre: "The Rolling Stones",
    añoFundacion: 1962,
    activo: true,
    genero: rock,
};

console.log(
    'Nombre del grupo: %c%s%c, Año de formación: %s, Género: %s, Activo: %s',
    estiloGrupoMusical, theBeatles.nombre, '' ,  theBeatles.añoFundacion, 
    theBeatles.genero, theBeatles.activo);

console.log(
    'Nombre del grupo: %c%s%c, Año de formación: %s, Género: %s, Activo: %s',
    estiloGrupoMusical, queen.nombre, '' ,  queen.añoFundacion, 
    queen.genero, queen.activo);

console.log(
    'Nombre del grupo: %c%s%c, Año de formación: %s, Género: %s, Activo: %s',
    estiloGrupoMusical, acdc.nombre, '' ,  acdc.añoFundacion, 
    acdc.genero, acdc.activo);

console.log(
    'Nombre del grupo: %c%s%c, Año de formación: %s, Género: %s, Activo: %s',
    estiloGrupoMusical, beethoven.nombre, '' ,  beethoven.añoFundacion, 
    beethoven.genero, beethoven.activo);

console.log(
    'Nombre del grupo: %c%s%c, Año de formación: %s, Género: %s, Activo: %s',
    estiloGrupoMusical, stones.nombre, '' ,  stones.añoFundacion, 
    stones.genero, stones.activo);