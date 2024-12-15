<template>
  <view class="work-container">
    <!-- 轮播图 -->
    <uni-swiper-dot class="uni-swiper-dot-box" :info="data" :current="current" field="content">
      <swiper class="swiper-box" :current="swiperDotIndex" @change="changeSwiper">
        <swiper-item v-for="(item, index) in data" :key="index">
          <view class="swiper-item" @click="clickBannerItem(item)">
            <image :src="item.image" mode="aspectFill" :draggable="false" />
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>

    <!-- 宫格组件 -->
    <uni-section title="问卷测评" type="line"></uni-section>
    <view class="grid-body">
      <uni-grid :column="4" :showBorder="false" @change="checkboxChange($event)">
        <uni-grid-item  :index=index v-for="(item, index) in data2" :key="index" >
          <view class="grid-item-box">
            <uni-icons type="person-filled" size="30"></uni-icons>
            <text class="text">{{item.name}}</text>
          </view>
        </uni-grid-item>
      </uni-grid>
	  <!-- <text class="text">{{name}}</text> -->
    </view>
  </view>
</template>



<script>
	import { getPeopleList,getStatus} from '@/api/work'
  export default {
    data() {
      return {
        current: 0,
        swiperDotIndex: 0,
        data: [{
            image: '/static/images/banner/banner01.jpg'
          }
        ],
		data2: [],
		name: this.$store.state.user.name,
		status: 0,
		evaluatedName: null
      }
    },
	mounted(){
		this.getList()
	},
    methods: {
	  getList(){
		getPeopleList(this.name).then(res=>{
			this.data2 = res
			console.log(this.data2)
		})
	  },
      clickBannerItem(item) {
        console.info(item)
      },
      changeSwiper(e) {
        this.current = e.detail.current
      },
      checkboxChange(e) {	
		  let evaluatedName
		  let evaluateName = this.name 
		  getPeopleList(evaluateName).then(res=>{
		  	evaluatedName = res[e.detail.index].name
			console.log(evaluateName)
		  	getStatus(evaluateName,evaluatedName).then(res=>{
				if(res == 0){
					uni.navigateTo({
						url: '/pages/work/wenjuan?evaluateName='+evaluateName+
						'&evaluatedName='+evaluatedName
					})
					// this.$tab.navigateTo('/pages/work/wenjuan')
				}else{
					this.$modal.alert("您已完成当前问卷~");
				}
			})
			
		  })
		
      }
    }
  }
</script>

<style lang="scss">
  /* #ifndef APP-NVUE */
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #fff;
    min-height: 100%;
    height: auto;
  }

  view {
    font-size: 14px;
    line-height: inherit;
  }

  /* #endif */

  .text {
    text-align: center;
    font-size: 26rpx;
    margin-top: 10rpx;
  }

  .grid-item-box {
    flex: 1;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
  }

  .uni-margin-wrap {
    width: 690rpx;
    width: 100%;
    ;
  }

  .swiper {
    height: 300rpx;
  }

  .swiper-box {
    height: 150px;
  }

  .swiper-item {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 300rpx;
    line-height: 300rpx;
  }

  @media screen and (min-width: 500px) {
    .uni-swiper-dot-box {
      width: 400px;
      /* #ifndef APP-NVUE */
      margin: 0 auto;
      /* #endif */
      margin-top: 8px;
    }

    .image {
      width: 100%;
    }
  }
</style>
