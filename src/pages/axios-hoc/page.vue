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
    },
    routeConfig: {
      path: '/axios-hoc',
    },
    displayName: 'Using axios HOC'
}
</script>
<style lang="">
    
</style>