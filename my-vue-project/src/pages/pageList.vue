<template>
   <div class="container">
       <div class="row">
            <div class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-default">
                        <div class="navbar-header">
                            <a href="#/list" class="navbar-brand">Angre</a>
                            <button class="navbar-toggle" data-toggle="collapse" data-target="#ex">
                                <span class="sr-only"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse" id="ex">
                            <ul class="nav navbar-nav navbar-right">
                                <li class="active"><a href="javascript:void(0)">Hello</a></li>
                                <li class=""><a href="javascript:void(0">World</a></li>
                                <li class=""><a href="javascript:void(0">Vue</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qui-nav nav-type-1">
                <a href="javascript:void(0)" v-for="(item,index) in items" :class="[commonClass,item.active ? activeClass : '']" @click="navClickEvent(items,index)">
                    <span class="nav-txt">{{item.text}}</span>
                </a>
            </div>
       </div>
   </div>
</template>

<script>
    export default{
        data(){
            return{
                commonClass:'nav-item',
                activeClass:'active',
                items:[
                    {
                        text:'首页',
                        active:true
                    },
                    {
                        text:'列表',
                        active:false
                    },
                    {
                        text:'关于',
                        active:false
                    },
                    {
                        text:'招聘',
                        active:false
                    }
                ]
            }
        },
        methods:{
            navClickEvent(items,index){
                items.forEach(function(el){
                    el.active = false;
                });
                items[index].active = true;
                this.$emit('navClickEvent',items,index);
            }
        }
    }
</script>

<style>
    @import './css/list.css'
</style>