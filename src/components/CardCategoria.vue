<script lang="ts">
import type ICategoria from '@/interfaces/ICategoria';
import type { PropType } from 'vue';
import Tag from './Tag.vue';  
import IngredienteSelecionavel from './IngredienteSelecionavel.vue';
export default {
  props: {
    categoria: { type: Object as PropType <ICategoria>, required: true } //required: essa propriedade é obrigatória de ser passada quando um componente for consumir o card categoria
  },
  components: { Tag, IngredienteSelecionavel },
  emits: ['adicionarIngrediente', 'removerIngrediente'],
}
</script>

<template>
  <article class="categoria">
    <header class="categoria__cabecalho">
      <img :src="`/public/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">

      <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
    </header>

    <ul class="categoria__ingredientes">
      <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente"> <!-- key: chave unica para cada ingrediente, para o Vue conseguir identificar cada item da lista :key="ingrediente" é uma boa prática para ajudar o Vue a identificar cada item da lista. -->

      <IngredienteSelecionavel 
        :ingrediente="ingrediente" 
        @adicionarIngrediente="$emit('adicionarIngrediente', $event)" 
        @remover-ingrediente="$emit('removerIngrediente', $event)"
      />
        
        <!-- L27 o v-bind é opcional, pois o Vue já entende que a propriedade ingrediente do componente IngredienteSelecionado é a mesma que a do prop ingrediente do CardCategoria. -->
      </li>
    </ul>
  </article>


</template>

<style scoped>
.categoria {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.categoria__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.categoria__imagem {
  width: 3.5rem;
}
.categoria__nome {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}
.categoria__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>