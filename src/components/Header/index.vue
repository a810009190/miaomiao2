<template>
    <div>
        <h1>{{title}}</h1>
    </div>

</template>
<script>
export default {
    name: 'Header',
    props:{
        title:{
            type: String,
            default: "喵喵电影"
        }
    }
}
</script>
<style lang="scss" scoped>
    h1{
        line-height: 50px; background-color: #e54847;
        color: #ffffff; text-align: center;
        font-size: 18px; font-weight: normal;
        width: 100%;
    }




</style>