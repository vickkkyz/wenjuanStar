import request from '@/utils/request'

export function getPeopleList(name){
	return request({
	  url: '/system/relationships/evalutedlist',
	  method: 'get',
	  params: { evaluateName: name }
	})
}

export function getStatus(evaluateName,evaluatedName){
	return request({
	  url: '/system/relationships/getStatus',
	  method: 'get',
	  params: { evaluateName: evaluateName, evaluatedName:evaluatedName}
	})
}

export function getData(evaluateName,evaluatedName){
	return request({
	  url: '/system/topics/getData',
	  method: 'get',
	  params: { evaluateName: evaluateName, evaluatedName:evaluatedName}
	})
}