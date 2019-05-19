const opciones = {
	nombre:{
		alias:'n'
		demand:true
	},
	matematicas:{
		demand: true,
		alias:'m'
	},
	ingles:{
		demand: true,
		alias:'i'
	},
	programacion:{
		/*default: 0,*/
		demand:true,
		alias:'p'
	}
}

let obtenerpromedio = (nota_uno, nota_dos, nota_tres) => (nota_uno+nota_dos+nota_tres)/3;

const argv = require('yargs')
			.command('promedio', 'Calcular el promedio', opciones)
			.argv

module.exports = {
	obtenerpromedio,
	argv
};

/*console.log(argv.matematicas);
/*