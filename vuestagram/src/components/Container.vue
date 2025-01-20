<template>
    <div>
        <div v-if="tapIndex == 0">
            <PostView v-for="(a,i) in vuestaData" :key="i" :vuestaData="a" @click="$store.commit('likes',i)" />
        </div>
        <!-- 필터선택페이지 -->
        <div v-if="tapIndex == 1">
            <div :class="filterName" class="upload-image" :style="{backgroundImage : `url(${uploadImg})`}"></div>
            <div class="filters">
                <FilterBox :filtersData="a" :uploadImg="uploadImg" v-for="a in filtersData" :key="a">
                    <!-- 2.컴포넌트 태그 사이에 데이터 넣으면 slot으로 전송됨 -->
                    <!-- name 지정 후 tamplate 태그로 감싸서 v-slot:a 이런식으로 데이터 묶어줘야함함  -->
                    <!-- {{ a }} -->
                    <!-- slot props = slot사용할떄 자식 데이터가 필요한 경우 사용 -->
                    <template v-slot:xx>{{ a }}</template>
                    <!-- <template v-slot:default="작명">{{ 작명 }}</template> -->
                </FilterBox>
            </div>
        </div>
        <!-- 글작성페이지 -->
        <div v-if="tapIndex == 2">
            <div :class="filterName" class="upload-image" :style="{backgroundImage : `url(${uploadImg})`}"></div>
            <div class="write">
                <textarea class="write-box" @input="$emit('uploadContent', $event.target.value)">write!</textarea>
            </div>
        </div>
    </div>
</template>
<script>
import postView from './Post.vue';
import FilterBox from './FilterBox.vue';

export default {
    name: "containerExport",
    data(){
        return{
            filtersData : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                            "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                            "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
        }
    },
    components: {
        PostView: postView,
        FilterBox: FilterBox,
    },
    props: {
        vuestaData: Object,
        tapIndex : Number,
        uploadImg : String,
        filterName : String,
    }
}
</script>
<style>
.upload-image {
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size: cover;
}

.filters {
    overflow-x: scroll;
    white-space: nowrap;
}

.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
}

.filters::-webkit-scrollbar {
    height: 5px;
}

.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>