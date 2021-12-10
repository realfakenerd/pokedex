/**
 * @param {string} tipo 
 * @returns {string}
 */
export function pokeType(tipo) {
    let str;
    switch (tipo) {
        case "grass":
            str = "green-500";
            break;
        case "fire":
            str = "orange-500";
            break;
        case "flying":
            str = "violet-300";
            break;
        case "dragon":
            str = "indigo-700"
            break;
        case "fairy":
            str = "rose-400";
            break;
        case "ice":
            str = "cyan-200";
            break;
        case "normal":
            str = "stone-500";
            break;
        case "fighting":
            str = "red-500";
            break;
        case "eletric":
            str = "yellow-400";
            break;
        case "dark":
            str = "yellow-800";
            break;
        case "bug":
            str = "lime-500";
            break;
        case "ghost":
            str = "violet-600";
            break;
        case "ground":
            str = "yellow-700";
            break;
        case "poison":
            str = "purple-500";
            break;
        case "psychic":
            str = "pink-500";
            break;
        case "rock":
            str = "orange-400";
            break;
        case "steel":
            str = "zync-400";
            break;
        case "water":
            str = "blue-500";
            break;
        default:
            str = "red-500";
            break;
    }
    return str;
}