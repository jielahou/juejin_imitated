import request from  '../utils/request';

// 设置不同的请求配置

export const getTestData = (query) => {
    return request({
        url: 'URL',
        method: 'post',
        data: query
    })
};