export const cronometro = {
    minutos: 0,
    segundos: 0,
    idInterval: null,
    tempo: true,
    mostrar() {
        const min = this.minutos.toString().padStart(2, "0");
        const sec = this.segundos.toString().padStart(2, "0");
        const texto = `
            Tempo atual do cronômetro: ${min} minutos e ${sec} segundos.
        `;
        return texto;
    },
    contador() {
        this.idInterval = setInterval(() => {
            this.segundos += 1;

            if (this.segundos >= 60) {
                this.minutos++;
                this.segundos = 0;
            }

            console.log(`${this.minutos} minutos e ${this.segundos} segundos.`);
        }, 1000);
        
    },
    iniciar() {
        if (this.tempo) {
            this.contador();
            this.tempo = false;
        }
    },
    pausar() { 
        clearInterval(this.idInterval);
    },
    continuar() {
        if(this.minutos !== 0 || this.segundos !== 0) {
            this.contador();
        }
    },
    zerar() {
        this.minutos = 0;
        this.segundos = 0;
        this.tempo = true;
    }
};

/* 
class Cronometro {
  minutos = 0;
  segundos = 0;
  #idInterval = null;
  #tempo = true;
  mostrar() {
    const min = this.minutos.toString().padStart(2, "0");
    const sec = this.segundos.toString().padStart(2, "0");
    return `Tempo atual do cronômetro= ${min} minutos e ${sec} segundos.`;
  }
  #contador() {
    this.#idInterval = setInterval(() => {
      this.segundos += 1;

      if (this.segundos >= 60) {
        this.minutos++;
        this.segundos = 0;
      }

      console.log(`${this.minutos} minutos e ${this.segundos} segundos.`);
    }, 1000);
  }
  iniciar() {
    if (this.#tempo) {
      this.#contador();
      this.#tempo = false;
    }
  }
  pausar() {
    clearInterval(this.#idInterval);
  }
  continuar() {
    if (this.minutos || this.segundos) {
      this.#contador();
    }
  }
  zerar() {
    this.minutos = 0;
    this.segundos = 0;
    this.#tempo = true;
  }
}

const meuCronometro = new Cronometro();
 */