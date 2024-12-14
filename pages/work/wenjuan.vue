<template>
	<view class="contentBox">
		<view class="big-title"></view>
		<view>
			<view class="questionBox" v-for="(item,index) in jsonData" :key="index">
				<view
					:class="{'qutitle':item.qd_ask_css_type==10, 'comment':item.qd_answer_type==10&&item.qd_ask_content == ''}">
					<view v-if="item.qd_ask_content!=''" v-html="item.qd_ask_content"></view>
					<view v-if="item.qd_remanrk!=''" v-html="item.qd_remanrk"></view>
				</view>
 
				<view v-if="item.qd_answer_type==5">
					<radio-group class="radioBox">
						<template v-for="item in radioData">
							<radio :value="item.value" :key="item.key" :label="item.name" color="red">{{item.name}}
							</radio>
						</template>
					</radio-group>
				</view>
			</view>
		</view>
 
		<view class="btn" @click="toHome">提交</view>
	</view>
</template>
 
<script>
	export default {
 
		data() {
			return {
				radioData: [{
						value: '5',
						name: '非常同意（5分）',
					},
					{
						value: '4',
						name: '同意（4分）'
					},
					{
						value: '3',
						name: '没意见（3分）'
					},
					{
						value: '2',
						name: '不同意（2分）'
					},
					{
						value: '1',
						name: '非常不同意（1分）'
					},
 
				],
				current: 0,
 
				//json数据
				jsonData: [{
					"qd_answer_content": "",
					"qd_answer_type": 20,
					"qd_ask_content": "<h3 style=\"color: rgb(77, 128, 191);\">您的评价对象为：</h3><h3><span style=\"font-weight: normal;font-size: 15px;\"></span></h3>",
					"qd_ask_css_type": 20,
					"qd_id": 1258241000,
					"qd_orderid": 3,
					"qd_qi_id": 1885643300,
					"qd_remanrk": "",
					"qd_value": ""
				},  {
					"qd_answer_content": "qd_answer_post_type",
					"qd_answer_options": [{
						"display_name": "生产线员工",
						"key": 10
					}, {
						"display_name": "检验员、仓管员",
						"key": 20
					}, {
						"display_name": "管理、技术、营销人员",
						"key": 30
					}, {
						"display_name": "行政部后勤人员",
						"key": 40
					}],
					"qd_answer_type": 40,
					"qd_ask_content": "2. 岗位类别",
					"qd_ask_css_type": 10,
					"qd_id": 1662165900,
					"qd_orderid": 10,
					"qd_qi_id": 1885643300,
					"qd_remanrk": "",
					"qd_value": ""
				}, {
					"qd_answer_content": "qd_answer_age",
					"qd_answer_options": [{
						"display_name": "25岁以下",
						"key": 10
					}, {
						"display_name": "25--30岁",
						"key": 20
					}, {
						"display_name": "31--40岁",
						"key": 30
					}, {
						"display_name": "41--50岁",
						"key": 40
					}, {
						"display_name": "50岁以上",
						"key": 50
					}],
					"qd_answer_type": 40,
					"qd_ask_content": "3. 年龄",
					"qd_ask_css_type": 10,
					"qd_id": 1739392300,
					"qd_orderid": 20,
					"qd_qi_id": 1885643300,
					"qd_remanrk": "",
					"qd_value": ""
				}, {
					"qd_answer_content": "qd_answer_education",
					"qd_answer_options": [{
						"display_name": "高中及以下",
						"key": 10
					}, {
						"display_name": "大专",
						"key": 20
					}, {
						"display_name": "本科",
						"key": 30
					}, {
						"display_name": "研究生和博士",
						"key": 40
					}],
					"qd_answer_type": 40,
					"qd_ask_content": "4. 学历",
					"qd_ask_css_type": 10,
					"qd_id": 1699062000,
					"qd_orderid": 30,
					"qd_qi_id": 1885643300,
					"qd_remanrk": "",
					"qd_value": ""
				}, {
					"qd_answer_content": "qd_answer_workyears",
					"qd_answer_options": [{
						"display_name": "1年以下",
						"key": 10
					}, {
						"display_name": "1-3年",
						"key": 20
					}, {
						"display_name": "3-5年",
						"key": 30
					}, {
						"display_name": "5-8年",
						"key": 40
					}, {
						"display_name": "8年以上",
						"key": 50
					}],
					"qd_answer_type": 40,
					"qd_ask_content": "5. 工龄 （进入公司的时间）",
					"qd_ask_css_type": 10,
					"qd_id": 1444122100,
					"qd_orderid": 40,
					"qd_qi_id": 1885643300,
					"qd_remanrk": "",
					"qd_value": ""
				}, {
					"qd_answer_content": "",
					"qd_answer_type": 20,
					"qd_ask_content": "<p></p><h3 style=\"color: rgb(77, 128, 191);\">二、 问卷内容</h3><h3><span style=\"font-weight: normal;font-size: 15px;\">请指出您对下列陈述同意或不同意的程度： 非常同意（ 5 分）； 同意（ 4 分）； 没意见（ 3 分）； 不同意（ 2 分）； 非常不同意（ 1 分）。</span></h3><p></p>",
					"qd_ask_css_type": 20,
					"qd_id": 1013388200,
					"qd_orderid": 50,
					"qd_qi_id": 1885643300,
					"qd_remanrk": "",
					"qd_value": ""
				}, {
					"qd_answer_content": "",
					"qd_answer_type": 20,
					"qd_ask_content": "<p><span style=\"color: rgb(77, 128, 191);\">1<span style=\"font-weight: bold;\">.工作本身</span></span></p>",
					"qd_ask_css_type": 20,
					"qd_id": 1380724900,
					"qd_orderid": 60,
					"qd_qi_id": 1885643300,
					"qd_remanrk": "",
					"qd_value": ""
				}, {
					"qd_answer_content": "",
					"qd_answer_type": 5,
					"qd_ask_content": "1. 我清楚地了解我工作的职责和任务。",
					"qd_ask_css_type": 10,
					"qd_id": 1011375500,
					"qd_orderid": 70,
					"qd_qi_id": 1885643300,
					"qd_remanrk": "",
					"qd_value": ""
				}, {
					"qd_answer_content": "",
					"qd_answer_type": 5,
					"qd_ask_content": "2. 目前的工作压力、强度是我可以承受的。",
					"qd_ask_css_type": 10,
					"qd_id": 1898376400,
					"qd_orderid": 80,
					"qd_qi_id": 1885643300,
					"qd_remanrk": "",
					"qd_value": ""
				}, {
					"qd_answer_content": "",
					"qd_answer_type": 5,
					"qd_ask_content": "3. 有足够的软件资源（讯息、知识）及硬件资源（设备、工具）来完成员工的本职工作。",
					"qd_ask_css_type": 10,
					"qd_id": 1185849400,
					"qd_orderid": 90,
					"qd_qi_id": 1885643300,
					"qd_remanrk": "",
					"qd_value": ""
				}, {
					"qd_answer_content": "",
					"qd_answer_type": 5,
					"qd_ask_content": "4. 我的工作被合理公正的分配。",
					"qd_ask_css_type": 10,
					"qd_id": 1148497900,
					"qd_orderid": 100,
					"qd_qi_id": 1885643300,
					"qd_remanrk": "",
					"qd_value": ""
				}, {
					"qd_answer_content": "",
					"qd_answer_type": 5,
					"qd_ask_content": "5. 公司为我提供了良好的工作环境（温度、照明、噪音、通风等）。",
					"qd_ask_css_type": 10,
					"qd_id": 1432664600,
					"qd_orderid": 110,
					"qd_qi_id": 1885643300,
					"qd_remanrk": "",
					"qd_value": ""
				}, {
					"qd_answer_content": "",
					"qd_answer_type": 5,
					"qd_ask_content": "6. 目前的工作时间是我可以承受的。",
					"qd_ask_css_type": 10,
					"qd_id": 1507208100,
					"qd_orderid": 120,
					"qd_qi_id": 1885643300,
					"qd_remanrk": "",
					"qd_value": ""
				}, ],

				current: 0
 
			};
		},
 
		methods: {
			radioChange: function(e) {
				this.jsonData.qd_value === this.jsonData.qd_answer_options.key.toString();
				console.log('当前选中为', this.jsonData.qd_answer_options)
			},
			/**
			 * 跳转
			 */
			toHome: function() {
				uni.navigateTo({
					url: '/pages/work/index'
				})
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