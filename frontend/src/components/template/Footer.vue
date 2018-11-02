<template>
    <footer class="footer">
        <span class="trab">Trabalho de Segurança e Auditoria de Sistemas</span>
        <span class="utf">UTFPR - Câmpus Cornélio Procópio</span>
        
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #DDD;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
    }

    .trab {
        align-content: right;
    }
</style>
