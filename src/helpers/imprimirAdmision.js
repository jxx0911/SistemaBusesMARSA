export default function imprimirAdmision(elemento) {
	let ventana = window.open("", "PRINT", "height=3508,width=2480");
	ventana.document.write("<html><title>" + document.title + "</title>");
	ventana.document.write('<link rel="stylesheet" href="style.css">');
	/* ventana.document.write(
		"<style>*{margin: 0;padding: 0;border: 0;}@page{margin: 0;}body{ font-family: Lucida Sans Typewriter; }.size18{font-size: 18px;font-weight: bold;text-align:center;}.size14{font-size: 14px;text-align:center;}.size14izq{font-size: 14px;font-weight: bold;}.size14der{font-size: 14px;text-align:right;}.centrar{text-align:center;}</style>"
	); */
	ventana.document.write("</head><body>");
	ventana.document.write(elemento.innerHTML);
	ventana.document.write("</body></html>");
	ventana.document.close();
	ventana.focus();
	ventana.onload = function () {
		ventana.print();
		ventana.close();
	};
	return true;
}
