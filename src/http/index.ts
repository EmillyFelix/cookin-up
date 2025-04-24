import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}


export async function obterCategorias() {
  return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/EmillyFelix/40bd0b8c3710b49fa8456eb20bf510b5/raw/366d179ed96be65661a8d12421eac717b8b71fde/categorias.json');
}


export async function obterReceitas() {
  return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/EmillyFelix/1a070d6c5d98a26988fec8a3047340b0/raw/2f2b3256dc356f00bf490bfb08d8ca971e60422f/receitas.json');
}
