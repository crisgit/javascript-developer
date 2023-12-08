//funções
function addNumber(x: number, y: number): number {
    return x + y;
  }

  let soma: number = addNumber(4, 7);
  console.log(soma);
  
  function addToHello(name: string): string {
    return `Hello ${name}`;
  }
  console.log(addToHello("Cristina"));
  
  /* Funções multi tipos */
  function CallToPhone(phone: number | string): number | string {
    return phone;
  }
  console.log(CallToPhone(21986532533));
  
  /* Funções async */
  async function getDatabase(id: number): Promise<string> {
    return "fiat";
  }

