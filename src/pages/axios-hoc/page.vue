<template lang="">
    <div>
        <WithErrorHandling :axios="axios">
            <ProductList/>
        </WithErrorHandling>
    </div>
</template>
<script>

import axios from './axiosInstance';
import WithErrorHandling from './withErrorHandling';
import ProductList from './productList';

export default {
    components: {
        WithErrorHandling,
        ProductList         
    },
    created() {
        this.axios = axios;
    }
}
</script>
<style lang="">
    
</style>