<script lang="ts">
import Tag from './Tag.vue';

export default{
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true } //required: essa propriedade é obrigatória de ser passada quando um componente for consumir o card categoria
    },
    data() {
        return {
            selecionado: false
        };
    },
    methods: {
        aoClicar() {
            this.selecionado = !this.selecionado

            if(this.selecionado) {
                this.$emit('adicionarIngrediente', this.ingrediente); // adiciona o ingrediente na lista de ingredientes selecionados
             } else {
              this.$emit('removerIngrediente', this.ingrediente); // remove o ingrediente da lista de ingredientes selecionados
             }	
        }
    },
    emits: ['adicionarIngrediente', 'removerIngrediente']
    // o emit é uma forma de comunicar entre componentes, o emit é um evento que o componente pai escuta e executa uma ação quando o evento é disparado.
}

</script>

<template>
    
    <!-- v-on é o mesmo que @, o Vue já entende que o @ é um evento de click. -->


    <button
        class="ingrediente" 
        @click="aoClicar" 
        :aria-pressed="selecionado"
    >
        <Tag :texto="ingrediente" :ativa="selecionado" />
    </button>

</template>

<style scoped>
.ingrediente {
    cursor: pointer;

}
</style>