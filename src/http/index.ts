import type ICategoria from '@/interfaces/ICategoria';

export async function obterCategorias() {
  const resposta = await fetch('https://gist.githubusercontent.com/EmillyFelix/40bd0b8c3710b49fa8456eb20bf510b5/raw/366d179ed96be65661a8d12421eac717b8b71fde/categorias.json');

  const categorias: ICategoria[] = await resposta.json();

  return categorias;
}