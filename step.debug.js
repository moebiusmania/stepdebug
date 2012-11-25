/* 
Step Debug - by Salvatore Laisa - http://www.salvatorelaisa.net
*/

window.step = {
	// Variabile conteggio
	i: 0,
	// Console
	log: function(m){
		console.log(m);
	},
	// Fai un passo
	next: function(){
		step.i++;
		console.log("Step " + step.i);
	},
	// Resetta il conteggio
	reset: function(){
		step.i = 0;
	}
}