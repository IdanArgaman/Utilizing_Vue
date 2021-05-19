<template>
    <div>
        <p>
                Hello, child component!
        </p>
        <p>
            Prop: {{ propToChild}}
        </p>
    
    </div>
</template>
<script>
export default {
    props:["propToChild"]
}
</script>
<style>
    
</style>