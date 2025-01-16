<template>
    <div class="discount">
        <h4>지금 결제하면 {{discountPrice}}% 할인</h4>
    </div>
</template>
  
<script>
    export default {
        name: 'DiscountExport',
        props: {
            discountPrice : Number,
        }
    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.discount{
    background: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
</style>