import request from '@/utils/request'

export function getPeopleList(name){
	return request({
	  url: '/system/relationships/evalutedlist',
	  method: 'get',
	  params: { evaluationName: name }
	})
}