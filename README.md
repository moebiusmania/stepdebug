Step Debug
=========

E' un microscopico tool che ho creato per il mio modo di debuggare il codice Javascript, anziché continuare a piazzare dei console.log() inventandosi dei messaggi step.next() crea in automatico un messaggio incrementale, così inserendone più di uno nel codice sarà più facile intuire il punto di errore.

#### Richiamare la console
	step.log("qualcosa")
	
#### Messaggio incrementale (Step N)
	step.next()
	
#### Resettare il conteggio
	step.reset()
	
### Crediti
Realizzato da [Salvatore Laisa](http://www.salvatorelaisa.net/), rilasciato con licenza GNU General Public License v3.