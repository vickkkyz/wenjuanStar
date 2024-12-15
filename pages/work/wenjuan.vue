<template>
	<view class="contentBox">
		<view class="big-title"></view>
		<view>
			<view class="questionBox" v-for="(item,index) in jsonData" :key="index">
				<view
					:class="{'qutitle':item.qd_ask_css_type==10, 'comment':item.qd_answer_type==10&&item.qd_ask_content == ''}">
					<view v-if="item.qd_ask_content!=''" v-html="item.qd_ask_content"></view>
				</view>

				<view v-if="item.qd_answer_type==5">
					<radio-group class="radioBox" v-model="xxx[index]">
						<template v-for="(item2, index) in radioData">
							<radio :value="item.value" :key="index" :label="item2.name" color="red">{{item2.name}}
							</radio>
						</template>
					</radio-group>
					<!-- <radio-group class="radioBox" @change="(e) => radioChange(e,item.name)">
						<template v-for="(item2, index) in radioData">
							<radio :value="item.value" :key="index" :label="item2.name" color="red">{{item2.name}}
							</radio>
						</template>
					</radio-group> -->
					<!-- <radio-group class="radioBox">
						<template v-for="item in radioData">
							<radio :value="item.value" :key="item.key" :label="item.name" color="red">{{item.name}}
							</radio>
						</template>
					</radio-group> -->
				</view>
			</view>
		</view>
 
		<view class="btn" @click="toHome">提交</view>
	</view>
</template>
 
<script>
	import { getData,getStatus} from '@/api/work'
	export default {
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			// console.log(option.evaluateName); //打印出上个页面传递的参数。
			// console.log(option.evaluatedName); //打印出上个页面传递的参数。
			this.evaluateName = option.evaluateName
			this.evaluatedName = option.evaluatedName
		},
		data() {
			return {
				evaluateName: '',
				evaluatedName: '',
				xxx:[],
				radioData: [{
						value: '5',
						name: '优秀',
					},
					{
						value: '4',
						name: '良好'
					},
					{
						value: '3',
						name: '及格'
					},
					{
						value: '2',
						name: '差劲'
					}
 
				],
				// status: 0,
				current: 0,
				jsonData: [],
				//json数据
				// jsonData: [{
				// 	"qd_answer_content": "",
				// 	"qd_answer_type": 20,
				// 	"qd_ask_content": "<h3 style=\"color: rgb(77, 128, 191);\">当前问卷的评价对象为：</h3>",
				// 	"qd_ask_css_type": 20,
				// },  {
				// 	"qd_answer_type": 5,
				// 	"qd_ask_content": "1. 我清楚地了解我工作的职责和任务。",
				// 	"qd_ask_css_type": 10,
				// }, {
					//"name": "题目2",
				// 	"qd_answer_type": 5,
				// 	"qd_ask_content": "2. 目前的工作压力、强度是我可以承受的。",
				// 	"qd_ask_css_type": 10,
				// } ],

				//current: 0
			};
		},
		mounted(){
			this.getWenjuan()
		},
		methods: {
			getWenjuan(){
				getData(this.evaluateName,this.evaluatedName).then(res=>{
					this.jsonData = res
					console.log('hhhhh',res)
					console.log("wwww",this.jsonData)
				})
			},
			radioChange: function(e,name) {
				console.log(name)
				// this.jsonData.qd_value === this.jsonData.qd_answer_options.key.toString();
				// console.log('当前选中为', this.jsonData.qd_answer_options)
			},
			toHome: function() {
				console.log("aaaaa",this.xxx)
				// uni.navigateTo({
				// 	url: '/pages/work/index'
				// })
			}
		}
	};
</script>
 
<style lang="scss">
	.contentBox {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
 
	.big-title {
		font-size: 36rpx;
		font-weight: bold;
		color: #457cde;
		margin: 20rpx 0rpx 0rpx 0rpx;
	}
 
	.questionBox {
		padding: 0px 20rpx 20rpx 20rpx;
	}
 
	.qutitle {
		display: flex;
		font-size: 28rpx;
		background-color: #f2f2f2;
		padding: 10rpx 20rpx;
	}
 
	.comment {
		background-color: white;
		margin-top: -50rpx;
	}
 
	.radioBox {
		margin: 10rpx 20rpx;
		display: flex;
		flex-direction: column;
	}
 
	radio {
		font-size: 28rpx;
		margin: 10rpx 0px !important;
	}
 
	checkbox {
		font-size: 28rpx;
		margin: 10rpx 0px !important;
	}
 
	.topic {
		font-size: 32rpx;
		font-weight: bold;
		color: #457cde;
		padding: 10rpx 0rpx;
	}
 
	.para-text {
		font-size: 28rpx;
		font-weight: bold;
		color: #444444;
		padding: 10rpx 0rpx;
	}
 
	.btn {
		width: 50%;
		padding: 20rpx 30rpx;
		margin: 40rpx 0rpx;
		font-size: 28rpx;
		color: white;
		background-color: #3677d3;
		border-radius: 10rpx;
		letter-spacing: 4rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>