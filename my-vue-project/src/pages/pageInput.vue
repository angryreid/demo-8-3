<template>
    <div>
        <h3>我是表单</h3>
        <angre @btnClickEvent="doSth" msg="i can click">
            <img sr<img slot="icon" class="ico" src="http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png" />
        </angre>
    </div>
</template>

<script>
    import Hello from '../components/Hello.vue'
    export default{
        name:'pageInput',
        components:{
            'angre':Hello
        },
        methods:{
            doSth(){
                alert('you click ');
            }
        }
    }
</script>