<template>
    <div>
        <h3>我是按钮</h3>
        <h3>{{msg}}</h3>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-4 col-sm-offset-4">
                    <div class="input-group">
                        <span class="input-group-addon">Name</span>
                        <input type="text" name="name" class="form-control" v-model="msg1">
                    </div>
                </div>
            </div>
            <h3>{{msg1}}</h3>
            <button class="btn btn-default" @click="change">默认按钮</button>
            <h3 v-show="flag">{{msg + " and hello world"}}</h3>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                msg1:'',
                flag:false
            }
        },
        methods:{
            change(){
                this.flag = ! this.flag;
            }
        }
    }
</script>